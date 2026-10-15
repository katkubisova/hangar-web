import type { Metadata } from "next"

import { Section } from "@/components/shared/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getPageLocale, type LocaleParams } from "@/i18n/page-locale"
import { cn } from "@/lib/utils"

// Internal design reference for reviewing the brand tokens (Phase 4).
// Not linked from the site and not indexed; English only on purpose.

export const metadata: Metadata = {
	title: "Style guide",
	robots: { index: false, follow: false },
}

const PRIMARY = [
	{
		name: "Alabaster",
		hex: "#FAFAFA",
		className: "bg-alabaster",
		role: "Surfaces",
	},
	{
		name: "Cod Gray",
		hex: "#0D0D0D",
		className: "bg-cod-gray",
		role: "Text, primary actions, dark sections",
	},
	{
		name: "Electric Violet",
		hex: "#6034FF",
		className: "bg-electric-violet",
		role: "Signal: links, focus",
	},
	{
		name: "Trinidad",
		hex: "#F25D0D",
		className: "bg-trinidad",
		role: "Signal: highlights, errors (icons/borders)",
	},
	{
		name: "Orient",
		hex: "#006B8F",
		className: "bg-orient",
		role: "Signal: info",
	},
]

const SECONDARY = [
	{ name: "Light Violet", hex: "#E2CBFF", className: "bg-violet-light" },
	{ name: "Light Orange", hex: "#FADED2", className: "bg-orange-light" },
	{ name: "Light Blue", hex: "#CCEAFF", className: "bg-blue-light" },
	{ name: "Violet", hex: "#716DE3", className: "bg-violet" },
	{ name: "Orange", hex: "#DF763E", className: "bg-orange" },
	{ name: "Blue", hex: "#2595BB", className: "bg-blue" },
]

const GRADIENTS = [
	{
		name: "Violet × Trinidad",
		className: "bg-gradient-violet-trinidad",
		use: "Saturated: events, Challenger",
	},
	{
		name: "Violet × Orient",
		className: "bg-gradient-violet-orient",
		use: "Saturated",
	},
	{
		name: "Orient × Trinidad",
		className: "bg-gradient-orient-trinidad",
		use: "Saturated",
	},
	{
		name: "Light Violet × Electric Violet",
		className: "bg-gradient-soft-violet",
		use: "Soft: everyday UI",
	},
	{
		name: "Light Orange × Trinidad",
		className: "bg-gradient-soft-orange",
		use: "Soft",
	},
	{
		name: "Light Blue × Orient",
		className: "bg-gradient-soft-blue",
		use: "Soft",
	},
	{
		name: "Light Violet × Violet",
		className: "bg-gradient-pastel-violet",
		use: "Soft",
	},
	{
		name: "Light Orange × Orange",
		className: "bg-gradient-pastel-orange",
		use: "Soft",
	},
	{
		name: "Light Blue × Blue",
		className: "bg-gradient-pastel-blue",
		use: "Soft",
	},
]

const TYPE_SCALE = [
	{
		token: "text-display",
		sample: "Let's HNG out",
		className: "font-display text-display font-bold tracking-heading uppercase",
	},
	{
		token: "text-h1 (h1)",
		sample: "Hangar Challenge",
		className: "font-display text-h1 font-bold tracking-heading uppercase",
	},
	{
		token: "text-h2 (h2)",
		sample: "Najdi svůj Hangar",
		className: "font-display text-h2 font-bold tracking-heading uppercase",
	},
	{
		token: "text-h3 (h3)",
		sample: "Výběrová káva",
		className: "font-display text-h3 font-medium tracking-heading",
	},
	{
		token: "text-lead",
		sample: "Boulderová série závodů, kde gravitace ztrácí moc!",
		className: "text-lead",
	},
	{
		token: "text-base",
		sample:
			"Každý měsíc postavíme 30 boulderů označených kartičkami Hangar Challenge s čísly 1–30. Obtížnost stoupá, takže na zahřátí začni u jedničky.",
		className: "text-base",
	},
	{
		token: "text-sm",
		sample: "Poslední objednávky do 20:00.",
		className: "text-sm text-muted-foreground",
	},
]

