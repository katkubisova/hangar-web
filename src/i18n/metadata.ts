import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { getPathname } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import type { Locale } from "@/lib/types/localized"

type PathnameHref = Parameters<typeof getPathname>[0]["href"]

interface PageMetadataOptions {
	locale: Locale
	href: PathnameHref
	title: string
	description?: string
}

// Title, description and hreflang alternates (which tell search engines
// that a Czech and an English version of the page exist) for one page.
export async function getPageMetadata({
	locale,
	href,
	title,
	description,
}: PageMetadataOptions): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: "Metadata" })
	const languages = Object.fromEntries(
		routing.locales.map(lang => [lang, getPathname({ locale: lang, href })])
	)

	return {
		title,
		description: description ?? t("description"),
		alternates: {
			canonical: getPathname({ locale, href }),
			languages: {
				...languages,
				"x-default": getPathname({ locale: routing.defaultLocale, href }),
			},
		},
	}
}
