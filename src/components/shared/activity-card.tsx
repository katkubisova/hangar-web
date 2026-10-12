import type { LucideIcon } from "lucide-react"
import { Activity, Cake, Calendar, Dumbbell, Flower, Tent } from "lucide-react"

import { Button } from "@/components/ui/button"
import { getActivityBookingUrl, getGymCity } from "@/lib/gym-utils"
import type { ActivityCategory } from "@/lib/types/activity-category"
import type { Gym } from "@/lib/types/gym"

const iconMap: Record<string, LucideIcon> = {
	dumbbell: Dumbbell,
	flower: Flower,
	activity: Activity,
	cake: Cake,
	tent: Tent,
	calendar: Calendar,
}

interface ActivityCardProps {
	activity: ActivityCategory
	/** Open gyms to render a booking button for, already in display order. */
	gyms: Gym[]
}

export function ActivityCard({ activity, gyms }: ActivityCardProps) {
	const Icon = iconMap[activity.icon] ?? Activity

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
								aria-label={`Book ${activity.name} in ${city}`}
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
								Book in {city}
							</Button>
						)
					})}
				</div>
			)}
		</div>
	)
}
