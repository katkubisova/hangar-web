import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// Static redirects() can't fully strip a ?gym= value once it's matched via
// `has` — Next.js always forwards it to the destination regardless of the
// destination's own query string. Middleware gives full control over the
// resulting URL, so the old tabbed /visit?gym= links land on clean URLs.
const BRANCH_PAGE_BY_GYM_SLUG: Record<string, string> = {
	brno: "/visit/brno",
	ostrava: "/visit/ostrava",
}

export function middleware(request: NextRequest) {
	const { pathname, searchParams } = request.nextUrl

	if (pathname === "/visit") {
		const gym = searchParams.get("gym")
		if (gym) {
			const destination = BRANCH_PAGE_BY_GYM_SLUG[gym] ?? "/visit"
			return NextResponse.redirect(new URL(destination, request.url))
		}
	}

	if (pathname === "/cafe" || pathname === "/physio") {
		return NextResponse.redirect(new URL("/visit", request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ["/visit", "/cafe", "/physio"],
}
