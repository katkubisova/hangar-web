import { Facebook, FileText, Instagram } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"

import { ContactForm } from "@/components/shared/contact-form"
import { HeroSection } from "@/components/shared/hero-section"
import { PhotoGallery } from "@/components/shared/photo-gallery"
import { PricesAccordion } from "@/components/shared/prices-accordion"
import { Section } from "@/components/shared/section"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { getPageMetadata } from "@/i18n/metadata"
import { Link } from "@/i18n/navigation"
import { getPageLocale } from "@/i18n/page-locale"
import { gyms } from "@/lib/data/gyms"
import { formatPrice, localize } from "@/lib/utils"

interface BranchPageProps {
	params: Promise<{ locale: string; gym: string }>
}

// Only open locations get a branch page — Plzeň is a disabled "coming soon"
// tile on /visit with no page of its own yet.
const openGyms = gyms.filter(gym => gym.status === "open")

export function generateStaticParams() {
	return openGyms.map(gym => ({ gym: gym.slug }))
}

async function getGym(params: BranchPageProps["params"]) {
	const locale = await getPageLocale(params)
	const { gym: slug } = await params
	const gym = openGyms.find(g => g.slug === slug)

	if (!gym) {
		notFound()
	}

	return { locale, gym: localize(gym, locale) }
}

export async function generateMetadata({
	params,
}: BranchPageProps): Promise<Metadata> {
	const { locale, gym } = await getGym(params)
	return getPageMetadata({
		locale,
		href: { pathname: "/visit/[gym]", params: { gym: gym.slug } },
		title: gym.name,
		description: gym.shortDescription,
	})
}

