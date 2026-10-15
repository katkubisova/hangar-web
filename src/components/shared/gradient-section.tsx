import { cn } from "@/lib/utils"

interface GradientSectionProps {
	children: React.ReactNode
	className?: string
}

// Full-width block on the saturated violet → orange gradient, which the
// guide keeps for events and Challenger. A dark linear overlay towards the
// bottom keeps white text above 4.5:1 where the gradient turns orange (the
// brand fixes contrast with an overlay, never a text shadow).
export function GradientSection({ children, className }: GradientSectionProps) {
	return (
		<section className="dark relative isolate overflow-hidden bg-gradient-violet-trinidad">
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 bg-linear-to-b from-transparent to-cod-gray/35"
			/>
			<div
				className={cn(
					"mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 text-alabaster sm:px-6 md:py-24 lg:grid-cols-12 lg:items-center lg:px-8",
					className
				)}
			>
				{children}
			</div>
		</section>
	)
}
