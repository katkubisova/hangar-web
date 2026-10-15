"use client"

import { useLocale, useTranslations } from "next-intl"
import { Suspense } from "react"

import { HeroSection } from "@/components/shared/hero-section"
import { LocationSelector } from "@/components/shared/location-selector"
import { Paragraphs } from "@/components/shared/paragraphs"
import { Section } from "@/components/shared/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { CallIcon, LocationIcon, MailIcon } from "@/components/ui/icons"
import { useGymSelector } from "@/hooks/use-gym-selector"
import { gyms } from "@/lib/data/gyms"
import { localize } from "@/lib/utils"

// Client-side because the branch selector lives in the URL (?gym=).
export function ContactPageContent() {
	return (
		<Suspense fallback={null}>
			<ContactPageSections />
		</Suspense>
	)
}

function ContactPageSections() {
	const t = useTranslations("ContactPage")
	const locale = useLocale()
	const {
		gyms: selectableGyms,
		selected,
		setSelected,
	} = useGymSelector(localize(gyms, locale))
	const isComingSoon = selected.status === "coming-soon"

	return (
		<>
			<HeroSection
				eyebrow={t("eyebrow")}
				title={t("title")}
				subtitle={t("subtitle")}
			/>

			<div className="sticky top-16 z-40 border-b border-foreground bg-background py-3">
				<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
					<LocationSelector
						gyms={selectableGyms}
						selected={selected.slug}
						onSelect={setSelected}
					/>
				</div>
			</div>

			<Section>
				<SectionHeading title={t("whereTitle")} />
				{isComingSoon ? (
					<p className="text-lead text-muted-foreground">
						{t("comingSoon", { gym: selected.name })}
					</p>
				) : (
					<div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
						<div className="space-y-6 lg:col-span-5">
							<p className="flex gap-3 text-lead">
								<LocationIcon
									aria-hidden="true"
									className="mt-1 size-6 shrink-0"
								/>
								{selected.address}
							</p>
							<table className="w-full text-sm">
								<tbody>
									{selected.openingHours.map(row => (
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
						</div>
						{selected.mapEmbedUrl && (
							<div className="aspect-[4/3] border border-foreground lg:col-span-7">
								<iframe
									key={selected.slug}
									src={selected.mapEmbedUrl}
									title={t("mapLabel", { gym: selected.name })}
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									className="size-full grayscale"
								/>
							</div>
						)}
					</div>
				)}
			</Section>

			{/* The spec only says "Where to find us" swaps to a coming-soon message
			for not-yet-open locations — it doesn't say what happens to the
			sections below for that case. Hiding them here for consistency with
			how Visit Us treats coming-soon locations; flag if that's wrong. */}
			{!isComingSoon && (
				<>
					<Section tone="muted">
						<SectionHeading title={t("directionsTitle")} />
						<div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
							<div className="space-y-4 lg:col-span-5">
								<Paragraphs
									paragraphs={selected.directionsText}
									className="text-muted-foreground"
								/>
							</div>
							{/* Only Brno has a directions video; elsewhere the
							text stands on its own. */}
							{selected.directionsVideoUrl && (
								<div className="aspect-video border border-foreground lg:col-span-7">
									<iframe
										key={selected.slug}
										src={selected.directionsVideoUrl}
										title={t("directionsVideoLabel")}
										loading="lazy"
										allow="encrypted-media; picture-in-picture"
										allowFullScreen
										className="size-full"
									/>
								</div>
							)}
						</div>
					</Section>

					<Section>
						<div className="grid gap-px border border-foreground bg-foreground md:grid-cols-2">
							<div className="bg-background p-6 md:p-8">
								<h2 className="mb-6 text-h3 font-bold">
									{t("quickContactsTitle")}
								</h2>
								<ul className="space-y-3">
									<li className="flex items-center gap-3">
										<MailIcon aria-hidden="true" className="size-5 shrink-0" />
										<a href={`mailto:${selected.email}`} className="link">
											{selected.email}
										</a>
									</li>
									<li className="flex items-center gap-3">
										<CallIcon aria-hidden="true" className="size-5 shrink-0" />
										<a
											href={`tel:${selected.phone.replace(/\s/g, "")}`}
											className="link"
										>
											{selected.phone}
										</a>
									</li>
								</ul>
							</div>
							<div className="bg-background p-6 md:p-8">
								<h2 className="mb-6 text-h3 font-bold">{t("companyTitle")}</h2>
								<div className="space-y-1 text-sm text-muted-foreground">
									<p className="text-foreground">{selected.companyName}</p>
									<p>{selected.companyId}</p>
									<p>{selected.taxId}</p>
								</div>
							</div>
						</div>
					</Section>

					<Section tone="muted">
						<SectionHeading title={t("formTitle")} className="mb-0 md:mb-0">
							<p>{t("formPending")}</p>
						</SectionHeading>
					</Section>
				</>
			)}
		</>
	)
}
