import { ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface PlaceholderImageProps {
	label: string
	aspectRatio?: string
	labelPosition?: "center" | "top-left"
	className?: string
}

export function PlaceholderImage({
	label,
	aspectRatio = "aspect-video",
	labelPosition = "center",
	className,
}: PlaceholderImageProps) {
	return (
		<div
			role="img"
			aria-label={label}
			className={cn(
				"flex w-full gap-2 bg-muted text-muted-foreground",
				labelPosition === "center"
					? "items-center justify-center"
					: "items-start justify-start p-4",
				aspectRatio,
				className
			)}
		>
			<ImageIcon className="size-5 shrink-0" aria-hidden="true" />
			<span className="text-sm font-medium">{label}</span>
		</div>
	)
}
