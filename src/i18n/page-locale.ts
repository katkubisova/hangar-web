import { notFound } from "next/navigation"
import { hasLocale } from "next-intl"
import { setRequestLocale } from "next-intl/server"

import { routing } from "@/i18n/routing"
import type { Locale } from "@/lib/types/localized"

export interface LocaleParams {
	params: Promise<{ locale: string }>
}

// Reads and validates the [locale] route param, and enables static
// rendering for it. Call it first in every page, layout and
// generateMetadata under src/app/[locale].
export async function getPageLocale(
	params: Promise<{ locale: string }>
): Promise<Locale> {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}
	setRequestLocale(locale)
	return locale
}
