import type { Metadata } from "next"
import { BrandImage } from "@/components/brand/brand-image"
import { Logo } from "@/components/brand/logo"
import { Sticker } from "@/components/brand/sticker"
import { WallProfile } from "@/components/brand/wall-profile"
import { Section } from "@/components/shared/section"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { FieldError } from "@/components/ui/field-error"
import {
	CakeIcon,
	CalendarEventIcon,
	ChevronRightIcon,
	FilePdfIcon,
	LocationIcon,
	LogoInstagramIcon,
	MailIcon,
	TimeIcon,
} from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
				<p className="eyebrow">Phase 4a + 4b · internal</p>
				<h1 className="text-h1 font-bold">Style guide</h1>
				<p className="text-lead max-w-2xl text-muted-foreground">
					Colours, gradients, type and components from the HANGAR brand
					guidelines, as they're set up in the code.
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

			<Section className="space-y-10">
				<h2 className="text-h2 font-bold">Components</h2>

				<div className="space-y-4">
					<h3 className="text-h3 font-medium">Buttons</h3>
					<div className="flex flex-wrap items-center gap-3">
						<Button size="lg">
							Rezervovat <ChevronRightIcon aria-hidden="true" />
						</Button>
						<Button>Primary</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="link">Link button</Button>
						<Button size="sm">Small</Button>
						<Button variant="outline" size="icon" aria-label="Instagram">
							<LogoInstagramIcon aria-hidden="true" />
						</Button>
						<Button disabled>Disabled</Button>
					</div>
					<div className="dark flex flex-wrap items-center gap-3 p-6">
						<Button size="lg">Na tmavé</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="ghost">Ghost</Button>
					</div>
				</div>

				<div className="space-y-4">
					<h3 className="text-h3 font-medium">Badges</h3>
					<div className="flex flex-wrap gap-2">
						<Badge>Otevřeno</Badge>
						<Badge variant="secondary">Již brzy</Badge>
						<Badge variant="signal">Nové</Badge>
						<Badge variant="outline">Hangar Ostrava</Badge>
					</div>
				</div>

				<div className="grid gap-10 lg:grid-cols-2">
					<div className="space-y-4">
						<h3 className="text-h3 font-medium">Form fields</h3>
						<div className="flex flex-col gap-1.5">
							<Label htmlFor="sg-name">Jméno</Label>
							<Input id="sg-name" placeholder="Adam Ondra" />
						</div>
						<div className="flex flex-col gap-1.5">
							<Label htmlFor="sg-email">E-mail</Label>
							<Input
								id="sg-email"
								aria-invalid
								defaultValue="adam@"
								aria-describedby="sg-email-error"
							/>
							<FieldError id="sg-email-error">
								Zadej platnou e-mailovou adresu.
							</FieldError>
						</div>
						<div className="flex flex-col gap-1.5">
							<Label htmlFor="sg-message">Zpráva</Label>
							<Textarea id="sg-message" placeholder="Napiš nám…" />
						</div>
						<div className="flex items-center gap-2">
							<Checkbox id="sg-consent" defaultChecked />
							<Label htmlFor="sg-consent" className="font-normal">
								Souhlasím se zpracováním osobních údajů podle{" "}
								<a href="#links" className="link">
									zásad
								</a>
								.
							</Label>
						</div>
					</div>
					<div className="space-y-4">
						<h3 className="text-h3 font-medium">Accordion</h3>
						<Accordion>
							<AccordionItem value="1">
								<AccordionTrigger>
									Co potřebuju na první návštěvu?
								</AccordionTrigger>
								<AccordionContent>
									<p>
										Pohodlné sportovní oblečení, lezečky a magnézium. Lezečky ti
										půjčíme.
									</p>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="2">
								<AccordionTrigger>Je vstupné celodenní?</AccordionTrigger>
								<AccordionContent>
									<p>Ano. I když přijdeš dopoledne, můžeš zůstat celý den.</p>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<h3 className="text-h3 font-medium">Alert</h3>
						<Alert>
							<AlertTitle>Zpráva přijata</AlertTitle>
							<AlertDescription>
								Tohle je zatím ukázková verze webu, takže se zpráva neodeslala.
							</AlertDescription>
						</Alert>
					</div>
				</div>

				<div className="space-y-4">
					<h3 className="text-h3 font-medium">Icons (TDesign)</h3>
					<p className="text-sm text-muted-foreground">
						Line icons with sharp corners, never filled.
					</p>
					<div className="flex flex-wrap gap-6 text-foreground [&_svg]:size-7">
						<LocationIcon aria-label="Location" />
						<TimeIcon aria-label="Time" />
						<CalendarEventIcon aria-label="Event" />
						<CakeIcon aria-label="Birthday" />
						<MailIcon aria-label="Mail" />
						<FilePdfIcon aria-label="PDF" />
						<LogoInstagramIcon aria-label="Instagram" />
					</div>
				</div>
			</Section>

			<Section className="space-y-10">
				<h2 className="text-h2 font-bold">Brand elements</h2>

				<div className="space-y-4">
					<h3 className="text-h3 font-medium">Logo</h3>
					<p className="text-sm text-muted-foreground">
						Primary (with tagline), secondary and HNG symbol. Takes the text
						colour; minimum widths 120 / 100 / 60 px are enforced. Dashed
						outline shows the safe zone.
					</p>
					<div className="grid gap-4 md:grid-cols-2">
						<div className="flex flex-wrap items-center gap-6 border p-6">
							<Logo
								variant="primary"
								height={28}
								safeZone
								className="outline outline-dashed outline-border"
							/>
							<Logo variant="secondary" height={36} />
							<Logo variant="hng" height={36} />
						</div>
						<div className="dark flex flex-wrap items-center gap-6 p-6">
							<Logo variant="primary" height={28} />
							<Logo variant="secondary" height={36} />
							<Logo variant="hng" height={36} className="text-violet-light" />
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<h3 className="text-h3 font-medium">Wall profiles</h3>
					<div className="grid grid-cols-2 items-end gap-6 sm:grid-cols-3 lg:grid-cols-5">
						<WallProfile profile="nose" withName />
						<WallProfile profile="beast" withName />
						<WallProfile profile="monster" withName />
						<WallProfile profile="boomerang" withName />
						<WallProfile profile="stargate" withName />
					</div>
					<div className="grid gap-6 md:grid-cols-2">
						<WallProfile profile="monster">
							<p className="eyebrow text-alabaster">Challenger 2026</p>
							<p className="font-display text-h2 font-bold tracking-heading uppercase">
								27. 10.
							</p>
							<p>Brno · 17:00–20:30</p>
						</WallProfile>
					</div>
				</div>

				<div className="grid gap-10 md:grid-cols-2">
					<div className="space-y-4">
						<h3 className="text-h3 font-medium">Stickers</h3>
						<div className="flex flex-wrap items-center gap-6">
							<Sticker>
								<LocationIcon aria-hidden="true" className="size-8" />
							</Sticker>
							<Sticker text="Hangar Challenge" className="bg-electric-violet">
								<span className="font-display text-2xl font-bold">30</span>
							</Sticker>
							<Sticker
								text="Brno · Ostrava"
								className="bg-gradient-violet-trinidad"
							>
								<TimeIcon aria-hidden="true" className="size-8" />
							</Sticker>
						</div>
					</div>
					<div className="space-y-4">
						<h3 className="text-h3 font-medium">Brand image</h3>
						<p className="text-sm text-muted-foreground">
							Placeholder until photos arrive. With a photo: black-and-white
							under the gradient overlay.
						</p>
						<div className="grid grid-cols-2 gap-4">
							<BrandImage alt="Foto pobočky — Hangar Brno" />
							<BrandImage alt="Challenger 2026" gradient="violet-trinidad" />
						</div>
					</div>
				</div>
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
