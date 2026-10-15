import { redirect } from "@/i18n/navigation"
import { getPageLocale, type LocaleParams } from "@/i18n/page-locale"

export default async function AboutPage({ params }: LocaleParams) {
	const locale = await getPageLocale(params)
	redirect({ href: "/about/team", locale })
}
