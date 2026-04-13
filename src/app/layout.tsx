import "@/app/globals.css"

import type { Metadata } from "next"
import {
	Geist,
	Geist_Mono,
	Playfair_Display,
	Roboto_Slab,
} from "next/font/google"
import { Footer } from "@/components/shared/footer"
import { Header } from "@/components/shared/header"
import { cn } from "@/lib/utils"

const robotoSlabHeading = Roboto_Slab({
	subsets: ["latin"],
	variable: "--font-heading",
})

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
})

const playfair = Playfair_Display({
	variable: "--font-serif",
	subsets: ["latin"],
	display: "swap",
})

export const metadata: Metadata = {
	title: "Hangar | Bouldering & komunita",
	description:
		"Boulderingová stěna pro začátečníky i pokročilé. Přes 400 m² lezecké plochy, training zona a komunita lezců.",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="cs"
			className={cn("font-sans", geist.variable, robotoSlabHeading.variable)}
		>
			<body
				className={`${geist.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
