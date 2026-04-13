"use client"

import { useState } from "react"
import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const navLinks = [
	{ href: "/", label: "Domů" },
	{ href: "/navstivte-nas", label: "Navštivte nás" },
	{ href: "/hangar-cafe", label: "Hangar Cafe" },
	{ href: "/aktuality", label: "Aktuality" },
	{ href: "/o-nas", label: "O nás" },
	{ href: "/kontakt", label: "Kontakt" },
]

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<div className="flex items-baseline gap-3">
					<a href="/" className="text-xl font-bold tracking-tight">
						HANGAR
					</a>
					<span className="hidden text-xs text-muted-foreground sm:inline">
						Bouldering & komunita
					</span>
				</div>

				<nav className="hidden gap-1 md:flex" aria-label="Main navigation">
					{navLinks.map(link => (
						<Button
							key={link.href}
							variant="ghost"
							render={<a href={link.href} />}
						>
							{link.label}
						</Button>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<div className="hidden items-center gap-2 sm:flex">
						<Avatar size="sm">
							<AvatarFallback className="text-xs">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
							</AvatarFallback>
							<AvatarBadge className="bg-green-500" />
						</Avatar>
						<span className="text-sm text-muted-foreground">
							+420 123 456 789
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden="true"
							>
								<path d="M18 6 6 18" />
								<path d="m6 6 12 12" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden="true"
							>
								<line x1="4" x2="20" y1="12" y2="12" />
								<line x1="4" x2="20" y1="6" y2="6" />
								<line x1="4" x2="20" y1="18" y2="18" />
							</svg>
						)}
					</Button>

					<div className="flex items-center gap-2 sm:hidden">
						<Avatar size="sm">
							<AvatarFallback className="text-xs">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
							</AvatarFallback>
							<AvatarBadge className="bg-green-500" />
						</Avatar>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="border-t md:hidden">
					<nav
						className="container mx-auto flex flex-col gap-1 px-4 py-4"
						aria-label="Mobile navigation"
					>
						{navLinks.map(link => (
							<Button
								key={link.href}
								variant="ghost"
								className="justify-start"
								render={<a href={link.href} />}
							>
								{link.label}
							</Button>
						))}
					</nav>
				</div>
			)}
		</header>
	)
}
