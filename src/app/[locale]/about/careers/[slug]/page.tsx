import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"

import { ContactForm } from "@/components/shared/contact-form"
import { Paragraphs } from "@/components/shared/paragraphs"
import { Section } from "@/components/shared/section"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon } from "@/components/ui/icons"
import { getPageMetadata } from "@/i18n/metadata"
import { Link } from "@/i18n/navigation"
import { getPageLocale } from "@/i18n/page-locale"
import { gyms } from "@/lib/data/gyms"
import { positions } from "@/lib/data/positions"
import { localize } from "@/lib/utils"

interface PositionPageProps {
	params: Promise<{ locale: string; slug: string }>
}

async function getPosition(params: PositionPageProps["params"]) {
	const locale = await getPageLocale(params)
	const { slug } = await params
	const position = positions.find(p => p.slug === slug && p.status === "open")

	if (!position) {
		notFound()
	}

	return { locale, position: localize(position, locale) }
}

export async function generateMetadata({
	params,
}: PositionPageProps): Promise<Metadata> {
	const { locale, position } = await getPosition(params)
	return getPageMetadata({
		locale,
		href: {
			pathname: "/about/careers/[slug]",
			params: { slug: position.slug },
		},
		title: position.title,
	})
}

export default async function PositionPage({ params }: PositionPageProps) {
	const { locale, position } = await getPosition(params)
	const t = await getTranslations("PositionPage")

	const locations = localize(
		gyms.filter(gym => position.locationSlugs.includes(gym.slug)),
		locale
	)
	// Company info is per-location (spec Open Question 6), so this shows the
	// first linked location's legal entity — every current position maps to
	// exactly one location.
	const company = locations[0]

	return (
		<>
			<section className="border-b border-foreground">
				<div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 pt-10 pb-12 sm:px-6 md:pt-16 md:pb-16 lg:px-8">
					<Link
						href="/about/careers"
						className="inline-flex w-fit items-center gap-2 text-xs font-medium tracking-eyebrow text-muted-foreground uppercase transition-colors hover:text-foreground"
					>
						<ArrowLeftIcon aria-hidden="true" className="size-4" />
						{t("back")}
					</Link>
					<h1 className="max-w-5xl text-h1 font-bold">{position.title}</h1>
					<div className="flex flex-wrap gap-2">
						{locations.map(location => (
							<Badge key={location.slug} variant="outline">
								{location.name}
							</Badge>
						))}
						<Badge variant="signal">
							{t(`employmentType.${position.employmentType}`)}
						</Badge>
					</div>
				</div>
			</section>

			<Section>
				<div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
					<div className="space-y-10 lg:col-span-7">
						<div className="space-y-4">
							<Paragraphs
								paragraphs={position.description}
								className="text-lead"
							/>
						</div>
						{(["responsibilities", "requirements", "offer"] as const).map(
							list =>
								position[list] && (
									<div key={list}>
										<h2 className="mb-4 text-h3 font-bold">
											{t(`lists.${list}`)}
										</h2>
										<ul className="space-y-2 text-muted-foreground">
											{position[list].map(item => (
												<li key={item} className="flex gap-3">
													<span
														aria-hidden="true"
														className="mt-2.5 size-1.5 shrink-0 bg-electric-violet"
													/>
													{item}
												</li>
											))}
										</ul>
									</div>
								)
						)}

						<div className="border-t border-foreground pt-8 text-sm">
							<p className="eyebrow mb-3">{t("contact")}</p>
							<p className="font-medium">
								{position.contactPerson.name} — {position.contactPerson.role}
							</p>
							{position.contactPerson.phone && (
								<p className="text-muted-foreground">
									{position.contactPerson.phone}
								</p>
							)}
							<a
								href={`mailto:${position.contactPerson.email}`}
								className="link"
							>
								{position.contactPerson.email}
							</a>
							{company && (
								<div className="mt-4 space-y-1 text-xs text-muted-foreground">
									<p>{company.companyName}</p>
									<p>
										{company.companyId}, {company.taxId}
									</p>
								</div>
							)}
						</div>
					</div>

					<aside className="h-fit border border-foreground p-5 md:p-8 lg:sticky lg:top-24 lg:col-span-5">
						<h2 className="mb-6 text-h3 font-bold">{t("apply")}</h2>
						<ContactForm variant="careers" />
					</aside>
				</div>
			</Section>
		</>
	)
}
