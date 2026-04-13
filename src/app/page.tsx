import Link from "next/link"
import { HeroSection } from "@/components/shared/hero-section"
import { Section } from "@/components/shared/section"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

const locations = [
	{
		title: "Praha",
		description:
			"Přes 400 m² boulderingové plochy, 120 problémů a training zona s hangboardy a moonboardem.",
		href: "/lokace/praha",
		stats: "400+ m²",
	},
	{
		title: "Brno",
		description:
			"Největší boulderingová stěna v Brně s komunitní atmosférou a pravidelnými akcemi.",
		href: "/lokace/brno",
		stats: "500+ m²",
	},
	{
		title: "Ostrava",
		description:
			"Moderní boulderingový sál v industriálním stylu s výškovým lezením a training prostorem.",
		href: "/lokace/ostrava",
		stats: "350+ m²",
	},
]

const testimonials = [
	{
		quote:
			"Skvělá komunita a profesionální přístup. Jsem tu prakticky každý den.",
		author: "Petr Novák",
		location: "Praha",
		level: "Advanced",
	},
	{
		quote:
			"Jsem úplný začátečník a hned jsem se cítil jako doma. Všichni mi pomáhali.",
		author: "Jana Svobodová",
		location: "Brno",
		level: "Beginner",
	},
	{
		quote:
			"Nejlepší training zona v okolí. Moonboard, hangboard, všechno co potřebuješ.",
		author: "Tomáš Černý",
		location: "Ostrava",
		level: "Intermediate",
	},
]

const stats = [
	{ value: "1000+", label: "Lezců měsíčně" },
	{ value: "350+", label: "Lezeckých problémů" },
	{ value: "15+", label: "Let zkušeností" },
	{ value: "3", label: "Lokace v ČR" },
]

export default function HomePage() {
	return (
		<>
			<HeroSection
				title="HANGAR"
				subtitle="Boulderingová stěna, kde každý problém je nová výzva. Prolez, posuň se a užij si komunitu."
				cta={{
					label: "Vyzkoušet první lekci zdarma",
					href: "/navstivte-nas",
				}}
			/>

			<Section className="bg-muted/30">
				<dl className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 md:gap-12">
					{stats.map((stat, index) => (
						<div
							key={stat.label}
							className="text-center"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<dt className="mb-1 text-3xl font-bold tracking-tight tabular-nums md:text-4xl">
								{stat.value}
							</dt>
							<dd className="text-sm text-muted-foreground">{stat.label}</dd>
						</div>
					))}
				</dl>
			</Section>

			<Section id="locations">
				<div className="mb-8 text-center">
					<h2 className="mb-2 text-3xl font-bold">Vyber si svou stěnu</h2>
					<p className="text-muted-foreground">
						Tři lokace, stejná kvalita. Každá se svým charakterem.
					</p>
				</div>
				<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{locations.map(location => (
						<li key={location.title}>
							<Card className="group flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
								<div className="relative aspect-video overflow-hidden rounded-t-lg bg-muted">
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
								</div>
								<CardHeader>
									<div className="mb-2 flex items-center justify-between">
										<CardTitle>{location.title}</CardTitle>
										<span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
											{location.stats}
										</span>
									</div>
									<CardDescription>{location.description}</CardDescription>
								</CardHeader>
								<CardFooter className="mt-auto gap-2">
									<Button
										variant="outline"
										render={<Link href={location.href} />}
									>
										Zobrazit detail
									</Button>
									<Button
										variant="default"
										render={<Link href="/navstivte-nas" />}
									>
										Začít lézt
									</Button>
								</CardFooter>
							</Card>
						</li>
					))}
				</ul>
			</Section>

			<Section id="about" className="bg-muted/30">
				<div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
					<div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
						<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
					</div>
					<div className="space-y-4">
						<h2 className="text-3xl font-bold">Lezení bez lan, bez omezení</h2>
						<p className="text-muted-foreground leading-relaxed">
							Hangar není jen boulderingová stěna — je to místo, kde se
							setkávají lezci všech úrovní. Od začátečníků po profesionály.
							Nabízíme kvalitní chyty, pravidelně měněné problémy a komunitu,
							která tě podpoří na každém kroku.
						</p>
						<p className="text-muted-foreground leading-relaxed">
							Vyber si z tisíců cest, trénuj na boardu, nebo si prostě jen tak
							poplachat se známými. U nás je vždycky dobrá nálada.
						</p>
						<Button variant="outline" render={<Link href="/o-nas" />}>
							Zjistit více
						</Button>
					</div>
				</div>
			</Section>

			<Section id="testimonials">
				<div className="mb-8 text-center">
					<h2 className="mb-2 text-3xl font-bold">Co říkají lezci</h2>
					<p className="text-muted-foreground">
						Přidej se k tisícům lezců, kteří už u nás lezou
					</p>
				</div>
				<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{testimonials.map(testimonial => (
						<li key={testimonial.author}>
							<Card className="h-full transition-all duration-300 hover:shadow-md">
								<CardHeader>
									<blockquote className="mb-4 text-muted-foreground leading-relaxed">
										<p className="text-base">"{testimonial.quote}"</p>
									</blockquote>
									<div className="flex items-center gap-3">
										<div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-base font-semibold text-primary">
											{testimonial.author.charAt(0)}
										</div>
										<div>
											<div className="font-semibold">{testimonial.author}</div>
											<div className="text-sm text-muted-foreground">
												{testimonial.location} • {testimonial.level}
											</div>
										</div>
									</div>
								</CardHeader>
							</Card>
						</li>
					))}
				</ul>
			</Section>

			<Section
				id="visit-cta"
				className="bg-gradient-to-b from-transparent to-muted/30"
			>
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
						Začni svou lezeckou cestu dnes
					</h2>
					<p className="mb-8 text-lg text-muted-foreground">
						První lekce zdarma, žádný závazek. Přijď poznat stěnu, vybavení a
						komunitu. Těšíme se na tebe.
					</p>
					<div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
						<Button size="lg" render={<Link href="/navstivte-nas" />}>
							Rezervovat první lekci
						</Button>
						<Button
							variant="outline"
							size="lg"
							render={<Link href="/lokace/praha" />}
						>
							Zobrazit permanentky
						</Button>
					</div>
					<ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
						<li className="flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={18}
								height={18}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-primary"
								aria-hidden="true"
							>
								<polyline points="20 6 9 17 4 12" />
							</svg>
							První lekce zdarma
						</li>
						<li className="flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={18}
								height={18}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-primary"
								aria-hidden="true"
							>
								<polyline points="20 6 9 17 4 12" />
							</svg>
							Žádný závazek
						</li>
						<li className="flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={18}
								height={18}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-primary"
								aria-hidden="true"
							>
								<polyline points="20 6 9 17 4 12" />
							</svg>
							Vybavení k dispozici
						</li>
					</ul>
				</div>
			</Section>
		</>
	)
}
