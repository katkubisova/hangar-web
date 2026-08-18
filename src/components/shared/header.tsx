"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface NavLink {
	label: string
	href: string
}

interface NavGroup {
	trigger: string
	activeMatch: string[]
	items: NavLink[]
}

// Placeholder — the spec names an existing e-shop but doesn't give its URL.
const ESHOP_URL = "#"

const visitUsGroup: NavGroup = {
	trigger: "Visit Us",
	activeMatch: ["/visit", "/cafe", "/physio"],
	items: [
		{ label: "Gym", href: "/visit" },
		{ label: "Cafe", href: "/cafe" },
		{ label: "Physio", href: "/physio" },
	],
}

// Trigger only highlights for paths starting with "/about" — /contact does
// NOT count as active even though it's grouped here. That's a deliberate
// quirk documented in the spec (Section 2.1), not a bug.
const aboutGroup: NavGroup = {
	trigger: "About",
	activeMatch: ["/about"],
	items: [
		{ label: "Our Team", href: "/about/team" },
		{ label: "Careers", href: "/about/careers" },
		{ label: "Contact", href: "/contact" },
	],
}

const directLinks: NavLink[] = [
	{ label: "Events", href: "/events" },
	{ label: "News", href: "/news" },
]

const mobileLinks: NavLink[] = [
	...visitUsGroup.items,
	...directLinks,
	...aboutGroup.items,
]

export function Header() {
	const pathname = usePathname()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const isGroupActive = (group: NavGroup) =>
		group.activeMatch.some(path => pathname.startsWith(path))

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<Link href="/" className="text-lg font-bold tracking-tight">
					HANGARGYMS
				</Link>

				<nav
					className="hidden items-center gap-1 md:flex"
					aria-label="Main navigation"
				>
					<NavDropdown
						group={visitUsGroup}
						active={isGroupActive(visitUsGroup)}
					/>

					{directLinks.map(link => (
						<Button
							key={link.href}
							variant="ghost"
							className={cn(
								!pathname.startsWith(link.href) && "text-muted-foreground"
							)}
							render={<Link href={link.href} />}
						>
							{link.label}
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
						E-shop
					</Button>
				</nav>

				<div className="flex items-center gap-3">
					<div className="hidden items-center gap-1 text-sm sm:flex">
						<span className="sr-only">
							Language switcher (not yet functional)
						</span>
						<span className="text-muted-foreground" aria-hidden="true">
							CZ
						</span>
						<span className="text-muted-foreground" aria-hidden="true">
							/
						</span>
						<span className="font-medium text-foreground" aria-hidden="true">
							EN
						</span>
					</div>

					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
						aria-expanded={isMenuOpen}
					>
						{isMenuOpen ? (
							<X className="size-5" aria-hidden="true" />
						) : (
							<Menu className="size-5" aria-hidden="true" />
						)}
					</Button>
				</div>
			</div>

			{isMenuOpen && (
				<div className="border-t md:hidden">
					<nav
						className="container mx-auto flex flex-col gap-1 px-4 py-4"
						aria-label="Mobile navigation"
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
								{link.label}
							</Button>
						))}
						<Button
							variant="ghost"
							className="justify-start text-muted-foreground"
							render={
								<a href={ESHOP_URL} target="_blank" rel="noopener noreferrer" />
							}
						>
							E-shop
						</Button>
						<div className="flex items-center gap-2 px-2.5 py-1.5 text-sm">
							<span className="sr-only">
								Language switcher (not yet functional)
							</span>
							<span className="text-muted-foreground" aria-hidden="true">
								CZ
							</span>
							<span className="text-muted-foreground" aria-hidden="true">
								/
							</span>
							<span className="font-medium text-foreground" aria-hidden="true">
								EN
							</span>
						</div>
					</nav>
				</div>
			)}
		</header>
	)
}

function NavDropdown({ group, active }: { group: NavGroup; active: boolean }) {
	return (
		<DropdownMenu>
			<Button
				variant="ghost"
				className={cn(!active && "text-muted-foreground")}
				render={<DropdownMenuTrigger />}
			>
				{group.trigger}
			</Button>
			<DropdownMenuContent>
				{group.items.map(item => (
					<DropdownMenuItem key={item.href} render={<Link href={item.href} />}>
						{item.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
