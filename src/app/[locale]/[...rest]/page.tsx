import { notFound } from "next/navigation"

// Any URL that matches no page renders the localized 404 inside the site
// layout (header, footer, language switcher) instead of a bare error page.
export default function CatchAllPage() {
	notFound()
}
