import "@/app/globals.css"

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Footer } from "@/components/shared/footer"
import { Header } from "@/components/shared/header"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "HangarGyms",
	description:
		"The climbing gym network of the Czech Republic. Wireframe build — greyscale layout, placeholder content.",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={cn("font-sans", geist.variable)}>
			<body className={`${geist.variable} ${geistMono.variable} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
