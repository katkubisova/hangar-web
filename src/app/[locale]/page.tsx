import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { FaqAccordion } from "@/components/shared/faq-accordion"
import { HeroSection } from "@/components/shared/hero-section"
import { LocationCard } from "@/components/shared/location-card"
import { Section } from "@/components/shared/section"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { getPageMetadata } from "@/i18n/metadata"
import { Link } from "@/i18n/navigation"
import { getPageLocale, type LocaleParams } from "@/i18n/page-locale"
import { faqItems } from "@/lib/data/faq-items"
import { gyms } from "@/lib/data/gyms"
import { localize } from "@/lib/utils"

const visibleGyms = gyms
	.filter(gym => gym.status !== "hidden")
	.sort((a, b) => a.displayOrder - b.displayOrder)

export async function generateMetadata({
	params,
}: LocaleParams): Promise<Metadata> {
	const locale = await getPageLocale(params)
	const t = await getTranslations({ locale, namespace: "HomePage" })
	return getPageMetadata({ locale, href: "/", title: t("metaTitle") })
}

export default async function HomePage({ params }: LocaleParams) {
	const locale = await getPageLocale(params)
	const t = await getTranslations("HomePage")

	return (
		<>
			<HeroSection
				eyebrow={t("hero.eyebrow")}
				image={{ src: "/photos/brno-overhang.jpg", alt: t("hero.imageLabel") }}
				title={t("hero.title")}
				subtitle={t("hero.subtitle")}
				cta={{ label: t("hero.cta"), href: "#locations" }}
			/>

			<Section id="about">
				<div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold">{t("about.title")}</h2>
						<p className="text-muted-foreground leading-relaxed">
							{t("about.paragraph1")}
						</p>
						<p className="text-muted-foreground leading-relaxed">
							{t("about.paragraph2")}
						</p>
						<p className="text-muted-foreground leading-relaxed">
							{t("about.paragraph3")}
						</p>
					</div>
					<PlaceholderImage
						label={t("about.imageLabel")}
						className="rounded-lg"
					/>
				</div>
			</Section>

			<Section id="locations" tone="muted">
				<div className="mb-8 text-center">
					<h2 className="text-3xl font-bold">{t("locations.title")}</h2>
				</div>
				<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{localize(visibleGyms, locale).map(gym => (
						<li key={gym.slug}>
							<LocationCard gym={gym} />
						</li>
					))}
				</ul>
			</Section>

			<Section>
				<div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold">{t("events.title")}</h2>
						<p className="text-muted-foreground leading-relaxed">
							{t("events.line1")}
						</p>
						<p className="text-muted-foreground leading-relaxed">
							{t("events.line2")}
						</p>
						<Button render={<Link href="/events" />}>{t("events.cta")}</Button>
					</div>
					<PlaceholderImage
						label={t("events.imageLabel")}
						className="rounded-lg"
					/>
				</div>
			</Section>

			<Section tone="muted">
				<div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold">{t("visit.title")}</h2>
						<p className="text-muted-foreground leading-relaxed">
							{t("visit.line1")}
						</p>
						<p className="text-muted-foreground leading-relaxed">
							{t("visit.line2")}
						</p>
						<Button render={<Link href="/visit" />}>{t("visit.cta")}</Button>
					</div>
					<PlaceholderImage
						label={t("visit.imageLabel")}
						className="rounded-lg"
					/>
				</div>
			</Section>

			<Section>
				<h2 className="mb-8 text-center text-3xl font-bold">{t("faqTitle")}</h2>
				<div className="mx-auto max-w-2xl">
					<FaqAccordion items={localize(faqItems, locale)} />
				</div>
			</Section>
		</>
	)
}
