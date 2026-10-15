import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { LegalPage } from "@/components/shared/legal-page"
import { getPageMetadata } from "@/i18n/metadata"
import { getPageLocale, type LocaleParams } from "@/i18n/page-locale"

export async function generateMetadata({
	params,
}: LocaleParams): Promise<Metadata> {
	const locale = await getPageLocale(params)
	const t = await getTranslations({ locale, namespace: "VisitorRulesPage" })
	return getPageMetadata({ locale, href: "/visitor-rules", title: t("title") })
}

export default async function VisitorRulesPage({ params }: LocaleParams) {
	await getPageLocale(params)
	const t = await getTranslations("VisitorRulesPage")

	return (
		<LegalPage
			title={t("title")}
			paragraphs={[t("paragraph1"), t("paragraph2")]}
		/>
	)
}
