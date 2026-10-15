import { useTranslations } from "next-intl"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { Link } from "@/i18n/navigation"
import type { Gym } from "@/lib/types/gym"
import { cn } from "@/lib/utils"

interface LocationCardProps {
	gym: Gym
}

export function LocationCard({ gym }: LocationCardProps) {
	const t = useTranslations("Common")
	const isComingSoon = gym.status === "coming-soon"

	return (
		<div
			className={cn(
				"relative flex flex-col gap-4 rounded-lg border border-border p-4",
				isComingSoon
					? "opacity-60"
					: "transition-colors hover:border-foreground/40 hover:bg-muted/50 has-[a:focus-visible]:border-ring has-[a:focus-visible]:ring-3 has-[a:focus-visible]:ring-ring/50"
			)}
		>
			<PlaceholderImage label={gym.heroImage} className="rounded-md" />
			<div className="flex items-center justify-between gap-2">
				<h3 className="font-medium">{gym.name}</h3>
				<Badge variant={isComingSoon ? "secondary" : "default"}>
					{t(`status.${gym.status}`)}
				</Badge>
			</div>
			<p className="text-sm text-muted-foreground">{gym.shortDescription}</p>
			{gym.openingHours[0] && (
				<p className="text-sm text-muted-foreground">
					{gym.openingHours[0].label}: {gym.openingHours[0].hours}
				</p>
			)}
			{!isComingSoon && (
				// Stretched link: the ::after overlay makes the whole card clickable
				// while keeping a single focusable link inside it. The button's
				// pressed-state translate must be `none` (not 0): any translate value
				// makes the button the overlay's containing block mid-click, shrinking
				// the overlay and dropping clicks outside the button.
				<Button
					variant="outline"
					className="w-fit after:absolute after:inset-0 after:rounded-lg after:content-[''] active:not-aria-[haspopup]:translate-none"
					aria-label={t("visitGym", { gym: gym.name })}
					render={
						<Link
							href={{ pathname: "/visit/[gym]", params: { gym: gym.slug } }}
						/>
					}
				>
					{t("visit")}
				</Button>
			)}
		</div>
	)
}
