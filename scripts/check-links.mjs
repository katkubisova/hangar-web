#!/usr/bin/env node
// Link checker for the running site (Phase 3 of the visual + copy phase).
//
//   pnpm build && pnpm start          # in one terminal
//   pnpm check:links                  # in another
//
// Crawls every internal page reachable from "/" (Czech) and "/en"
// (English) and fails when:
//   - an internal link answers with anything but 200 (redirects count as
//     failures too: internal links should point at the final URL),
//   - a page contains href="#" (a placeholder link).
// External links (booking systems, PDFs, maps, socials) are checked as
// well and listed with their status; pass --skip-external to leave them
// out. A failing external link is reported but doesn't fail the run,
// because third-party sites block bots and go down on their own.
//
// Options: --base=http://localhost:3000  --skip-external

const args = new Map(
	process.argv.slice(2).map(arg => {
		const [key, value] = arg.replace(/^--/, "").split("=")
		return [key, value ?? true]
	})
)
const BASE = String(
	args.get("base") ?? process.env.BASE_URL ?? "http://localhost:3000"
).replace(/\/$/, "")
const SKIP_EXTERNAL = args.has("skip-external")

const ASSET =
	/^\/(_next|brand|photos)\/|\.(ico|png|jpe?g|svg|webp|css|js|woff2?|txt|xml)$/

function decode(value) {
	return value
		.replaceAll("&amp;", "&")
		.replaceAll("&#x27;", "'")
		.replaceAll("&quot;", '"')
}

async function fetchPage(path) {
	const response = await fetch(BASE + path, { redirect: "manual" })
	const body = response.status === 200 ? await response.text() : ""
	return { status: response.status, body }
}

const seen = new Set()
const queue = ["/", "/en"]
const internalFailures = []
const placeholderLinks = []
const external = new Map() // url -> first page it was found on

while (queue.length > 0) {
	const path = queue.shift()
	if (seen.has(path)) continue
	seen.add(path)

	const { status, body } = await fetchPage(path)
	if (status !== 200) {
		internalFailures.push(`${status}  ${path}`)
		continue
	}

	// Only real links: <a href> and <iframe src>. Skip the RSC payload in
	// <script> tags, which repeats every href as data.
	const html = body.replace(/<script[\s\S]*?<\/script>/g, "")
	for (const [, attribute, raw] of html.matchAll(
		/<(?:a|iframe)\b[^>]*?\s(href|src)="([^"]*)"/g
	)) {
		const link = decode(raw)
		if (link === "#" || link === "") {
			placeholderLinks.push(`${path}  (${attribute}="${link}")`)
			continue
		}
		if (/^(mailto|tel):/.test(link) || link.startsWith("#")) continue
		if (/^https?:\/\//.test(link)) {
			if (!external.has(link)) external.set(link, path)
			continue
		}
		const target = new URL(link, BASE + path)
		if (ASSET.test(target.pathname)) continue
		queue.push(target.pathname)
	}
}

console.log(`Crawled ${seen.size} internal URLs from ${BASE}`)

let externalFailures = []
if (!SKIP_EXTERNAL) {
	const results = await Promise.all(
		[...external].map(async ([url, foundOn]) => {
			try {
				// Some servers reject HEAD; fall back to GET.
				let response = await fetch(url, { method: "HEAD", redirect: "follow" })
				if (response.status >= 400) {
					response = await fetch(url, { redirect: "follow" })
				}
				return { url, foundOn, status: response.status }
			} catch (error) {
				return {
					url,
					foundOn,
					status: `error (${error.cause?.code ?? error.message})`,
				}
			}
		})
	)
	console.log(`\nExternal links (${results.length}):`)
	for (const { url, status } of results.sort((a, b) =>
		a.url.localeCompare(b.url)
	)) {
		console.log(`  ${status}  ${url}`)
	}
	externalFailures = results.filter(
		r => typeof r.status !== "number" || r.status >= 400
	)
}

if (internalFailures.length > 0) {
	console.log("\nInternal links that don't answer 200:")
	for (const line of internalFailures) console.log(`  ${line}`)
}
if (placeholderLinks.length > 0) {
	console.log('\nPlaceholder links (href="#"):')
	for (const line of placeholderLinks) console.log(`  ${line}`)
}
if (externalFailures.length > 0) {
	console.log("\nExternal links to check by hand (not a failure):")
	for (const { url, status, foundOn } of externalFailures) {
		console.log(`  ${status}  ${url}  (on ${foundOn})`)
	}
}

const failed = internalFailures.length > 0 || placeholderLinks.length > 0
console.log(
	failed
		? "\n✗ Link check failed"
		: "\n✓ No broken internal links, no placeholder links"
)
process.exit(failed ? 1 : 0)
