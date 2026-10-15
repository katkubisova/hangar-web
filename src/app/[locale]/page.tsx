import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { BrandImage } from "@/components/brand/brand-image"
import { Sticker } from "@/components/brand/sticker"
import {
	WallProfile,
	type WallProfileName,
} from "@/components/brand/wall-profile"
import { FaqSection } from "@/components/shared/faq-section"
import { HeroSection } from "@/components/shared/hero-section"
import { LocationCard } from "@/components/shared/location-card"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon, FlagIcon } from "@/components/ui/icons"
import { getPageMetadata } from "@/i18n/metadata"
import { Link } from "@/i18n/navigation"
import { getPageLocale, type LocaleParams } from "@/i18n/page-locale"
import { faqItems } from "@/lib/data/faq-items"
import { gyms } from "@/lib/data/gyms"
import { localize } from "@/lib/utils"

const visibleGyms = gyms
	.filter(gym => gym.status !== "hidden")
	.sort((a, b) => a.displayOrder - b.displayOrder)

// Key facts, each carried by a wall profile as the guide shows them.
const STATS: {
	key: "boulders" | "grades" | "weekly"
	profile: WallProfileName
}[] = [
	{ key: "boulders", profile: "beast" },
	{ key: "grades", profile: "boomerang" },
	{ key: "weekly", profile: "monster" },
]

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
				<div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
					<div className="lg:col-span-6">
						<SectionHeading
							eyebrow={t("about.eyebrow")}
							title={t("about.title")}
						/>
						<div className="space-y-4 text-muted-foreground">
							<p className="text-lead text-foreground">
								{t("about.paragraph1")}
							</p>
							<p>{t("about.paragraph2")}</p>
							<p>{t("about.paragraph3")}</p>
						</div>
					</div>
					<BrandImage
						src="/photos/brno-climber.jpg"
						alt={t("about.imageLabel")}
						aspectRatio="aspect-[4/5]"
						className="lg:col-span-6"
					/>
				</div>

				<ul className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-3 md:mt-24">
					{STATS.map(({ key, profile }) => (
						<li key={key}>
							<WallProfile
								profile={profile}
								contentClassName="items-center text-center"
							>
								<span className="font-display text-h2 font-bold tracking-heading uppercase">
									{t(`stats.${key}.value`)}
								</span>
								<span className="text-xs font-medium tracking-eyebrow uppercase">
									{t(`stats.${key}.label`)}
								</span>
							</WallProfile>
						</li>
					))}
				</ul>
			</Section>

			<Section id="locations" tone="muted">
				<SectionHeading
					eyebrow={t("locations.eyebrow")}
					title={t("locations.title")}
				/>
				<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{localize(visibleGyms, locale).map(gym => (
						<li key={gym.slug}>
							<LocationCard gym={gym} />
						</li>
					))}
				</ul>
			</Section>

			<Section tone="dark">
				<div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
					<div className="relative lg:col-span-6">
						{/* Saturated gradient: the guide keeps these for events. */}
						<BrandImage
							src="/photos/ostrava-coaching.jpg"
							alt={t("events.imageLabel")}
							gradient="violet-trinidad"
							aspectRatio="aspect-[4/5]"
						/>
						<Sticker
							text={t("events.sticker")}
							className="absolute -right-4 -bottom-8 w-32 bg-trinidad text-cod-gray md:w-40"
						>
							<FlagIcon aria-hidden="true" className="size-10" />
						</Sticker>
					</div>
					<div className="lg:col-span-6">
						<SectionHeading
							eyebrow={t("events.eyebrow")}
							title={t("events.title")}
							className="mb-4 md:mb-4"
						>
							<p>{t("events.line1")}</p>
						</SectionHeading>
						<p className="mb-8 text-muted-foreground">{t("events.line2")}</p>
						<Button size="lg" render={<Link href="/events" />}>
							{t("events.cta")}
							<ChevronRightIcon aria-hidden="true" />
						</Button>
					</div>
				</div>
			</Section>

			<Section>
				<div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
					<div className="lg:order-2 lg:col-span-5">
						<SectionHeading
							eyebrow={t("visit.eyebrow")}
							title={t("visit.title")}
							className="mb-4 md:mb-4"
						>
							<p>{t("visit.line1")}</p>
						</SectionHeading>
						<p className="mb-8 text-muted-foreground">{t("visit.line2")}</p>
						<Button size="lg" render={<Link href="/visit" />}>
							{t("visit.cta")}
							<ChevronRightIcon aria-hidden="true" />
						</Button>
					</div>
					<BrandImage
						src="/photos/brno-wall.jpg"
						alt={t("visit.imageLabel")}
						aspectRatio="aspect-[4/3]"
						className="lg:order-1 lg:col-span-7"
					/>
				</div>
			</Section>

			<FaqSection title={t("faqTitle")} items={localize(faqItems, locale)} />
		</>
	)
}
