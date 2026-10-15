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
		<article className="flex h-full flex-col gap-4 bg-background p-6">
			<Icon className="size-8 text-electric-violet" aria-hidden="true" />
			<h3 className="text-h3 font-bold">{benefit.title}</h3>
			<p className="text-sm text-muted-foreground">{benefit.text}</p>
		</article>
	)
}
