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
	const Icon = iconMap[activity.icon] ?? ActivityIcon

	return (
		<div className="flex h-full flex-col gap-3 rounded-lg border border-border p-4">
			<Icon className="size-6 text-muted-foreground" aria-hidden="true" />
			<h3 className="font-medium">{activity.name}</h3>
			<p className="text-sm text-muted-foreground">{activity.description}</p>
			{gyms.length > 0 && (
				<div className="mt-auto flex flex-wrap gap-2 pt-2">
					{gyms.map(gym => {
						const city = getGymCity(gym.name)

						return (
							<Button
								key={gym.slug}
								variant="outline"
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
		</div>
	)
}
