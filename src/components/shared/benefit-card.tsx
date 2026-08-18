import type { LucideIcon } from "lucide-react"
import { Building, Clock, TrendingUp, Users } from "lucide-react"

import type { BenefitCard as BenefitCardData } from "@/lib/types/benefit-card"

const iconMap: Record<string, LucideIcon> = {
	users: Users,
	building: Building,
	clock: Clock,
	"trending-up": TrendingUp,
}

interface BenefitCardProps {
	benefit: BenefitCardData
}

export function BenefitCard({ benefit }: BenefitCardProps) {
	const Icon = iconMap[benefit.icon] ?? Users

	return (
		<div className="flex flex-col gap-3 rounded-lg border border-border p-4">
			<Icon className="size-6 text-muted-foreground" aria-hidden="true" />
			<h3 className="font-medium">{benefit.title}</h3>
			<p className="text-sm text-muted-foreground">{benefit.text}</p>
		</div>
	)
}
