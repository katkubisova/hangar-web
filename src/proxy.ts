import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import createMiddleware from "next-intl/middleware"

import { routing } from "@/i18n/routing"
import type { Locale } from "@/lib/types/localized"

const handleI18nRouting = createMiddleware(routing)

const GYM_SLUGS = ["brno", "ostrava"]

// Old URLs from earlier builds, in either language:
// - the tabbed /visit?gym= page → that branch's own page,
// - /cafe and /physio (now sections of the branch pages) → the branches list.
// Static redirects() can't fully strip a ?gym= value once it's matched via
// `has` — Next.js always forwards it to the destination — so this runs here.
function getLegacyRedirect(request: NextRequest) {
	const { pathname, searchParams } = request.nextUrl
	const locale: Locale = pathname.startsWith("/en/") ? "en" : "cs"
	const path = locale === "en" ? pathname.slice("/en".length) : pathname
	const prefix = locale === "en" ? "/en" : ""
	const visitPath = routing.pathnames["/visit"][locale]

	if (path === "/visit" || path === visitPath) {
		const gym = searchParams.get("gym")
		if (gym) {
			const branchPath = GYM_SLUGS.includes(gym)
				? routing.pathnames["/visit/[gym]"][locale].replace("[gym]", gym)
				: visitPath
			return `${prefix}${branchPath}`
		}
	}

	if (path === "/cafe" || path === "/physio") {
		return `${prefix}${visitPath}`
	}

	return null
}

export function proxy(request: NextRequest) {
	const legacyDestination = getLegacyRedirect(request)
	if (legacyDestination) {
		return NextResponse.redirect(new URL(legacyDestination, request.url))
	}

	return handleI18nRouting(request)
}

export const config = {
	// Everything except API routes, Next.js internals and static files.
	matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
}
