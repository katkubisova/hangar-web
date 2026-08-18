"use client"

import { Button } from "@/components/ui/button"
import type { Gym, GymSlug } from "@/lib/types/gym"
import { cn } from "@/lib/utils"

interface LocationSelectorProps {
	gyms: Gym[]
	selected: GymSlug
	onSelect: (slug: GymSlug) => void
	className?: string
}

export function LocationSelector({
	gyms,
	selected,
	onSelect,
	className,
}: LocationSelectorProps) {
	return (
		<div
			role="tablist"
			aria-label="Select a location"
			className={cn("flex flex-wrap gap-2", className)}
		>
			{gyms.map(gym => {
				const isComingSoon = gym.status === "coming-soon"
				const isSelected = gym.slug === selected

				return (
					<Button
						key={gym.slug}
						type="button"
						role="tab"
						aria-selected={isSelected}
						variant={isSelected ? "default" : "outline"}
						disabled={isComingSoon}
						onClick={() => onSelect(gym.slug)}
						className="rounded-full"
					>
						{gym.name}
						{isComingSoon && (
							<span className="text-xs opacity-80">(Coming soon)</span>
						)}
					</Button>
				)
			})}
		</div>
	)
}
