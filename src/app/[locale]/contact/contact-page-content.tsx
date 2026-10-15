"use client"

import { useLocale, useTranslations } from "next-intl"
import { Suspense } from "react"

import { HeroSection } from "@/components/shared/hero-section"
import { LocationSelector } from "@/components/shared/location-selector"
import { Paragraphs } from "@/components/shared/paragraphs"
import { Section } from "@/components/shared/section"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
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
			<HeroSection title={t("title")} subtitle={t("subtitle")} />

			<div className="sticky top-16 z-40 border-b border-border bg-background py-4">
				<div className="container mx-auto px-4">
					<LocationSelector
						gyms={selectableGyms}
						selected={selected.slug}
						onSelect={setSelected}
					/>
				</div>
			</div>

			<Section>
				<h2 className="mb-6 text-2xl font-bold">{t("whereTitle")}</h2>
				{isComingSoon ? (
					<p className="text-muted-foreground">
						{t("comingSoon", { gym: selected.name })}
					</p>
				) : (
					<div className="grid gap-8 lg:grid-cols-2">
						<PlaceholderImage
							label={t("mapLabel", { gym: selected.name })}
							className="rounded-lg"
						/>
						<div className="space-y-4">
							<p>{selected.address}</p>
							<table className="w-full text-sm">
								<tbody>
									{selected.openingHours.map(row => (
										<tr key={row.label} className="border-b border-border">
											<td className="py-2 text-muted-foreground">
												{row.label}
											</td>
											<td className="py-2 text-right font-medium">
												{row.hours}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				)}
			</Section>

			{/* The spec only says "Where to find us" swaps to a coming-soon message
			for not-yet-open locations — it doesn't say what happens to the
			sections below for that case. Hiding them here for consistency with
			how Visit Us treats coming-soon locations; flag if that's wrong. */}
			{!isComingSoon && (
				<>
					<Section className="bg-muted/30">
						<h2 className="mb-6 text-2xl font-bold">{t("directionsTitle")}</h2>
						<div className="grid gap-8 lg:grid-cols-2 lg:items-center">
							<div className="space-y-3">
								<Paragraphs
									paragraphs={selected.directionsText}
									className="text-muted-foreground"
								/>
							</div>
							<PlaceholderImage
								label={t("directionsVideoLabel")}
								className="rounded-lg"
							/>
						</div>
					</Section>

					<Section>
						<h2 className="mb-4 text-2xl font-bold">{t("companyTitle")}</h2>
						<div className="space-y-1 text-sm text-muted-foreground">
							<p>{selected.companyName}</p>
							<p>{selected.companyId}</p>
							<p>{selected.taxId}</p>
						</div>
					</Section>

					<Section className="bg-muted/30">
						<h2 className="mb-4 text-2xl font-bold">
							{t("quickContactsTitle")}
						</h2>
						<div className="space-y-1 text-sm">
							<a
								href={`mailto:${selected.email}`}
								className="block hover:text-link"
							>
								{selected.email}
							</a>
							<a
								href={`tel:${selected.phone.replace(/\s/g, "")}`}
								className="block hover:text-link"
							>
								{selected.phone}
							</a>
						</div>
					</Section>

					<Section>
						<h2 className="mb-2 text-2xl font-bold">{t("formTitle")}</h2>
						<p className="text-muted-foreground">{t("formPending")}</p>
					</Section>
				</>
			)}
		</>
	)
}
