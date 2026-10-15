import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { ActivityCard } from "@/components/shared/activity-card"
import { HeroSection } from "@/components/shared/hero-section"
import { Section } from "@/components/shared/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
			<HeroSection title={t("title")} subtitle={t("subtitle")} />

			<Section>
				<h2 className="mb-6 text-2xl font-bold">{t("bookTitle")}</h2>
				<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{localize(bookableGyms, locale).map(gym => {
						const isComingSoon = gym.status === "coming-soon"

						return (
							<li
								key={gym.slug}
								className="flex flex-col gap-4 rounded-lg border border-border p-4"
							>
								<div className="flex items-center justify-between gap-2">
									<h3 className="font-medium">{gym.name}</h3>
									<Badge variant={isComingSoon ? "secondary" : "default"}>
										{common(`status.${gym.status}`)}
									</Badge>
								</div>
								{isComingSoon ? (
									<p className="text-sm text-muted-foreground">
										{t("bookingUnavailable")}
									</p>
								) : (
									<Button
										variant="outline"
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
									</Button>
								)}
							</li>
						)
					})}
				</ul>
			</Section>

			<Section id="activity-types" tone="muted">
				<h2 className="mb-6 text-2xl font-bold">{t("activityTypes")}</h2>
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

			<Section tone="dark">
				<div className="mx-auto max-w-xl text-center">
					<h2 className="mb-4 text-3xl font-bold">{t("challenge.title")}</h2>
					<p className="mb-6 opacity-80">{t("challenge.text")}</p>
					<Button
						variant="secondary"
						render={<Link href="/hangar-challenge" />}
					>
						{t("challenge.cta")}
					</Button>
				</div>
			</Section>
		</>
	)
}
