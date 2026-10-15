import "@/app/globals.css"

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getTranslations } from "next-intl/server"

import { Footer } from "@/components/shared/footer"
import { Header } from "@/components/shared/header"
import { getPageLocale, type LocaleParams } from "@/i18n/page-locale"
import { routing } from "@/i18n/routing"
import { cn } from "@/lib/utils"

const geist = Geist({
	subsets: ["latin", "latin-ext"],
	variable: "--font-sans",
})

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin", "latin-ext"],
})

export function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }))
}

export async function generateMetadata({
	params,
}: LocaleParams): Promise<Metadata> {
	const locale = await getPageLocale(params)
	const t = await getTranslations({ locale, namespace: "Metadata" })

	return {
		// Absolute URLs for canonical and hreflang links. Set SITE_URL to the
		// production domain at launch (see the launch checklist).
		metadataBase: process.env.SITE_URL
			? new URL(process.env.SITE_URL)
			: undefined,
		title: { template: `%s | ${t("siteName")}`, default: t("siteName") },
		description: t("description"),
	}
}

export default async function LocaleLayout({
	children,
	params,
}: LocaleParams & { children: React.ReactNode }) {
	const locale = await getPageLocale(params)
	const t = await getTranslations({ locale, namespace: "Navigation" })

	return (
		<html lang={locale} className={cn("font-sans", geist.variable)}>
			<body className={`${geist.variable} ${geistMono.variable} antialiased`}>
				<NextIntlClientProvider>
					<a
						href="#main"
						className="sr-only z-[60] bg-primary px-4 py-3 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
					>
						{t("skipToContent")}
					</a>
					<Header />
					<main id="main" tabIndex={-1} className="outline-none">
						{children}
					</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
