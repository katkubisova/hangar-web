import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { Sticker } from "@/components/brand/sticker"
import {
	WallProfile,
	type WallProfileName,
} from "@/components/brand/wall-profile"
import { GradientSection } from "@/components/shared/gradient-section"
import { HeroSection } from "@/components/shared/hero-section"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { FlagIcon } from "@/components/ui/icons"
import { getPageMetadata } from "@/i18n/metadata"
import { getPageLocale, type LocaleParams } from "@/i18n/page-locale"

const STEP_KEYS = ["step1", "step2", "step3", "step4"] as const

// The three categories named in the Challenge rules, each on a wall profile.
const CATEGORIES: { name: string; profile: WallProfileName }[] = [
	{ name: "Hobby", profile: "beast" },
	{ name: "Sport", profile: "boomerang" },
	{ name: "Elite", profile: "monster" },
]

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
			<HeroSection
				eyebrow={t("eyebrow")}
				title={t("title")}
				subtitle={t("subtitle")}
				image={{
					src: "/photos/brno-routesetting.jpg",
					alt: t("what.imageLabel"),
				}}
			/>

			<Section>
				<div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
					<div className="lg:col-span-6">
						<SectionHeading title={t("what.title")} />
						<p className="text-muted-foreground">{t("what.text")}</p>
					</div>
					<ul
						aria-label={t("categories")}
						className="grid grid-cols-3 gap-3 lg:col-span-6"
					>
						{CATEGORIES.map(category => (
							<li key={category.name}>
								<WallProfile
									profile={category.profile}
									contentClassName="items-center"
								>
									<span className="text-xs font-bold tracking-eyebrow uppercase sm:text-sm">
										{category.name}
									</span>
								</WallProfile>
							</li>
						))}
					</ul>
				</div>
			</Section>

			<Section tone="muted">
				<SectionHeading title={t("howItWorks")} />
				<ol className="grid gap-px border border-foreground bg-foreground md:grid-cols-2 lg:grid-cols-4">
					{STEP_KEYS.map((key, index) => (
						<li key={key} className="flex flex-col gap-6 bg-background p-6">
							<span
								aria-hidden="true"
								className="font-display text-display font-bold tracking-heading text-electric-violet"
							>
								{String(index + 1).padStart(2, "0")}
							</span>
							<span className="sr-only">
								{t("stepLabel", { number: index + 1 })}
							</span>
							<p className="font-medium">{t(`steps.${key}`)}</p>
						</li>
					))}
				</ol>
			</Section>

			{/* Challenger, the race series, on the events gradient. */}
			<GradientSection>
				<div className="lg:col-span-7">
					<p className="eyebrow mb-4 text-alabaster">
						{t("challengerEyebrow")}
					</p>
					<h2 className="mb-6 text-display font-bold text-alabaster">
						Challenger 2026
					</h2>
					<p className="max-w-2xl text-lead text-alabaster">
						{t("what.challenger")}
					</p>
				</div>
				<div className="flex justify-center lg:col-span-5">
					<Sticker
						text="Challenger 2026"
						className="w-48 bg-cod-gray text-alabaster md:w-64"
					>
						<FlagIcon aria-hidden="true" className="size-12" />
					</Sticker>
				</div>
			</GradientSection>
		</>
	)
}
