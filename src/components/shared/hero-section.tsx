import { BrandImage } from "@/components/brand/brand-image"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, ChevronRightIcon } from "@/components/ui/icons"
import { type AppHref, Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
	title: string
	subtitle?: string
	// Small capitals above the title, as on every brand-guide page.
	eyebrow?: string
	// With a photo the hero runs full width, black-and-white under a brand
	// gradient with the title on top. Without one it's a page header.
	image?: { src?: string; alt: string }
	cta?: {
		label: string
		// An internal page, or "#id" to jump to a section on this page.
		href: AppHref | `#${string}`
	}
	className?: string
	id?: string
}

export function HeroSection({
	title,
	subtitle,
	eyebrow,
	image,
	cta,
	className,
	id,
}: HeroSectionProps) {
	const isAnchor = typeof cta?.href === "string" && cta.href.startsWith("#")
	const button = cta && (
		<Button
			size="lg"
			render={
				isAnchor ? (
					<a href={cta.href as string} />
				) : (
					<Link href={cta.href as AppHref} />
				)
			}
		>
			{cta.label}
			{isAnchor ? (
				<ArrowDownIcon aria-hidden="true" />
			) : (
				<ChevronRightIcon aria-hidden="true" />
			)}
		</Button>
	)

	if (image) {
		return (
			<section
				id={id}
				className={cn("dark relative isolate overflow-hidden", className)}
			>
				<BrandImage
					src={image.src}
					alt={image.alt}
					gradient="violet-trinidad"
					aspectRatio="h-full"
					sizes="100vw"
					priority
					className="absolute inset-0 -z-10"
				/>
				{/* Darkens the bottom so the title stays readable on any photo
				(the brand fixes contrast with a dark overlay, never a text
				shadow). */}
				<div
					aria-hidden="true"
					className="absolute inset-0 -z-10 bg-linear-to-t from-cod-gray/60 via-cod-gray/10 to-transparent"
				/>
				<div className="mx-auto flex min-h-[min(80vh,46rem)] w-full max-w-7xl flex-col justify-end gap-6 px-4 pt-32 pb-12 sm:px-6 md:pb-16 lg:px-8">
					{eyebrow && <p className="eyebrow text-foreground">{eyebrow}</p>}
					<h1 className="max-w-5xl text-display font-bold">{title}</h1>
					{subtitle && (
						<p className="max-w-2xl text-lead text-foreground">{subtitle}</p>
					)}
					{button && <div>{button}</div>}
				</div>
			</section>
		)
	}

	return (
		<section
			id={id}
			className={cn("border-b border-foreground bg-background", className)}
		>
			<div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 pt-16 pb-12 sm:px-6 md:pt-24 md:pb-16 lg:px-8">
				{eyebrow && <p className="eyebrow">{eyebrow}</p>}
				<h1 className="max-w-5xl text-h1 font-bold">{title}</h1>
				{subtitle && (
					<p className="max-w-2xl text-lead text-muted-foreground">
						{subtitle}
					</p>
				)}
				{button && <div>{button}</div>}
			</div>
		</section>
	)
}
