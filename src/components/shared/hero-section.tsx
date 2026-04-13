import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
	title: string
	subtitle?: string
	image?: string
	cta?: {
		label: string
		href: string
	}
	className?: string
}

export function HeroSection({
	title,
	subtitle,
	image,
	cta,
	className,
}: HeroSectionProps) {
	return (
		<section
			className={cn(
				"relative flex min-h-[50vh] flex-col items-center justify-center bg-gradient-to-b from-muted/50 to-background px-4 py-16 text-center",
				className
			)}
		>
			{image && (
				<div
					className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
					style={{ backgroundImage: `url(${image})` }}
					aria-hidden="true"
				/>
			)}

			<div className="relative z-10 container mx-auto">
				<h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
					{title}
				</h1>

				{subtitle && (
					<p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
						{subtitle}
					</p>
				)}

				{cta && (
					<Button
						size="lg"
						render={<a href={cta.href} aria-label={cta.label} />}
					>
						{cta.label}
					</Button>
				)}
			</div>
		</section>
	)
}