export default async function StyleguidePage({ params }: LocaleParams) {
	await getPageLocale(params)

	return (
		<>
			<Section className="space-y-4">
				<p className="eyebrow">Phase 4a · internal</p>
				<h1 className="text-h1 font-bold">Style guide</h1>
				<p className="text-lead max-w-2xl text-muted-foreground">
					Colours, gradients and type from the HANGAR brand guidelines, as
					they're set up in the code. Buttons and form fields are restyled in
					the next part (4b).
				</p>
			</Section>

			<Section className="space-y-6">
				<h2 className="text-h2 font-bold">Primary palette</h2>
				<ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
					{PRIMARY.map(color => (
						<li key={color.name} className="space-y-2">
							<div
								className={cn(
									"aspect-[4/3] rounded-lg border",
									color.className
								)}
							/>
							<p className="font-medium">{color.name}</p>
							<p className="font-mono text-sm text-muted-foreground">
								{color.hex}
							</p>
							<p className="text-sm text-muted-foreground">{color.role}</p>
						</li>
					))}
				</ul>
				<h3 className="text-h3 font-medium">Secondary palette</h3>
				<ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
					{SECONDARY.map(color => (
						<li key={color.name} className="space-y-2">
							<div className={cn("aspect-[4/3] rounded-lg", color.className)} />
							<p className="text-sm font-medium">{color.name}</p>
							<p className="font-mono text-sm text-muted-foreground">
								{color.hex}
							</p>
						</li>
					))}
				</ul>
			</Section>

			<Section className="space-y-6">
				<h2 className="text-h2 font-bold">Gradients</h2>
				<ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{GRADIENTS.map(gradient => (
						<li
							key={gradient.name}
							className={cn(
								"flex aspect-[16/9] flex-col justify-between rounded-lg p-4 text-alabaster",
								gradient.className
							)}
						>
							<p className="font-medium">{gradient.name}</p>
							<p className="text-sm">{gradient.use}</p>
						</li>
					))}
				</ul>
			</Section>

			<Section className="space-y-6">
				<h2 className="text-h2 font-bold">Type</h2>
				<p className="max-w-2xl text-muted-foreground">
					Headings: Geist Bold standing in for N27 (no web licence yet), −4 %
					tracking, 120 % line height, page and section titles in capitals.
					Body: Geist Regular, −2 % tracking, 140 % line height.
				</p>
				<dl className="divide-y rounded-lg border bg-card">
					{TYPE_SCALE.map(row => (
						<div
							key={row.token}
							className="grid gap-2 p-4 md:grid-cols-[12rem_1fr] md:items-baseline"
						>
							<dt className="font-mono text-sm text-muted-foreground">
								{row.token}
							</dt>
							<dd className={row.className}>{row.sample}</dd>
						</div>
					))}
				</dl>
			</Section>

			<Section className="space-y-6">
				<h2 className="text-h2 font-bold">Patterns</h2>
				<div className="grid gap-8 lg:grid-cols-2">
					<div className="space-y-3 rounded-lg border bg-card p-6">
						<p className="eyebrow">Eyebrow label</p>
						<h3 className="text-h2 font-bold uppercase">Brno</h3>
						<p>
							Inline links have no underline: they use{" "}
							<a href="#links" className="link">
								Electric Violet and medium weight
							</a>
							, plus a violet focus ring for keyboard users (press Tab).
						</p>
						<div className="flex flex-wrap gap-2 pt-2">
							<Button>Primary</Button>
							<Button variant="outline">Outline</Button>
							<Badge>Otevřeno</Badge>
							<Badge variant="secondary">Již brzy</Badge>
						</div>
						<Input
							placeholder="Form field (restyled in 4b)"
							className="max-w-sm"
						/>
					</div>
					<div className="dark space-y-3 rounded-lg p-6">
						<p className="eyebrow">Dark section</p>
						<h3 className="text-h2 font-bold uppercase">Ostrava</h3>
						<p>
							Add <code className="font-mono text-sm">dark</code> to any section
							and everything inside switches to the black brand surface, with{" "}
							<a href="#links" className="link">
								Light Violet links
							</a>
							.
						</p>
						<div className="flex flex-wrap gap-2 pt-2">
							<Button>Primary</Button>
							<Button variant="outline">Outline</Button>
							<Badge>Otevřeno</Badge>
						</div>
					</div>
				</div>
				<div className="relative overflow-hidden rounded-lg bg-gradient-violet-trinidad p-8 text-alabaster">
					<p className="eyebrow text-alabaster/80">Challenger 2026</p>
					<p className="font-display text-h1 font-bold tracking-heading uppercase">
						Kde gravitace ztrácí moc
					</p>
					<p className="text-lead mt-2 max-w-xl">Brno 27. 10. · 17:00–20:30</p>
				</div>
			</Section>
		</>
	)
}
