import { defineRouting } from "next-intl/routing"

import type { Locale } from "@/lib/types/localized"

// Czech is the default and has no URL prefix; English lives under /en.
// Internal pathnames (the keys) are the English ones; each language gets
// its own public URL.
export const routing = defineRouting({
	locales: ["cs", "en"] satisfies Locale[],
	defaultLocale: "cs",
	localePrefix: "as-needed",
	// Language follows the URL only, never the browser's language, so a
	// shared Czech link opens in Czech for everyone.
	localeDetection: false,
	// Nothing reads a remembered language, so don't set a cookie for it
	// (one less cookie for the consent banner to cover).
	localeCookie: false,
	pathnames: {
		"/": "/",
		"/visit": { cs: "/pobocky", en: "/visit" },
		"/visit/[gym]": { cs: "/pobocky/[gym]", en: "/visit/[gym]" },
		"/events": { cs: "/akce", en: "/events" },
		"/hangar-challenge": "/hangar-challenge",
		"/about": { cs: "/o-nas", en: "/about" },
		"/about/team": { cs: "/o-nas/tym", en: "/about/team" },
		"/about/careers": { cs: "/o-nas/kariera", en: "/about/careers" },
		"/about/careers/[slug]": {
			cs: "/o-nas/kariera/[slug]",
			en: "/about/careers/[slug]",
		},
		"/contact": { cs: "/kontakt", en: "/contact" },
		"/privacy-policy": { cs: "/ochrana-osobnich-udaju", en: "/privacy-policy" },
		"/cookie-policy": { cs: "/cookies", en: "/cookie-policy" },
		"/visitor-rules": { cs: "/navstevni-rad", en: "/visitor-rules" },
		// Internal design reference: not linked, not indexed.
		"/styleguide": "/styleguide",
	},
})

// An internal page path, e.g. "/visit" or "/visit/[gym]".
export type AppPathname = keyof typeof routing.pathnames

// A page path without route params, usable directly as a link href.
export type StaticPathname = Exclude<AppPathname, `${string}[${string}`>
