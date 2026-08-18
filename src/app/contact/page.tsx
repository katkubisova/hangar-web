"use client"

import { HeroSection } from "@/components/shared/hero-section"
import { LocationSelector } from "@/components/shared/location-selector"
import { Section } from "@/components/shared/section"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { useGymSelector } from "@/hooks/use-gym-selector"
import { gyms } from "@/lib/data/gyms"

export default function ContactPage() {
	const { gyms: selectableGyms, selected, setSelected } = useGymSelector(gyms)
	const isComingSoon = selected.status === "coming-soon"

	return (
		<>
			<HeroSection
				title="Contact"
				subtitle="Placeholder subtext about getting in touch with a Hangar location."
			/>

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
				<h2 className="mb-6 text-2xl font-bold">Where to find us</h2>
				{isComingSoon ? (
					<p className="text-muted-foreground">
						{selected.name} is coming soon — location details will be announced
						closer to opening.
					</p>
				) : (
					<div className="grid gap-8 lg:grid-cols-2">
						<PlaceholderImage
							label={`Map — ${selected.name}`}
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
						<h2 className="mb-6 text-2xl font-bold">How to get here</h2>
						<div className="grid gap-8 lg:grid-cols-2 lg:items-center">
							<p className="text-muted-foreground leading-relaxed">
								{selected.directionsText}
							</p>
							<PlaceholderImage
								label="Directions video"
								className="rounded-lg"
							/>
						</div>
					</Section>

					<Section>
						<h2 className="mb-4 text-2xl font-bold">Company info</h2>
						<div className="space-y-1 text-sm text-muted-foreground">
							<p>{selected.companyName}</p>
							<p>{selected.companyId}</p>
							<p>{selected.taxId}</p>
							<p>{selected.address}</p>
						</div>
					</Section>

					<Section className="bg-muted/30">
						<h2 className="mb-4 text-2xl font-bold">Quick contacts</h2>
						<div className="space-y-1 text-sm">
							<a
								href={`mailto:${selected.email}`}
								className="block hover:underline"
							>
								{selected.email}
							</a>
							<a
								href={`tel:${selected.phone.replace(/\s/g, "")}`}
								className="block hover:underline"
							>
								{selected.phone}
							</a>
						</div>
					</Section>

					<Section>
						<h2 className="mb-2 text-2xl font-bold">Get in touch</h2>
						<p className="text-muted-foreground">
							Contact form — coming in Phase 5 (see CLAUDE.md).
						</p>
					</Section>
				</>
			)}
		</>
	)
}
