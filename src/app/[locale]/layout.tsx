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

	return (
		<html lang={locale} className={cn("font-sans", geist.variable)}>
			<body className={`${geist.variable} ${geistMono.variable} antialiased`}>
				<NextIntlClientProvider>
					<Header />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
