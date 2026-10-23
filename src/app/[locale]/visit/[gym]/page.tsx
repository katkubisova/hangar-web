import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"
import { BrandImage } from "@/components/brand/brand-image"
import { Portrait } from "@/components/brand/portrait"
import { ContactForm } from "@/components/shared/contact-form"
import { HeroSection } from "@/components/shared/hero-section"
import { Paragraphs } from "@/components/shared/paragraphs"
import { PhotoGallery } from "@/components/shared/photo-gallery"
import { PricesAccordion } from "@/components/shared/prices-accordion"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { buttonVariants } from "@/components/ui/button-variants"
import {
	ArrowRightIcon,
	ArrowRightUpIcon,
	CallIcon,
	FilePdfIcon,
	LocationIcon,
	LogoFacebookIcon,
	LogoInstagramIcon,
	MailIcon,
} from "@/components/ui/icons"
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

const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const

export default async function BranchPage({ params }: BranchPageProps) {
	const { gym } = await getGym(params)
	const t = await getTranslations("BranchPage")
	const common = await getTranslations("Common")

	const sections = [
		{ id: "about", label: t("about") },
		{ id: "prices", label: t("prices") },
		{ id: "cafe", label: t("cafe.title") },
		{ id: "physio", label: t("physio.title") },
		{ id: "gallery", label: common("gallery") },
	]

	const bookingActions = [
		{
			title: t("register.title"),
			text: t("register.text"),
			cta: t("register.cta"),
			href: gym.registrationUrl,
		},
		{
			title: t("booking.ticketsTitle"),
			text: t("booking.ticketsText"),
			cta: t("booking.ticketsCta"),
			href: gym.bookingUrl,
		},
		{
			title: t("booking.activitiesTitle"),
			text: t("booking.activitiesText"),
			cta: common("bookActivities"),
			href: gym.activitiesBookingUrl,
		},
	].filter(action => action.href)

	const documents = [
		{ label: t("documents.consentForm"), href: gym.consentFormUrl },
		{ label: t("documents.visitorRules"), href: gym.visitorRulesUrl },
	].filter(document => document.href)

	return (
		<>
			<HeroSection
				eyebrow={t("eyebrow")}
				title={gym.name}
				subtitle={gym.shortDescription}
				image={gym.heroImage}
			/>

			<nav
				aria-label={t("sectionNav")}
				className="sticky top-16 z-40 border-b border-foreground bg-background"
			>
				<ul className="mx-auto flex w-full max-w-7xl gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8">
					{sections.map(section => (
						<li key={section.id} className="shrink-0">
							<a
								href={`#${section.id}`}
								className="block py-4 text-xs font-medium tracking-eyebrow text-muted-foreground uppercase transition-colors hover:text-foreground"
							>
								{section.label}
							</a>
						</li>
					))}
				</ul>
			</nav>

			<Section id="about">
				<div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-7">
						<SectionHeading title={t("about")} />
						<div className="space-y-4">
							<Paragraphs
								paragraphs={gym.description}
								className="text-muted-foreground"
							/>
						</div>
						<div className="mt-8 flex gap-3">
							{gym.instagramUrl && (
								<a
									href={gym.instagramUrl}
									{...EXTERNAL}
									aria-label={t("instagram", { gym: gym.name })}
									className={buttonVariants({
										variant: "outline",
										size: "icon",
									})}
								>
									<LogoInstagramIcon className="size-5" aria-hidden="true" />
								</a>
							)}
							{gym.facebookUrl && (
								<a
									href={gym.facebookUrl}
									{...EXTERNAL}
									aria-label={t("facebook", { gym: gym.name })}
									className={buttonVariants({
										variant: "outline",
										size: "icon",
									})}
								>
									<LogoFacebookIcon className="size-5" aria-hidden="true" />
								</a>
							)}
						</div>
					</div>

					<aside className="h-fit border border-foreground lg:col-span-5">
						<h3 className="border-b border-foreground px-5 py-4 text-xs font-medium tracking-eyebrow uppercase">
							{t("info.title")}
						</h3>
						<div className="space-y-6 p-5">
							<table className="w-full text-sm">
								<tbody>
									{gym.openingHours.map(row => (
										<tr
											key={row.label}
											className="border-b border-border last:border-0"
										>
											<td className="py-2 text-muted-foreground">
												{row.label}
											</td>
											<td className="py-2 text-right font-medium tabular-nums">
												{row.hours}
											</td>
										</tr>
									))}
								</tbody>
							</table>
							<ul className="space-y-3 text-sm">
								<li className="flex gap-3">
									<LocationIcon
										aria-hidden="true"
										className="size-5 shrink-0"
									/>
									<span>{gym.address}</span>
								</li>
								<li className="flex gap-3">
									<MailIcon aria-hidden="true" className="size-5 shrink-0" />
									<a href={`mailto:${gym.email}`} className="link">
										{gym.email}
									</a>
								</li>
								<li className="flex gap-3">
									<CallIcon aria-hidden="true" className="size-5 shrink-0" />
									<a
										href={`tel:${gym.phone.replace(/\s/g, "")}`}
										className="link"
									>
										{gym.phone}
									</a>
								</li>
							</ul>
							{/* No live occupancy source exists yet — spec Open
							Question 2 is unresolved, so this always shows the
							fallback rather than a made-up number. */}
							<div className="border-t border-border pt-4 text-sm">
								<p className="font-medium">{t("occupancy.title")}</p>
								<p className="text-muted-foreground">{t("occupancy.empty")}</p>
							</div>
							<Link
								href={{ pathname: "/contact", query: { gym: gym.slug } }}
								className="inline-flex items-center gap-2 text-xs font-medium tracking-eyebrow uppercase"
							>
								{t("info.directions")}
								<ArrowRightIcon aria-hidden="true" className="size-4" />
							</Link>
						</div>
					</aside>
				</div>
			</Section>

			{bookingActions.length > 0 && (
				<Section tone="dark">
					<SectionHeading
						eyebrow={t("booking.eyebrow")}
						title={t("booking.title")}
					/>
					<ul className="grid gap-px bg-border md:grid-cols-3">
						{bookingActions.map(action => (
							<li
								key={action.title}
								className="flex flex-col gap-4 bg-background p-6 md:p-8"
							>
								<h3 className="text-h3 font-bold">{action.title}</h3>
								<p className="text-muted-foreground">{action.text}</p>
								<a
									href={action.href}
									{...EXTERNAL}
									className={buttonVariants({ className: "mt-auto w-fit" })}
								>
									{action.cta}
									<ArrowRightUpIcon aria-hidden="true" />
								</a>
							</li>
						))}
					</ul>
					<Link
						href={{ pathname: "/events", hash: "activity-types" }}
						className="link mt-6 inline-block text-sm"
					>
						{t("booking.allActivityTypes")}
					</Link>
				</Section>
			)}

			<Section id="prices" tone="muted">
				{/* Below lg: heading, prices, documents. From lg: heading and
				    documents on the left, prices spanning both rows on the right. */}
				<div className="grid lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16">
					<SectionHeading
						title={t("prices")}
						className="min-w-0 lg:col-span-4"
					/>
					<div className="min-w-0 lg:col-span-8 lg:col-start-5 lg:row-span-2 lg:row-start-1">
						<PricesAccordion categories={gym.prices} />
					</div>
					{documents.length > 0 && (
						<div className="mt-10 min-w-0 lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:mt-0">
							<h3 className="eyebrow mb-3">{t("documents.title")}</h3>
							<ul className="space-y-2 text-sm">
								{documents.map(document => (
									<li key={document.label}>
										<a
											href={document.href}
											{...EXTERNAL}
											className="link inline-flex items-center gap-2"
										>
											<FilePdfIcon className="size-5" aria-hidden="true" />
											{document.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</Section>

			<Section id="cafe">
				<SectionHeading title={t("cafe.title")} />
				<div className="grid gap-10 md:grid-cols-2">
					{[
						{
							title: t("cafe.coffeeTitle"),
							text: gym.cafe.coffee,
							photo: gym.cafe.coffeePhoto,
							alt: t("cafe.coffeeImageLabel"),
						},
						{
							title: t("cafe.bistroTitle"),
							text: gym.cafe.bistro,
							photo: gym.cafe.bistroPhoto,
							alt: t("cafe.bistroImageLabel"),
						},
					].map(item => (
						<article key={item.title} className="space-y-4">
							<BrandImage
								src={item.photo}
								alt={item.alt}
								aspectRatio="aspect-[4/3]"
								sizes="(min-width: 768px) 50vw, 100vw"
							/>
							<h3 className="text-h3 font-bold">{item.title}</h3>
							<p className="text-muted-foreground">{item.text}</p>
						</article>
					))}
				</div>
			</Section>

			<Section id="physio" tone="muted">
				<SectionHeading title={t("physio.title")} />
				{!gym.physio ? (
					<p className="text-muted-foreground">{t("physio.empty")}</p>
				) : (
					<div className="space-y-12">
						<div className="max-w-3xl space-y-4">
							<Paragraphs
								paragraphs={gym.physio.intro}
								className="text-muted-foreground"
							/>
						</div>
						<ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
							{gym.physio.team.map(member => (
								<li key={member.name} className="flex flex-col gap-3">
									<Portrait name={member.name} alt={member.photo} />
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

						<div className="grid gap-12 lg:grid-cols-2">
							<div className="min-w-0 space-y-8">
								<div className="overflow-x-auto border border-foreground bg-background">
									<table className="w-full text-sm">
										<thead>
											<tr className="border-b border-foreground text-left">
												<th className="p-3 font-medium">
													{t("physio.service")}
												</th>
												<th className="p-3 font-medium">
													{t("physio.duration")}
												</th>
												<th className="p-3 text-right font-medium">
													{t("physio.price")}
												</th>
											</tr>
										</thead>
										<tbody>
											{gym.physio.prices.map(item => (
												<tr
													key={`${item.name} ${item.note}`}
													className="border-b border-border last:border-0"
												>
													<td className="p-3">{item.name}</td>
													<td className="p-3 text-muted-foreground">
														{item.note}
													</td>
													<td className="p-3 text-right font-medium whitespace-nowrap tabular-nums">
														{formatPrice(item.price)}
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
								<div>
									<h3 className="mb-2 text-h3 font-bold">
										{t("physio.bookTitle")}
									</h3>
									<p className="mb-4 text-muted-foreground">
										{t("physio.bookText")}
									</p>
									{/* Brno books through a widget on the old site with no
									URL of its own, so it has no button (launch checklist). */}
									{gym.physio.bookingUrl && (
										<a
											href={gym.physio.bookingUrl}
											{...EXTERNAL}
											className={buttonVariants()}
										>
											{common("bookNow")}
											<ArrowRightUpIcon aria-hidden="true" />
										</a>
									)}
								</div>
							</div>
							<div className="min-w-0 border border-foreground bg-background p-5 md:p-8">
								<h3 className="mb-6 text-h3 font-bold">
									{t("physio.messageTitle")}
								</h3>
								<ContactForm />
							</div>
						</div>
					</div>
				)}
			</Section>

			<Section id="gallery">
				<SectionHeading title={common("gallery")} />
				<PhotoGallery images={gym.galleryImages} />
			</Section>
		</>
	)
}
