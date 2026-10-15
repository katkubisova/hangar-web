import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { BenefitCard } from "@/components/shared/benefit-card"
import { EmptyState } from "@/components/shared/empty-state"
import { HeroSection } from "@/components/shared/hero-section"
import { PositionListItem } from "@/components/shared/position-list-item"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { getPageMetadata } from "@/i18n/metadata"
import { getPageLocale, type LocaleParams } from "@/i18n/page-locale"
import { benefitCards } from "@/lib/data/benefit-cards"
import { positions } from "@/lib/data/positions"
import { localize } from "@/lib/utils"

const openPositions = positions
	.filter(position => position.status === "open")
	.sort((a, b) => a.displayOrder - b.displayOrder)

const sortedBenefitCards = [...benefitCards].sort(
	(a, b) => a.displayOrder - b.displayOrder
)

export async function generateMetadata({
	params,
}: LocaleParams): Promise<Metadata> {
	const locale = await getPageLocale(params)
	const t = await getTranslations({ locale, namespace: "CareersPage" })
	return getPageMetadata({ locale, href: "/about/careers", title: t("title") })
}

export default async function CareersPage({ params }: LocaleParams) {
	const locale = await getPageLocale(params)
	const t = await getTranslations("CareersPage")

	return (
		<>
			<HeroSection
				eyebrow={t("eyebrow")}
				title={t("title")}
				subtitle={t("subtitle")}
				image={{ src: "/photos/ostrava-coffee.jpg", alt: t("imageLabel") }}
			/>

			<Section>
				<SectionHeading title={t("whyTitle")} />
				<ul className="grid gap-px border border-foreground bg-foreground sm:grid-cols-2 lg:grid-cols-4">
					{localize(sortedBenefitCards, locale).map(card => (
						<li key={card.title}>
							<BenefitCard benefit={card} />
						</li>
					))}
				</ul>
			</Section>

			<Section tone="muted">
				<SectionHeading title={t("openPositions")} />
				{openPositions.length === 0 ? (
					<EmptyState
						message={t("empty")}
						action={{ label: t("emptyCta"), href: "/contact" }}
					/>
				) : (
					<ul className="border-t border-foreground">
						{localize(openPositions, locale).map(position => (
							<li key={position.slug}>
								<PositionListItem position={position} />
							</li>
						))}
					</ul>
				)}
			</Section>
		</>
	)
}
