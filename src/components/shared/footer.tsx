import { useTranslations } from "next-intl"

import { type AppHref, Link } from "@/i18n/navigation"
import { gyms } from "@/lib/data/gyms"

interface FooterLink {
	href: AppHref
	label: string
}

const openLocations = gyms.filter(gym => gym.status === "open")

export function Footer() {
	const t = useTranslations("Footer")
	const nav = useTranslations("Navigation")

	const navLinks: FooterLink[] = [
		{ href: "/visit", label: nav("visit") },
		{ href: "/events", label: nav("events") },
		{ href: "/hangar-challenge", label: nav("challenge") },
		...openLocations.map(gym => ({
			href: { pathname: "/visit/[gym]", params: { gym: gym.slug } } as const,
			label: gym.name,
		})),
		{ href: "/about/team", label: nav("about") },
		{ href: "/contact", label: nav("contact") },
	]

	const legalLinks: FooterLink[] = [
		{ href: "/privacy-policy", label: nav("privacy") },
		{ href: "/cookie-policy", label: nav("cookies") },
		{ href: "/visitor-rules", label: nav("visitorRules") },
	]

	return (
		<footer className="border-t bg-background">
			<div className="container mx-auto px-4 py-12">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<div className="space-y-4">
						<Link
							href="/"
							className="text-lg font-bold tracking-tight"
							aria-label={nav("home")}
						>
							HANGARGYMS
						</Link>
						<p className="text-sm leading-relaxed text-muted-foreground">
							{t("tagline")}
						</p>
						{/* Each branch has its own operator; there's no network-wide
						legal entity on the live sites. */}
						<div className="space-y-2 text-xs text-muted-foreground">
							{openLocations.map(gym => (
								<p key={gym.slug}>
									{t("operator", { gym: gym.name })}: {gym.companyName},{" "}
									{gym.companyId}, {gym.taxId}
								</p>
							))}
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-sm font-semibold">{t("contact")}</h3>
						<ul className="space-y-3 text-sm">
							{openLocations.map(gym => (
								<li key={gym.slug} className="space-y-0.5">
									<p className="font-medium">{gym.name}</p>
									<a
										href={`mailto:${gym.email}`}
										className="block text-muted-foreground hover:text-foreground"
									>
										{gym.email}
									</a>
									<a
										href={`tel:${gym.phone.replace(/\s/g, "")}`}
										className="block text-muted-foreground hover:text-foreground"
									>
										{gym.phone}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="text-sm font-semibold">{t("navigation")}</h3>
						<nav className="flex flex-col gap-2" aria-label={t("navigation")}>
							{navLinks.map(link => (
								<Link
									key={link.label}
									href={link.href}
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					<div className="space-y-4">
						<h3 className="text-sm font-semibold">{t("legal")}</h3>
						<nav className="flex flex-col gap-2" aria-label={t("legal")}>
							{legalLinks.map(link => (
								<Link
									key={link.label}
									href={link.href}
									className="text-sm text-muted-foreground hover:text-foreground"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>
				</div>

				<div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
					<p>{t("copyright", { year: new Date().getFullYear() })}</p>
				</div>
			</div>
		</footer>
	)
}
