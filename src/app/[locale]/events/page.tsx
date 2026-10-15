import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { Sticker } from "@/components/brand/sticker"
import { WallProfile } from "@/components/brand/wall-profile"
import { ActivityCard } from "@/components/shared/activity-card"
import { HeroSection } from "@/components/shared/hero-section"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	ArrowRightUpIcon,
	ChevronRightIcon,
	FlagIcon,
} from "@/components/ui/icons"
import { getPageMetadata } from "@/i18n/metadata"
import { Link } from "@/i18n/navigation"
import { getPageLocale, type LocaleParams } from "@/i18n/page-locale"
import { activityCategories } from "@/lib/data/activity-categories"
import { gyms } from "@/lib/data/gyms"
import { localize } from "@/lib/utils"

const bookableGyms = gyms
	.filter(gym => gym.status !== "hidden")
	.sort((a, b) => a.displayOrder - b.displayOrder)

const openGyms = bookableGyms.filter(gym => gym.status === "open")

const sortedActivityCategories = [...activityCategories].sort(
	(a, b) => a.displayOrder - b.displayOrder
)

export async function generateMetadata({
	params,
}: LocaleParams): Promise<Metadata> {
	const locale = await getPageLocale(params)
	const t = await getTranslations({ locale, namespace: "EventsPage" })
	return getPageMetadata({ locale, href: "/events", title: t("title") })
}

export default async function EventsPage({ params }: LocaleParams) {
	const locale = await getPageLocale(params)
	const t = await getTranslations("EventsPage")
	const common = await getTranslations("Common")

	return (
		<>
			<HeroSection
				eyebrow={t("eyebrow")}
				title={t("title")}
				subtitle={t("subtitle")}
				image={{
					src: "/photos/ostrava-routesetting.jpg",
					alt: t("imageLabel"),
				}}
			/>

			<Section>
				<SectionHeading title={t("bookTitle")} />
				<ul className="grid gap-px bg-foreground border border-foreground md:grid-cols-3">
					{localize(bookableGyms, locale).map(gym => {
						const isComingSoon = gym.status === "coming-soon"

						return (
							<li
								key={gym.slug}
								className="flex flex-col gap-6 bg-background p-6 md:p-8"
							>
								<div className="flex items-start justify-between gap-3">
									<h3 className="text-h3 font-bold uppercase">{gym.name}</h3>
									<Badge variant={isComingSoon ? "secondary" : "default"}>
										{common(`status.${gym.status}`)}
									</Badge>
								</div>
								{isComingSoon || !gym.activitiesBookingUrl ? (
									<p className="text-sm text-muted-foreground">
										{t("bookingUnavailable")}
									</p>
								) : (
									<Button
										className="w-fit"
										render={
											// biome-ignore lint/a11y/useAnchorContent: text comes from Button's children, merged onto this anchor via the render prop
											<a
												href={gym.activitiesBookingUrl}
												target="_blank"
												rel="noopener noreferrer"
											/>
										}
									>
										{common("bookActivities")}
										<ArrowRightUpIcon aria-hidden="true" />
									</Button>
								)}
							</li>
						)
					})}
				</ul>
			</Section>

			<Section id="activity-types" tone="muted">
				<SectionHeading title={t("activityTypes")} />
				<ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{localize(sortedActivityCategories, locale).map(activity => (
						<li key={activity.name}>
							<ActivityCard
								activity={activity}
								gyms={localize(openGyms, locale)}
							/>
						</li>
					))}
				</ul>
			</Section>

			{/* Saturated gradient: the guide keeps these for events and
			Challenger. Text sits on the violet end, where contrast holds. */}
			<section className="dark relative isolate overflow-hidden bg-gradient-violet-trinidad">
				<div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:items-center lg:px-8">
					<div className="lg:col-span-6">
						<p className="eyebrow mb-4 text-alabaster">
							{t("challenge.eyebrow")}
						</p>
						<h2 className="mb-6 text-display font-bold text-alabaster">
							{t("challenge.title")}
						</h2>
						<p className="mb-8 max-w-xl text-lead text-alabaster">
							{t("challenge.text")}
						</p>
						<Button size="lg" render={<Link href="/hangar-challenge" />}>
							{t("challenge.cta")}
							<ChevronRightIcon aria-hidden="true" />
						</Button>
					</div>
					<div className="relative lg:col-span-6">
						<WallProfile
							profile="stargate"
							className="mx-auto w-full max-w-md"
							contentClassName="items-center text-center"
						>
							<span className="font-display text-display font-bold tracking-heading">
								30
							</span>
							<span className="text-xs font-medium tracking-eyebrow uppercase">
								{t("challenge.profileLabel")}
							</span>
						</WallProfile>
						<Sticker
							text={t("challenge.title")}
							className="absolute top-0 right-0 w-28 bg-alabaster text-cod-gray md:w-36"
						>
							<FlagIcon aria-hidden="true" className="size-10" />
						</Sticker>
					</div>
				</div>
			</section>
		</>
	)
}
