import { useTranslations } from "next-intl"

import { WallProfile } from "@/components/brand/wall-profile"
import { buttonVariants } from "@/components/ui/button-variants"
import { ChevronRightIcon } from "@/components/ui/icons"
import { Link } from "@/i18n/navigation"

export default function NotFound() {
	const t = useTranslations("NotFound")

	return (
		<section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
			<div className="flex flex-col items-start gap-5">
				<p className="eyebrow">{t("eyebrow")}</p>
				<h1 className="text-h1 font-bold">{t("title")}</h1>
				<p className="max-w-md text-lead text-muted-foreground">
					{t("description")}
				</p>
				<Link href="/" className={buttonVariants({ size: "lg" })}>
					{t("cta")}
					<ChevronRightIcon aria-hidden="true" />
				</Link>
			</div>
			<WallProfile
				profile="monster"
				className="w-full"
				contentClassName="items-start"
			>
				<p className="font-display text-display font-bold tracking-heading">
					404
				</p>
			</WallProfile>
		</section>
	)
}
