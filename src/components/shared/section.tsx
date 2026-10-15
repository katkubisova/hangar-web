import { cn } from "@/lib/utils"

interface SectionProps {
	children: React.ReactNode
	className?: string
	id?: string
	// "muted" is the guide's panel grey; "dark" the black brand surface.
	tone?: "default" | "muted" | "dark"
}

// Page section: full-width background, content in the shared 7xl column
// with the brand's spacing.
export function Section({
	children,
	className,
	id,
	tone = "default",
}: SectionProps) {
	return (
		<section
			id={id}
			className={cn(
				"scroll-mt-28",
				tone === "muted" && "bg-muted",
				tone === "dark" && "dark"
			)}
		>
			<div
				className={cn(
					"mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8",
					className
				)}
			>
				{children}
			</div>
		</section>
	)
}
