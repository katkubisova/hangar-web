import "@/app/globals.css"

// Only reached for requests the language middleware doesn't handle; every
// normal 404 renders src/app/[locale]/not-found.tsx inside the site layout.
export default function GlobalNotFound() {
	return (
		<html lang="cs">
			<body className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center font-sans">
				<p className="text-sm font-medium">404</p>
				<h1 className="text-3xl font-bold">
					Stránka nenalezena / Page not found
				</h1>
				<a href="/" className="font-medium">
					Zpět na úvod / Back to home
				</a>
			</body>
		</html>
	)
}
