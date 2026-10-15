import { useTranslations } from "next-intl"
import type { ComponentType } from "react"
import { Button } from "@/components/ui/button"
import {
	ActivityIcon,
	CakeIcon,
	CalendarEventIcon,
	EducationIcon,
	ForestIcon,
	type IconProps,
	SunRisingIcon,
} from "@/components/ui/icons"
import { getActivityBookingUrl, getGymCity } from "@/lib/gym-utils"
import type { ActivityCategory } from "@/lib/types/activity-category"
import type { Gym } from "@/lib/types/gym"

// Data keys stay generic; TDesign has no dumbbell, flower or tent, so
// each maps to the closest TDesign line icon.
const iconMap: Record<string, ComponentType<IconProps>> = {
	dumbbell: EducationIcon,
	flower: SunRisingIcon,
	activity: ActivityIcon,
	cake: CakeIcon,
	tent: ForestIcon,
	calendar: CalendarEventIcon,
}

interface ActivityCardProps {
	activity: ActivityCategory
	/** Open gyms to render a booking button for, already in display order. */
	gyms: Gym[]
}

export function ActivityCard({ activity, gyms }: ActivityCardProps) {
	const t = useTranslations("ActivityCard")
	const bookableGyms = gyms.filter(
		(gym): gym is Gym & { activitiesBookingUrl: string } =>
			Boolean(gym.activitiesBookingUrl)
	)
	const Icon = iconMap[activity.icon] ?? ActivityIcon

	return (
		<article className="flex h-full flex-col gap-4 border border-foreground bg-background p-6">
			<Icon className="size-8 text-electric-violet" aria-hidden="true" />
			<h3 className="text-h3 font-bold">{activity.name}</h3>
			<p className="text-sm text-muted-foreground">{activity.description}</p>
			{bookableGyms.length > 0 && (
				<div className="mt-auto flex flex-wrap gap-2 pt-4">
					{bookableGyms.map(gym => {
						const city = getGymCity(gym.name)

						return (
							<Button
								key={gym.slug}
								variant="outline"
								size="sm"
								aria-label={t("bookActivityIn", {
									activity: activity.name,
									city,
								})}
								render={
									<a
										href={getActivityBookingUrl(
											gym.activitiesBookingUrl,
											activity.bookingPath
										)}
										target="_blank"
										rel="noopener noreferrer"
									/>
								}
							>
								{t("bookIn", { city })}
							</Button>
						)
					})}
				</div>
			)}
		</article>
	)
}
