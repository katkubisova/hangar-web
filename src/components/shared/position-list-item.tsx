import { ArrowRightIcon } from "@/components/ui/icons"
import { Link } from "@/i18n/navigation"
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
			href={{
				pathname: "/about/careers/[slug]",
				params: { slug: position.slug },
			}}
			className="group flex flex-col gap-2 border-b border-foreground py-6 transition-colors hover:text-link sm:flex-row sm:items-center sm:justify-between sm:gap-6"
		>
			<span className="text-h3 font-bold">{position.title}</span>
			<span className="flex items-center gap-4 text-sm text-muted-foreground">
				{locationNames}
				<ArrowRightIcon
					aria-hidden="true"
					className="size-5 text-foreground transition-transform group-hover:translate-x-1"
				/>
			</span>
		</Link>
	)
}
