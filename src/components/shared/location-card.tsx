import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import type { Gym, GymStatus } from "@/lib/types/gym"
import { cn } from "@/lib/utils"

interface LocationCardProps {
	gym: Gym
}

const statusLabel: Record<GymStatus, string> = {
	open: "Open",
	"coming-soon": "Coming soon",
	hidden: "Hidden",
}

export function LocationCard({ gym }: LocationCardProps) {
	const isComingSoon = gym.status === "coming-soon"

	return (
		<div
			className={cn(
				"flex flex-col gap-4 rounded-lg border border-border p-4",
				isComingSoon && "opacity-60"
			)}
		>
			<PlaceholderImage label={gym.heroImage} className="rounded-md" />
			<div className="flex items-center justify-between gap-2">
				<h3 className="font-medium">{gym.name}</h3>
				<Badge variant={isComingSoon ? "secondary" : "default"}>
					{statusLabel[gym.status]}
				</Badge>
			</div>
			<p className="text-sm text-muted-foreground">{gym.shortDescription}</p>
			{gym.openingHours[0] && (
				<p className="text-sm text-muted-foreground">
					{gym.openingHours[0].label}: {gym.openingHours[0].hours}
				</p>
			)}
			{!isComingSoon && (
				<Button
					variant="outline"
					className="w-fit"
					render={<Link href={`/visit?gym=${gym.slug}`} />}
				>
					Visit
				</Button>
			)}
		</div>
	)
}
