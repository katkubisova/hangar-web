import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { getPageMetadata } from "@/i18n/metadata"
import { getPageLocale, type LocaleParams } from "@/i18n/page-locale"

import { ContactPageContent } from "./contact-page-content"

export async function generateMetadata({
	params,
}: LocaleParams): Promise<Metadata> {
	const locale = await getPageLocale(params)
	const t = await getTranslations({ locale, namespace: "ContactPage" })
	return getPageMetadata({ locale, href: "/contact", title: t("title") })
}

interface ContactPageProps extends LocaleParams {
	searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function ContactPage({
	params,
	searchParams,
}: ContactPageProps) {
	await getPageLocale(params)
	// Reading the query makes the page render per request, so the selected
	// branch (?gym=) is in the server HTML instead of appearing only after
	// JavaScript loads.
	await searchParams
	return <ContactPageContent />
}
