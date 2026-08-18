import type { LucideIcon } from "lucide-react"
import { Activity, Cake, Calendar, Dumbbell, Flower, Tent } from "lucide-react"

import type { ActivityCategory } from "@/lib/types/activity-category"

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
}

export function ActivityCard({ activity }: ActivityCardProps) {
	const Icon = iconMap[activity.icon] ?? Activity

	return (
		<div className="flex flex-col gap-3 rounded-lg border border-border p-4">
			<Icon className="size-6 text-muted-foreground" aria-hidden="true" />
			<h3 className="font-medium">{activity.name}</h3>
			<p className="text-sm text-muted-foreground">{activity.description}</p>
		</div>
	)
}
