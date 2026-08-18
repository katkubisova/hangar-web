import { Share2 } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { globalSettings } from "@/lib/data/global-settings"
import { gyms } from "@/lib/data/gyms"

const navLinks = [
	{ href: "/visit", label: "Visit Us" },
	{ href: "/events", label: "Events" },
	{ href: "/hangar-challenge", label: "Hangar Challenge" },
	{ href: "/cafe", label: "Cafe" },
	{ href: "/physio", label: "Physio" },
	{ href: "/news", label: "News" },
	{ href: "/about/team", label: "About" },
	{ href: "/contact", label: "Contact" },
]

const legalLinks = [
	{ href: "/privacy-policy", label: "Privacy Policy" },
	{ href: "/cookie-policy", label: "Cookie Policy" },
	{ href: "/visitor-rules", label: "Visitor Rules" },
]

// Platforms are unconfirmed with the client (spec Open Question 4) — these
// are generic placeholder slots, not tied to any specific platform yet.
const socialPlaceholders = ["social-1", "social-2", "social-3"]

const openLocations = gyms.filter(gym => gym.status === "open")

export function Footer() {
	return (
		<footer className="border-t bg-background">
			<div className="container mx-auto px-4 py-12">
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<div className="space-y-4">
						<Link href="/" className="text-lg font-bold tracking-tight">
							HANGARGYMS
						</Link>
						<p className="text-sm leading-relaxed text-muted-foreground">
							Czech bouldering and climbing gym network, backed by Adam Ondra.
						</p>
						<div className="space-y-0.5 text-xs text-muted-foreground">
							<p>{globalSettings.company.name}</p>
							<p>{globalSettings.company.companyId}</p>
							<p>{globalSettings.company.taxId}</p>
							<p>{globalSettings.company.address}</p>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-sm font-semibold">Contact</h3>
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
						<h3 className="text-sm font-semibold">Navigation</h3>
						<nav className="flex flex-col gap-2" aria-label="Footer navigation">
							{navLinks.map(link => (
								<Link
									key={link.href}
									href={link.href}
									className="text-sm text-muted-foreground hover:text-foreground hover:underline"
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>

					<div className="space-y-4">
						<h3 className="text-sm font-semibold">Legal</h3>
						<nav className="flex flex-col gap-2" aria-label="Legal links">
							{legalLinks.map(link => (
								<Link
									key={link.href}
									href={link.href}
									className="text-sm text-muted-foreground hover:text-foreground hover:underline"
								>
									{link.label}
								</Link>
							))}
						</nav>
						<div className="flex gap-2 pt-2">
							{socialPlaceholders.map((id, index) => (
								<Button
									key={id}
									type="button"
									variant="outline"
									size="icon"
									disabled
									aria-label={`Social link ${index + 1} (platform to be confirmed)`}
								>
									<Share2 className="size-4" aria-hidden="true" />
								</Button>
							))}
						</div>
					</div>
				</div>

				<div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
					<p>© {new Date().getFullYear()} HangarGyms. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
