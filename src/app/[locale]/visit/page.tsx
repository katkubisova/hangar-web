import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { FaqAccordion } from "@/components/shared/faq-accordion"
import { HeroSection } from "@/components/shared/hero-section"
import { LocationCard } from "@/components/shared/location-card"
import { PhotoGallery } from "@/components/shared/photo-gallery"
import { Section } from "@/components/shared/section"
import { getPageMetadata } from "@/i18n/metadata"
import { getPageLocale, type LocaleParams } from "@/i18n/page-locale"
import { faqItems } from "@/lib/data/faq-items"
import { gyms } from "@/lib/data/gyms"
import { localize } from "@/lib/utils"

const visibleGyms = gyms
	.filter(gym => gym.status !== "hidden")
	.sort((a, b) => a.displayOrder - b.displayOrder)

const galleryImages = gyms.flatMap(gym => gym.galleryImages)

export async function generateMetadata({
	params,
}: LocaleParams): Promise<Metadata> {
	const locale = await getPageLocale(params)
	const t = await getTranslations({ locale, namespace: "VisitPage" })
	return getPageMetadata({ locale, href: "/visit", title: t("title") })
}

export default async function VisitPage({ params }: LocaleParams) {
	const locale = await getPageLocale(params)
	const t = await getTranslations("VisitPage")
	const common = await getTranslations("Common")

	return (
		<>
			<HeroSection title={t("title")} subtitle={t("subtitle")} />

			<Section>
				<div className="mb-8 text-center">
					<h2 className="text-3xl font-bold">{t("chooseLocation")}</h2>
				</div>
				<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{localize(visibleGyms, locale).map(gym => (
						<li key={gym.slug}>
							<LocationCard gym={gym} />
						</li>
					))}
				</ul>
			</Section>

			<Section className="bg-muted/30">
				<h2 className="mb-6 text-2xl font-bold">{common("gallery")}</h2>
				<PhotoGallery images={localize(galleryImages, locale)} />
			</Section>

			<Section>
				<h2 className="mb-4 text-2xl font-bold">{common("faq")}</h2>
				<FaqAccordion items={localize(faqItems, locale)} />
			</Section>
		</>
	)
}
