"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import { LanguageSwitcher } from "@/components/shared/language-switcher"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CloseIcon, MenuIcon } from "@/components/ui/icons"
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

export function Header() {
	const t = useTranslations("Navigation")
	const pathname = usePathname()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const isGroupActive = (group: NavGroup) =>
		group.activeMatch.some(path => pathname.startsWith(path))

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<Link
					href="/"
					className="text-lg font-bold tracking-tight"
					aria-label={t("home")}
				>
					HANGARGYMS
				</Link>

				<nav
					className="hidden items-center gap-1 md:flex"
					aria-label={t("main")}
				>
					{directLinks.map(link => (
						<Button
							key={link.href}
							variant="ghost"
							className={cn(
								!pathname.startsWith(link.href) && "text-muted-foreground"
							)}
							render={<Link href={link.href} />}
						>
							{t(link.label)}
						</Button>
					))}

					<NavDropdown group={aboutGroup} active={isGroupActive(aboutGroup)} />

					<Button
						variant="ghost"
						className="text-muted-foreground"
						render={
							<a href={ESHOP_URL} target="_blank" rel="noopener noreferrer" />
						}
					>
						{t("eshop")}
					</Button>
				</nav>

				<div className="flex items-center gap-3">
					<LanguageSwitcher className="hidden sm:flex" />

					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label={t("toggleMenu")}
						aria-expanded={isMenuOpen}
					>
						{isMenuOpen ? (
							<CloseIcon className="size-5" aria-hidden="true" />
						) : (
							<MenuIcon className="size-5" aria-hidden="true" />
						)}
					</Button>
				</div>
			</div>

			{isMenuOpen && (
				<div className="border-t md:hidden">
					<nav
						className="container mx-auto flex flex-col gap-1 px-4 py-4"
						aria-label={t("mobile")}
					>
						{mobileLinks.map(link => (
							<Button
								key={link.href}
								variant="ghost"
								className="justify-start"
								render={
									<Link href={link.href} onClick={() => setIsMenuOpen(false)} />
								}
							>
								{t(link.label)}
							</Button>
						))}
						<Button
							variant="ghost"
							className="justify-start text-muted-foreground"
							render={
								<a href={ESHOP_URL} target="_blank" rel="noopener noreferrer" />
							}
						>
							{t("eshop")}
						</Button>
						<LanguageSwitcher className="gap-2 px-2.5 py-1.5" />
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
				className={cn(!active && "text-muted-foreground")}
				render={<DropdownMenuTrigger />}
			>
				{t(group.trigger)}
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
