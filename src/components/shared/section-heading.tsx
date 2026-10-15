import { cn } from "@/lib/utils"

interface SectionHeadingProps {
	title: string
	// Small capitals above the title, as on every brand-guide page.
	eyebrow?: string
	// Short intro under the title.
	children?: React.ReactNode
	align?: "start" | "center"
	className?: string
}

// Section title in the brand's style: eyebrow, then the title in capitals.
export function SectionHeading({
	title,
	eyebrow,
	children,
	align = "start",
	className,
}: SectionHeadingProps) {
	return (
		<div
			className={cn(
				"mb-10 flex max-w-3xl flex-col gap-4 md:mb-12",
				align === "center" && "mx-auto items-center text-center",
				className
			)}
		>
			{eyebrow && <p className="eyebrow">{eyebrow}</p>}
			<h2 className="text-h2 font-bold">{title}</h2>
			{children && (
				<div className="text-lead text-muted-foreground">{children}</div>
			)}
		</div>
	)
}
