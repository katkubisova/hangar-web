import type { ComponentType } from "react"
import {
	FlagIcon,
	type IconProps,
	TimeIcon,
	TrendingUpIcon,
	UsergroupIcon,
} from "@/components/ui/icons"

import type { BenefitCard as BenefitCardData } from "@/lib/types/benefit-card"

const iconMap: Record<string, ComponentType<IconProps>> = {
	users: UsergroupIcon,
	building: FlagIcon,
	clock: TimeIcon,
	"trending-up": TrendingUpIcon,
}

interface BenefitCardProps {
	benefit: BenefitCardData
}

export function BenefitCard({ benefit }: BenefitCardProps) {
	const Icon = iconMap[benefit.icon] ?? UsergroupIcon

	return (
		<div className="flex flex-col gap-3 rounded-lg border border-border p-4">
			<Icon className="size-6 text-muted-foreground" aria-hidden="true" />
			<h3 className="font-medium">{benefit.title}</h3>
			<p className="text-sm text-muted-foreground">{benefit.text}</p>
		</div>
	)
}
