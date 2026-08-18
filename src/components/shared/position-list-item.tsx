import Link from "next/link"

import { gyms } from "@/lib/data/gyms"
import type { Position } from "@/lib/types/position"

interface PositionListItemProps {
	position: Position
}

export function PositionListItem({ position }: PositionListItemProps) {
	const locationNames = position.locationSlugs
		.map(slug => gyms.find(gym => gym.slug === slug)?.name)
		.filter((name): name is string => Boolean(name))
		.join(", ")

	return (
		<Link
			href={`/about/careers/${position.slug}`}
			className="flex items-center justify-between gap-4 rounded-lg border border-border p-4 hover:bg-muted/50"
		>
			<span className="font-medium">{position.title}</span>
			<span className="text-sm text-muted-foreground">{locationNames}</span>
		</Link>
	)
}
