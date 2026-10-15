// The real root layout (<html>, <body>, header, footer) lives in
// src/app/[locale]/layout.tsx so it can set <html lang> per language.
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return children
}
