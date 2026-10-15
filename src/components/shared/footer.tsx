import { useTranslations } from "next-intl"

import { type AppHref, Link } from "@/i18n/navigation"
import { globalSettings } from "@/lib/data/global-settings"
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
						<div className="space-y-0.5 text-xs text-muted-foreground">
							<p>{globalSettings.company.name}</p>
							<p>{globalSettings.company.companyId}</p>
							<p>{globalSettings.company.taxId}</p>
							<p>{globalSettings.company.address}</p>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-sm font-semibold">{t("contact")}</h3>
						<div className="space-y-2 text-sm">
							<a
								href={`mailto:${globalSettings.generalEmail}`}
								className="block text-foreground hover:underline"
							>
								{globalSettings.generalEmail}
							</a>
							<a
								href={`tel:${globalSettings.generalPhone.replace(/\s/g, "")}`}
								className="block text-foreground hover:underline"
							>
								{globalSettings.generalPhone}
							</a>
							<ul className="space-y-1 pt-1 text-muted-foreground">
								{openLocations.map(gym => (
									<li key={gym.slug}>
										{gym.name} — {gym.phone}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-sm font-semibold">{t("navigation")}</h3>
						<nav className="flex flex-col gap-2" aria-label={t("navigation")}>
							{navLinks.map(link => (
								<Link
									key={link.label}
									href={link.href}
									className="text-sm text-muted-foreground hover:text-foreground hover:underline"
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
									className="text-sm text-muted-foreground hover:text-foreground hover:underline"
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