export default async function BranchPage({ params }: BranchPageProps) {
	const { gym } = await getGym(params)
	const t = await getTranslations("BranchPage")
	const common = await getTranslations("Common")

	return (
		<>
			<HeroSection title={gym.name} subtitle={gym.shortDescription} />

			<Section>
				<div className="grid gap-8 lg:grid-cols-2">
					<div className="space-y-4">
						<h2 className="text-2xl font-bold">{t("about")}</h2>
						<p className="text-muted-foreground leading-relaxed">
							{gym.shortDescription}
						</p>
						<div className="flex gap-3">
							<Button
								variant="outline"
								size="icon"
								aria-label={t("instagram", { gym: gym.name })}
								render={
									// biome-ignore lint/a11y/useAnchorContent: accessible label comes from the aria-label above, merged onto this anchor via the render prop
									<a
										href={gym.instagramUrl}
										target="_blank"
										rel="noopener noreferrer"
									/>
								}
							>
								<Instagram className="size-4" aria-hidden="true" />
							</Button>
							<Button
								variant="outline"
								size="icon"
								aria-label={t("facebook", { gym: gym.name })}
								render={
									// biome-ignore lint/a11y/useAnchorContent: accessible label comes from the aria-label above, merged onto this anchor via the render prop
									<a
										href={gym.facebookUrl}
										target="_blank"
										rel="noopener noreferrer"
									/>
								}
							>
								<Facebook className="size-4" aria-hidden="true" />
							</Button>
						</div>
					</div>
					<div className="space-y-4">
						<p>{gym.address}</p>
						<table className="w-full text-sm">
							<tbody>
								{gym.openingHours.map(row => (
									<tr key={row.label} className="border-b border-border">
										<td className="py-2 text-muted-foreground">{row.label}</td>
										<td className="py-2 text-right font-medium">{row.hours}</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className="space-y-1 text-sm">
							<a href={`mailto:${gym.email}`} className="block hover:underline">
								{gym.email}
							</a>
							<a
								href={`tel:${gym.phone.replace(/\s/g, "")}`}
								className="block hover:underline"
							>
								{gym.phone}
							</a>
						</div>
					</div>
				</div>
			</Section>

			<Section className="bg-muted/30">
				<h2 className="mb-4 text-2xl font-bold">{t("register.title")}</h2>
				<p className="mb-4 text-muted-foreground leading-relaxed">
					{t("register.text")}
				</p>
				<Button
					render={
						// biome-ignore lint/a11y/useAnchorContent: text comes from Button's children, merged onto this anchor via the render prop
						<a
							href={gym.registrationUrl}
							target="_blank"
							rel="noopener noreferrer"
						/>
					}
				>
					{t("register.cta")}
				</Button>
			</Section>

			<Section>
				<h2 className="mb-6 text-2xl font-bold">{common("gallery")}</h2>
				<PhotoGallery images={gym.galleryImages} />
			</Section>

			<Section className="bg-muted/30">
				<h2 className="mb-4 text-2xl font-bold">{t("occupancy.title")}</h2>
				{/* No live occupancy source exists yet — spec Open Question 2 is
				unresolved, so this always renders the fallback/empty state rather
				than a fabricated number. */}
				<p className="text-muted-foreground">{t("occupancy.empty")}</p>
			</Section>

			<Section>
				<h2 className="mb-4 text-2xl font-bold">{t("booking.title")}</h2>
				<div className="grid gap-8 md:grid-cols-2">
					<div>
						<h3 className="mb-2 text-lg font-medium">
							{t("booking.ticketsTitle")}
						</h3>
						<p className="mb-4 text-muted-foreground leading-relaxed">
							{t("booking.ticketsText")}
						</p>
						<Button
							render={
								// biome-ignore lint/a11y/useAnchorContent: text comes from Button's children, merged onto this anchor via the render prop
								<a
									href={gym.bookingUrl}
									target="_blank"
									rel="noopener noreferrer"
								/>
							}
						>
							{common("bookNow")}
						</Button>
					</div>
					<div>
						<h3 className="mb-2 text-lg font-medium">
							{t("booking.activitiesTitle")}
						</h3>
						<p className="mb-4 text-muted-foreground leading-relaxed">
							{t("booking.activitiesText")}
						</p>
						<Button
							render={
								// biome-ignore lint/a11y/useAnchorContent: text comes from Button's children, merged onto this anchor via the render prop
								<a
									href={gym.activitiesBookingUrl}
									target="_blank"
									rel="noopener noreferrer"
								/>
							}
						>
							{common("bookActivities")}
						</Button>
						<Link
							href={{ pathname: "/events", hash: "activity-types" }}
							className="mt-3 block w-fit text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
						>
							{t("booking.allActivityTypes")}
						</Link>
					</div>
				</div>
			</Section>

			<Section className="bg-muted/30">
				<h2 className="mb-4 text-2xl font-bold">{t("prices")}</h2>
				<PricesAccordion categories={gym.prices} />
			</Section>

			<Section>
				<h2 className="mb-4 text-2xl font-bold">{t("documents.title")}</h2>
				<ul className="space-y-2 text-sm">
					<li>
						<a
							href={gym.consentFormUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 hover:underline"
						>
							<FileText className="size-4" aria-hidden="true" />
							{t("documents.consentForm")}
						</a>
					</li>
					<li>
						<a
							href={gym.visitorRulesUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 hover:underline"
						>
							<FileText className="size-4" aria-hidden="true" />
							{t("documents.visitorRules")}
						</a>
					</li>
				</ul>
			</Section>

			<Section className="bg-muted/30">
				<h2 className="mb-6 text-2xl font-bold">{t("cafe.title")}</h2>
				<div className="space-y-6">
					<div className="grid gap-8 md:grid-cols-2">
						<div className="space-y-3">
							<h3 className="text-lg font-medium">{t("cafe.coffeeTitle")}</h3>
							<p className="text-muted-foreground leading-relaxed">
								{t("cafe.coffeeText")}
							</p>
							<PlaceholderImage
								label={t("cafe.coffeeImageLabel")}
								className="rounded-lg"
							/>
						</div>
						<div className="space-y-3">
							<h3 className="text-lg font-medium">{t("cafe.bistroTitle")}</h3>
							<p className="text-muted-foreground leading-relaxed">
								{t("cafe.bistroText")}
							</p>
							<PlaceholderImage
								label={t("cafe.bistroImageLabel")}
								className="rounded-lg"
							/>
						</div>
					</div>
					<div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
						<PlaceholderImage
							label={gym.cafeMenuThumbnail}
							aspectRatio="aspect-[3/4]"
							className="w-40 rounded-lg"
						/>
						<Button
							render={
								// biome-ignore lint/a11y/useAnchorContent: text comes from Button's children, merged onto this anchor via the render prop
								<a
									href={gym.cafeMenuUrl}
									target="_blank"
									rel="noopener noreferrer"
								/>
							}
						>
							{t("cafe.menu")}
						</Button>
					</div>
				</div>
			</Section>

			<Section>
				<h2 className="mb-6 text-2xl font-bold">{t("physio.title")}</h2>
				{!gym.physio ? (
					<p className="text-muted-foreground">{t("physio.empty")}</p>
				) : (
					<div className="space-y-6">
						<p className="text-muted-foreground leading-relaxed">
							{gym.physio.intro}
						</p>
						<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{gym.physio.team.map(member => (
								<li
									key={member.name}
									className="flex flex-col gap-3 rounded-lg border border-border bg-background p-4"
								>
									<PlaceholderImage
										label={member.photo}
										aspectRatio="aspect-square"
										className="rounded-full"
									/>
									<div>
										<p className="font-medium">{member.name}</p>
										<p className="text-sm text-muted-foreground">
											{member.specialisation}
										</p>
									</div>
									<p className="text-sm text-muted-foreground">{member.bio}</p>
								</li>
							))}
						</ul>
						<table className="w-full max-w-lg text-sm">
							<thead>
								<tr className="border-b border-border text-left text-muted-foreground">
									<th className="py-2 font-medium">{t("physio.service")}</th>
									<th className="py-2 font-medium">{t("physio.duration")}</th>
									<th className="py-2 text-right font-medium">
										{t("physio.price")}
									</th>
								</tr>
							</thead>
							<tbody>
								{gym.physio.prices.map(item => (
									<tr key={item.name} className="border-b border-border">
										<td className="py-2">{item.name}</td>
										<td className="py-2 text-muted-foreground">{item.note}</td>
										<td className="py-2 text-right font-medium">
											{formatPrice(item.price)}
										</td>
									</tr>
								))}
							</tbody>
						</table>

						<div className="space-y-8">
							<div>
								<h3 className="mb-2 text-lg font-medium">
									{t("physio.bookTitle")}
								</h3>
								<p className="mb-4 text-muted-foreground leading-relaxed">
									{t("physio.bookText")}
								</p>
								<Button
									render={
										// biome-ignore lint/a11y/useAnchorContent: text comes from Button's children, merged onto this anchor via the render prop
										<a
											href={gym.physio.bookingUrl}
											target="_blank"
											rel="noopener noreferrer"
										/>
									}
								>
									{common("bookNow")}
								</Button>
							</div>
							<div className="max-w-xl">
								<h3 className="mb-2 text-lg font-medium">
									{t("physio.messageTitle")}
								</h3>
								<ContactForm />
							</div>
						</div>
					</div>
				)}
			</Section>
		</>
	)
}
