import Link from "next/link"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EmptyStateAction {
	label: string
	href?: string
	onClick?: () => void
}

interface EmptyStateProps {
	message: string
	action?: EmptyStateAction
	icon?: ReactNode
	className?: string
}

export function EmptyState({
	message,
	action,
	icon,
	className,
}: EmptyStateProps) {
	return (
		<div
			className={cn(
				"flex flex-col items-center gap-4 rounded-lg border border-dashed border-border py-16 text-center",
				className
			)}
		>
			{icon}
			<p className="text-muted-foreground">{message}</p>
			{action && (
				<Button
					variant="outline"
					onClick={action.onClick}
					render={action.href ? <Link href={action.href} /> : undefined}
				>
					{action.label}
				</Button>
			)}
		</div>
	)
}
