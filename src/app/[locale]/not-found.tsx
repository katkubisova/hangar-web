import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"

export default function NotFound() {
	const t = useTranslations("NotFound")

	return (
		<div className="flex flex-col items-center gap-4 px-4 py-24 text-center">
			<p className="text-sm font-medium text-muted-foreground">404</p>
			<h1 className="text-3xl font-bold">{t("title")}</h1>
			<p className="max-w-md text-muted-foreground">{t("description")}</p>
			<Button render={<Link href="/" />}>{t("cta")}</Button>
		</div>
	)
}
