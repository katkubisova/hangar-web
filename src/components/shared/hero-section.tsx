import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
	title: string
	subtitle?: string
	imageLabel?: string
	cta?: {
		label: string
		href: string
	}
	className?: string
	id?: string
}

export function HeroSection({
	title,
	subtitle,
	imageLabel,
	cta,
	className,
	id,
}: HeroSectionProps) {
	return (
		<section
			id={id}
			className={cn(
				"relative flex min-h-[50vh] flex-col items-center justify-center px-4 py-16 text-center",
				!imageLabel && "bg-gradient-to-b from-muted/50 to-background",
				className
			)}
		>
			{imageLabel && (
				<PlaceholderImage
					label={imageLabel}
					labelPosition="top-left"
					aspectRatio="h-full"
					className="absolute inset-0 z-0"
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
						render={
							cta.href.startsWith("#") ? (
								<a href={cta.href} />
							) : (
								<Link href={cta.href} />
							)
						}
					>
						{cta.label}
					</Button>
				)}
			</div>
		</section>
	)
}
