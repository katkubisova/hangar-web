"use client"

import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

import { Logo } from "@/components/brand/logo"
import { LanguageSwitcher } from "@/components/shared/language-switcher"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
	ArrowRightUpIcon,
	ChevronDownIcon,
	CloseIcon,
	ViewListIcon,
} from "@/components/ui/icons"
import { Link, usePathname } from "@/i18n/navigation"
import type { AppPathname, StaticPathname } from "@/i18n/routing"
import { cn } from "@/lib/utils"

// Labels are keys in the "Navigation" messages.
type NavLabel = "visit" | "events" | "about" | "team" | "careers" | "contact"

interface NavLink {
	label: NavLabel
	href: StaticPathname
}

interface NavGroup {
	trigger: NavLabel
	activeMatch: AppPathname[]
	items: NavLink[]
}

const ESHOP_URL = "https://www.hangareshop.cz/"

// Trigger only highlights for paths starting with "/about" — /contact does
// NOT count as active even though it's grouped here. That's a deliberate
// quirk documented in the spec (Section 2.1), not a bug.
const aboutGroup: NavGroup = {
	trigger: "about",
	activeMatch: ["/about"],
	items: [
		{ label: "team", href: "/about/team" },
		{ label: "careers", href: "/about/careers" },
		{ label: "contact", href: "/contact" },
	],
}

const directLinks: NavLink[] = [
	{ label: "visit", href: "/visit" },
	{ label: "events", href: "/events" },
]

const mobileLinks: NavLink[] = [...directLinks, ...aboutGroup.items]

// Nav labels: small capitals in Geist Medium, like the guide's labels.
// The active page is marked by full-strength text (others are muted),
// never by an underline.
const NAV_ITEM =
	"h-10 px-3 text-xs font-medium tracking-eyebrow uppercase hover:bg-transparent hover:text-foreground"

export function Header() {
	const t = useTranslations("Navigation")
	const pathname = usePathname()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const isActive = (path: AppPathname) => pathname.startsWith(path)

	// The mobile menu covers the page: lock scrolling behind it and close
	// it with Escape.
	useEffect(() => {
		if (!isMenuOpen) {
			return
		}
		const close = (event: KeyboardEvent) => {
			if (event.key === "Escape") setIsMenuOpen(false)
		}
		document.body.style.overflow = "hidden"
		window.addEventListener("keydown", close)
		return () => {
			document.body.style.overflow = ""
			window.removeEventListener("keydown", close)
		}
	}, [isMenuOpen])

	return (
		<header className="sticky top-0 z-50 w-full border-b border-foreground bg-background">
			<div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
				<Link
					href="/"
					aria-label={t("home")}
					className="py-2"
					onClick={() => setIsMenuOpen(false)}
				>
					<Logo variant="secondary" height={22} label="Hangar" />
				</Link>

				<nav className="hidden items-center md:flex" aria-label={t("main")}>
					{directLinks.map(link => (
						<Button
							key={link.href}
							variant="ghost"
							className={cn(
								NAV_ITEM,
								!isActive(link.href) && "text-muted-foreground"
							)}
							render={<Link href={link.href} />}
						>
							{t(link.label)}
						</Button>
					))}

					<NavDropdown
						group={aboutGroup}
						active={aboutGroup.activeMatch.some(isActive)}
					/>

					<Button
						variant="ghost"
						className={cn(NAV_ITEM, "text-muted-foreground")}
						render={
							<a href={ESHOP_URL} target="_blank" rel="noopener noreferrer" />
						}
					>
						{t("eshop")}
						<ArrowRightUpIcon aria-hidden="true" className="size-3.5" />
					</Button>
				</nav>

				<div className="flex items-center gap-2">
					<LanguageSwitcher className="hidden text-xs font-medium tracking-eyebrow uppercase sm:flex" />

					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label={t("toggleMenu")}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-menu"
					>
						{isMenuOpen ? (
							<CloseIcon className="size-6" aria-hidden="true" />
						) : (
							<ViewListIcon className="size-6" aria-hidden="true" />
						)}
					</Button>
				</div>
			</div>

			{isMenuOpen && (
				<div
					id="mobile-menu"
					className="dark fixed inset-x-0 top-16 bottom-0 overflow-y-auto md:hidden"
				>
					<nav
						className="flex min-h-full flex-col gap-8 px-4 py-8 sm:px-6"
						aria-label={t("mobile")}
					>
						<ul className="flex flex-col">
							{mobileLinks.map(link => (
								<li key={link.href} className="border-b border-border">
									<Link
										href={link.href}
										onClick={() => setIsMenuOpen(false)}
										className={cn(
											"block py-4 font-display text-h2 font-bold tracking-heading uppercase",
											isActive(link.href) && "text-link"
										)}
									>
										{t(link.label)}
									</Link>
								</li>
							))}
							<li className="border-b border-border">
								<a
									href={ESHOP_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 py-4 font-display text-h2 font-bold tracking-heading uppercase"
								>
									{t("eshop")}
									<ArrowRightUpIcon aria-hidden="true" className="size-6" />
								</a>
							</li>
						</ul>
						<LanguageSwitcher className="gap-2 text-base font-medium uppercase" />
					</nav>
				</div>
			)}
		</header>
	)
}

function NavDropdown({ group, active }: { group: NavGroup; active: boolean }) {
	const t = useTranslations("Navigation")

	return (
		<DropdownMenu>
			<Button
				variant="ghost"
				className={cn(NAV_ITEM, !active && "text-muted-foreground")}
				render={<DropdownMenuTrigger />}
			>
				{t(group.trigger)}
				<ChevronDownIcon aria-hidden="true" className="size-3.5" />
			</Button>
			<DropdownMenuContent>
				{group.items.map(item => (
					<DropdownMenuItem key={item.href} render={<Link href={item.href} />}>
						{t(item.label)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
