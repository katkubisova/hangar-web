import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"

import { ContactForm } from "@/components/shared/contact-form"
import { Paragraphs } from "@/components/shared/paragraphs"
import { Section } from "@/components/shared/section"
import { Badge } from "@/components/ui/badge"
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
		<Section>
			<Link
				href="/about/careers"
				className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
			>
				← {t("back")}
			</Link>

			<h1 className="mb-3 text-3xl font-bold">{position.title}</h1>
			<div className="mb-6 flex flex-wrap gap-2">
				{locations.map(location => (
					<Badge key={location.slug} variant="outline">
						{location.name}
					</Badge>
				))}
				<Badge variant="secondary">
					{t(`employmentType.${position.employmentType}`)}
				</Badge>
			</div>

			<div className="mb-8 max-w-2xl space-y-6 text-muted-foreground">
				<Paragraphs paragraphs={position.description} />
				{(["responsibilities", "requirements", "offer"] as const).map(
					list =>
						position[list] && (
							<div key={list}>
								<h2 className="mb-2 font-medium text-foreground">
									{t(`lists.${list}`)}
								</h2>
								<ul className="list-disc space-y-1 pl-5">
									{position[list].map(item => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						)
				)}
			</div>

			<div className="mb-8 max-w-md rounded-lg border border-border p-4">
				<p className="mb-2 text-sm font-medium">{t("contact")}</p>
				<p className="text-sm">
					{position.contactPerson.name} — {position.contactPerson.role}
				</p>
				{position.contactPerson.phone && (
					<p className="text-sm text-muted-foreground">
						{position.contactPerson.phone}
					</p>
				)}
				<a
					href={`mailto:${position.contactPerson.email}`}
					className="text-sm text-muted-foreground hover:text-foreground"
				>
					{position.contactPerson.email}
				</a>
			</div>

			{company && (
				<div className="mb-8 max-w-md space-y-1 text-sm text-muted-foreground">
					<p>{company.companyName}</p>
					<p>{company.companyId}</p>
					<p>{company.taxId}</p>
				</div>
			)}

			<div className="max-w-md rounded-lg bg-muted/30 p-4">
				<h2 className="mb-4 text-lg font-semibold">{t("apply")}</h2>
				<ContactForm variant="careers" />
			</div>
		</Section>
	)
}
