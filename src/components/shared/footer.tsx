import { useLocale, useTranslations } from "next-intl"

import { Logo } from "@/components/brand/logo"
import { Sticker } from "@/components/brand/sticker"
import {
	LocationIcon,
	LogoFacebookIcon,
	LogoInstagramIcon,
} from "@/components/ui/icons"
import { type AppHref, Link } from "@/i18n/navigation"
import { gyms } from "@/lib/data/gyms"
import { localize } from "@/lib/utils"

interface FooterLink {
	href: AppHref
	label: string
}

const openGyms = gyms.filter(gym => gym.status === "open")

const LINK =
	"text-sm text-muted-foreground transition-colors hover:text-foreground"
const HEADING = "eyebrow mb-4"

// Black brand surface (class="dark"), with the claim "Let's HNG out".
export function Footer() {
	const t = useTranslations("Footer")
	const nav = useTranslations("Navigation")
	const locale = useLocale()
	const branches = localize(openGyms, locale)

	const navLinks: FooterLink[] = [
		{ href: "/visit", label: nav("visit") },
		{ href: "/events", label: nav("events") },
		{ href: "/hangar-challenge", label: nav("challenge") },
		{ href: "/about/team", label: nav("team") },
		{ href: "/about/careers", label: nav("careers") },
		{ href: "/contact", label: nav("contact") },
	]

	const legalLinks: FooterLink[] = [
		{ href: "/privacy-policy", label: nav("privacy") },
		{ href: "/cookie-policy", label: nav("cookies") },
		{ href: "/visitor-rules", label: nav("visitorRules") },
	]

	return (
		<footer className="dark">
			<div className="mx-auto w-full max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
				<div className="flex flex-col gap-8 border-b border-border pb-12 md:flex-row md:items-end md:justify-between">
					<div className="space-y-6">
						<Link href="/" aria-label={nav("home")} className="inline-block">
							<Logo variant="primary" height={32} label="Hangar" />
						</Link>
						<p className="font-display text-display font-bold tracking-heading uppercase">
							{t("claim")}
						</p>
					</div>
					<Sticker
						text={t("stickerText")}
						className="hidden w-36 shrink-0 bg-electric-violet md:grid"
					>
						<LocationIcon aria-hidden="true" className="size-8" />
					</Sticker>
				</div>

				<div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
					{branches.map(gym => (
						<div key={gym.slug}>
							<h2 className={HEADING}>
								<Link
									href={{ pathname: "/visit/[gym]", params: { gym: gym.slug } }}
									className="transition-colors hover:text-foreground"
								>
									{gym.name}
								</Link>
							</h2>
							<address className="space-y-1 text-sm not-italic">
								<p>{gym.address}</p>
								<a href={`mailto:${gym.email}`} className={`block ${LINK}`}>
									{gym.email}
								</a>
								<a
									href={`tel:${gym.phone.replace(/\s/g, "")}`}
									className={`block ${LINK}`}
								>
									{gym.phone}
								</a>
							</address>
							<div className="mt-4 flex gap-3">
								<a
									href={gym.instagramUrl}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={t("instagram", { gym: gym.name })}
									className={LINK}
								>
									<LogoInstagramIcon aria-hidden="true" className="size-5" />
								</a>
								<a
									href={gym.facebookUrl}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={t("facebook", { gym: gym.name })}
									className={LINK}
								>
									<LogoFacebookIcon aria-hidden="true" className="size-5" />
								</a>
							</div>
						</div>
					))}

					<nav aria-label={t("navigation")}>
						<h2 className={HEADING}>{t("navigation")}</h2>
						<ul className="space-y-2">
							{navLinks.map(link => (
								<li key={link.label}>
									<Link href={link.href} className={LINK}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<nav aria-label={t("legal")}>
						<h2 className={HEADING}>{t("legal")}</h2>
						<ul className="space-y-2">
							{legalLinks.map(link => (
								<li key={link.label}>
									<Link href={link.href} className={LINK}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>

				{/* Each branch has its own operator; there's no network-wide
				legal entity on the live sites. */}
				<div className="space-y-1 border-t border-border pt-8 text-xs text-muted-foreground">
					{branches.map(gym => (
						<p key={gym.slug}>
							{t("operator", { gym: gym.name })}: {gym.companyName},{" "}
							{gym.companyId}, {gym.taxId}
						</p>
					))}
					<p className="pt-4">
						{t("copyright", { year: new Date().getFullYear() })}
					</p>
				</div>
			</div>
		</footer>
	)
}
