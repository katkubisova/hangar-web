import { cva, type VariantProps } from "class-variance-authority"
import type { ClassValue } from "clsx"

import { cn } from "@/lib/utils"

// Kept out of the "use client" button.tsx so server components can style
// links as buttons: <Link className={buttonVariants({ size: "lg" })}>.
const variants = cva(
	"group/button inline-flex shrink-0 items-center justify-center gap-2 border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-colors outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-solid select-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-electric-violet hover:text-alabaster aria-expanded:bg-electric-violet dark:hover:bg-violet-light dark:hover:text-cod-gray",
				outline:
					"border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background aria-expanded:bg-foreground aria-expanded:text-background",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-border aria-expanded:bg-border",
				ghost: "text-foreground hover:bg-muted aria-expanded:bg-muted",
				destructive:
					"border-destructive bg-transparent text-foreground hover:bg-destructive hover:text-cod-gray",
				link: "h-auto px-0 text-link hover:text-foreground",
			},
			size: {
				default: "h-10 px-4 text-sm",
				xs: "h-7 gap-1 px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
				sm: "h-8 gap-1.5 px-3 text-sm [&_svg:not([class*='size-'])]:size-3.5",
				lg: "h-12 px-6 text-base [&_svg:not([class*='size-'])]:size-5",
				icon: "size-10",
				"icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
				"icon-sm": "size-8",
				"icon-lg": "size-12 [&_svg:not([class*='size-'])]:size-5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
)

export type ButtonVariantProps = VariantProps<typeof variants>

// Runs through cn() so a variant or className overrides the base classes
// (border-foreground over border-transparent, px-0 over px-4) instead of
// both landing on the element and the stylesheet order deciding.
export function buttonVariants({
	className,
	...props
}: ButtonVariantProps & { className?: ClassValue } = {}) {
	return cn(variants(props), className)
}
