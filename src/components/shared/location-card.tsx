import { useTranslations } from "next-intl"

import { BrandImage } from "@/components/brand/brand-image"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, TimeIcon } from "@/components/ui/icons"
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
		<article
			className={cn(
				"group relative flex h-full flex-col border border-foreground bg-background",
				!isComingSoon &&
					"transition-colors has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-ring"
			)}
		>
			<div className="overflow-hidden border-b border-foreground">
				{/* A branch that isn't open yet has no photo: the brand
				gradient stands in for it. */}
				<BrandImage
					src={gym.heroImage.src}
					alt={gym.heroImage.alt}
					gradient={isComingSoon ? "pastel-violet" : undefined}
					aspectRatio="aspect-[4/3]"
					sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
					className={cn(
						!isComingSoon &&
							"transition-transform duration-500 group-hover:scale-[1.03]"
					)}
				/>
			</div>
			<div className="flex flex-1 flex-col gap-4 p-5">
				<div className="flex items-start justify-between gap-3">
					<h3 className="text-h3 font-bold uppercase">{gym.name}</h3>
					<Badge variant={isComingSoon ? "secondary" : "signal"}>
						{t(`status.${gym.status}`)}
					</Badge>
				</div>
				<p className="text-sm text-muted-foreground">{gym.shortDescription}</p>
				{gym.openingHours[0] && (
					<p className="flex items-center gap-2 text-sm">
						<TimeIcon aria-hidden="true" className="size-4 shrink-0" />
						{gym.openingHours[0].label}: {gym.openingHours[0].hours}
					</p>
				)}
				{!isComingSoon && (
					// Stretched link: the ::after overlay makes the whole card
					// clickable while keeping one focusable link inside it.
					<Link
						href={{ pathname: "/visit/[gym]", params: { gym: gym.slug } }}
						aria-label={t("visitGym", { gym: gym.name })}
						className="mt-auto inline-flex w-fit items-center gap-2 pt-2 text-xs font-medium tracking-eyebrow uppercase outline-none after:absolute after:inset-0 after:content-['']"
					>
						{t("visit")}
						<ArrowRightIcon
							aria-hidden="true"
							className="size-4 transition-transform group-hover:translate-x-1"
						/>
					</Link>
				)}
			</div>
		</article>
	)
}
