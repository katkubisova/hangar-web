import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { HeroSection } from "@/components/shared/hero-section"
import { Section } from "@/components/shared/section"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { getPageMetadata } from "@/i18n/metadata"
import { getPageLocale, type LocaleParams } from "@/i18n/page-locale"

const STEP_KEYS = ["step1", "step2", "step3", "step4"] as const

export async function generateMetadata({
	params,
}: LocaleParams): Promise<Metadata> {
	const locale = await getPageLocale(params)
	const t = await getTranslations({ locale, namespace: "ChallengePage" })
	return getPageMetadata({
		locale,
		href: "/hangar-challenge",
		title: t("title"),
	})
}

export default async function HangarChallengePage({ params }: LocaleParams) {
	await getPageLocale(params)
	const t = await getTranslations("ChallengePage")

	return (
		<>
			<HeroSection title={t("title")} subtitle={t("subtitle")} />

			<Section>
				<div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold">{t("what.title")}</h2>
						<p className="text-muted-foreground leading-relaxed">
							{t("what.text")}
						</p>
						<p className="text-muted-foreground leading-relaxed">
							{t("what.challenger")}
						</p>
					</div>
					<PlaceholderImage
						label={t("what.imageLabel")}
						className="rounded-lg"
					/>
				</div>
			</Section>

			<Section className="bg-muted/30">
				<h2 className="mb-8 text-3xl font-bold">{t("howItWorks")}</h2>
				<ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{STEP_KEYS.map((key, index) => (
						<li key={key} className="space-y-2">
							<span className="text-sm font-medium text-muted-foreground">
								{t("stepLabel", { number: index + 1 })}
							</span>
							<p className="font-medium">{t(`steps.${key}`)}</p>
						</li>
					))}
				</ol>
			</Section>
		</>
	)
}
