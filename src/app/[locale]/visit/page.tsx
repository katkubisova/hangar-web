import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { FaqSection } from "@/components/shared/faq-section"
import { HeroSection } from "@/components/shared/hero-section"
import { LocationCard } from "@/components/shared/location-card"
import { PhotoGallery } from "@/components/shared/photo-gallery"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { getPageMetadata } from "@/i18n/metadata"
import { getPageLocale, type LocaleParams } from "@/i18n/page-locale"
import { faqItems } from "@/lib/data/faq-items"
import { gyms } from "@/lib/data/gyms"
import { localize } from "@/lib/utils"

const visibleGyms = gyms
	.filter(gym => gym.status !== "hidden")
	.sort((a, b) => a.displayOrder - b.displayOrder)

// A mix of both branches: the first three photos of each, interleaved.
const galleryImages = [0, 1, 2].flatMap(index =>
	visibleGyms.flatMap(gym => gym.galleryImages[index] ?? [])
)

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
			<HeroSection
				eyebrow={t("eyebrow")}
				title={t("title")}
				subtitle={t("subtitle")}
				image={{ src: "/photos/ostrava-training.jpg", alt: t("imageLabel") }}
			/>

			<Section>
				<SectionHeading title={t("chooseLocation")} />
				<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{localize(visibleGyms, locale).map(gym => (
						<li key={gym.slug}>
							<LocationCard gym={gym} />
						</li>
					))}
				</ul>
			</Section>

			<Section tone="muted">
				<SectionHeading title={common("gallery")} />
				<PhotoGallery images={localize(galleryImages, locale)} />
			</Section>

			<FaqSection
				title={common("faq")}
				items={localize(faqItems, locale)}
				tone="default"
			/>
		</>
	)
}
