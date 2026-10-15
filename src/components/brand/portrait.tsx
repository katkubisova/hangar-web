import { cn } from "@/lib/utils"

interface PortraitProps {
	name: string
	// Read out instead of the initials until the real photo arrives.
	alt: string
	className?: string
}

// Stand-in for a person's photo: their initials on the soft violet
// gradient. Swap for BrandImage once the team photos are delivered.
export function Portrait({ name, alt, className }: PortraitProps) {
	const initials = name
		.split(/\s+/)
		.map(part => part[0])
		.slice(0, 2)
		.join("")

	return (
		<div
			role="img"
			aria-label={alt}
			className={cn(
				"grid aspect-square w-full place-items-center bg-gradient-pastel-violet text-cod-gray",
				className
			)}
		>
			<span
				aria-hidden="true"
				className="font-display text-h2 font-bold tracking-heading"
			>
				{initials}
			</span>
		</div>
	)
}
