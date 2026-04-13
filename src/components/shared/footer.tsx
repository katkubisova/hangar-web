import { Button } from "@/components/ui/button"

const navLinks = [
	{ href: "/", label: "Domů" },
	{ href: "/navstivte-nas", label: "Navštivte nás" },
	{ href: "/hangar-cafe", label: "Hangar Cafe" },
	{ href: "/aktuality", label: "Aktuality" },
	{ href: "/kontakt", label: "Kontakt" },
]

const quickContacts = {
	email: "info@hangar.cz",
	phone: "+420 123 456 789",
}

const socialLinks = [
	{ href: "https://facebook.com", label: "Facebook", icon: "facebook" },
	{ href: "https://instagram.com", label: "Instagram", icon: "instagram" },
]

export function Footer() {
	return (
		<footer className="border-t bg-background">
			<div className="container mx-auto px-4 py-12">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<div className="space-y-4">
						<div>
							<a href="/" className="text-xl font-bold tracking-tight">
								HANGAR
							</a>
							<p className="mt-1 text-xs text-muted-foreground">
								Bouldering & komunita
							</p>
						</div>
						<p className="text-sm leading-relaxed text-muted-foreground">
							Boulderingová stěna pro začátečníky i pokročilé. Přes 400 m²
							lezecké plochy a komunita lezců.
						</p>
					</div>

					<div className="space-y-4">
						<h3 className="font-semibold">Rychlý kontakt</h3>
						<div className="space-y-3 text-sm">
							<div className="flex items-start gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="mt-0.5 shrink-0 text-muted-foreground"
									aria-hidden="true"
								>
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
								<a
									href={`tel:${quickContacts.phone.replace(/\s/g, "")}`}
									className="text-foreground hover:underline"
								>
									{quickContacts.phone}
								</a>
							</div>
							<div className="flex items-start gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="mt-0.5 shrink-0 text-muted-foreground"
									aria-hidden="true"
								>
									<rect width="20" height="16" x="2" y="4" rx="2" />
									<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
								</svg>
								<a
									href={`mailto:${quickContacts.email}`}
									className="text-foreground hover:underline"
								>
									{quickContacts.email}
								</a>
							</div>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="font-semibold">Navigace</h3>
						<nav className="flex flex-col gap-2" aria-label="Footer navigation">
							{navLinks.map(link => (
								<Button
									key={link.href}
									variant="link"
									className="h-auto w-fit p-0"
									render={<a href={link.href} />}
								>
									{link.label}
								</Button>
							))}
						</nav>
					</div>

					<div className="space-y-4">
						<h3 className="font-semibold">Sledujte nás</h3>
						<div className="flex gap-2">
							{socialLinks.map(social => (
								<Button
									key={social.href}
									variant="outline"
									size="icon"
									render={
										<a
											href={social.href}
											aria-label={social.label}
											target="_blank"
											rel="noopener noreferrer"
										/>
									}
								>
									{social.icon === "facebook" ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="currentColor"
											aria-hidden="true"
										>
											<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											aria-hidden="true"
										>
											<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
											<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
											<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
										</svg>
									)}
								</Button>
							))}
						</div>
					</div>
				</div>

				<div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
					<p>© {new Date().getFullYear()} HANGAR. Všechna práva vyhrazena.</p>
				</div>
			</div>
		</footer>
	)
}
