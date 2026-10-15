"use client"

import { useParams, useSearchParams } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { Fragment, Suspense } from "react"

import { getPathname, usePathname } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import type { Locale } from "@/lib/types/localized"
import { cn } from "@/lib/utils"

const SHORT_LABEL: Record<Locale, string> = { cs: "CZ", en: "EN" }

// Each language's own name, so it's recognisable whichever language the
// page is in.
const LANGUAGE_NAME: Record<Locale, string> = { cs: "Čeština", en: "English" }

interface LanguageSwitcherProps {
	className?: string
}

// Links to the current page in the other language, keeping branch/job
// params and the query string (e.g. the selected branch on Contact).
export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
	return (
		<Suspense fallback={<LanguageLinks className={className} />}>
			<LanguageLinksWithQuery className={className} />
		</Suspense>
	)
}

function LanguageLinksWithQuery({ className }: LanguageSwitcherProps) {
	const searchParams = useSearchParams()
	return (
		<LanguageLinks
			className={className}
			query={Object.fromEntries(searchParams.entries())}
		/>
	)
}

interface LanguageLinksProps extends LanguageSwitcherProps {
	query?: Record<string, string>
}

function LanguageLinks({ className, query }: LanguageLinksProps) {
	const t = useTranslations("LanguageSwitcher")
	const locale = useLocale()
	const pathname = usePathname()
	const params = useParams()
	// usePathname returns the page template (e.g. "/visit/[gym]"), so the
	// route params are passed back in to fill it for the other language.
	const href = { pathname, params, query } as Parameters<
		typeof getPathname
	>[0]["href"]

	return (
		<nav
			aria-label={t("label")}
			className={cn("flex items-center gap-1 text-sm", className)}
		>
			{routing.locales.map((lang, index) => (
				<Fragment key={lang}>
					{index > 0 && (
						<span className="text-muted-foreground" aria-hidden="true">
							/
						</span>
					)}
					{lang === locale ? (
						<span
							className="font-medium text-foreground"
							aria-current="true"
							title={LANGUAGE_NAME[lang]}
						>
							{SHORT_LABEL[lang]}
						</span>
					) : (
						// A plain link (full page load) to the exact URL: next-intl's Link
						// would add a "/cs" prefix that then redirects.
						<a
							href={getPathname({ href, locale: lang })}
							lang={lang}
							hrefLang={lang}
							aria-label={LANGUAGE_NAME[lang]}
							className="text-muted-foreground hover:text-foreground"
						>
							{SHORT_LABEL[lang]}
						</a>
					)}
				</Fragment>
			))}
		</nav>
	)
}
