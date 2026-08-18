"use client"

import { FileText } from "lucide-react"
import { Suspense } from "react"

import { FaqAccordion } from "@/components/shared/faq-accordion"
import { HeroSection } from "@/components/shared/hero-section"
import { LocationSelector } from "@/components/shared/location-selector"
import { PricesAccordion } from "@/components/shared/prices-accordion"
import { Section } from "@/components/shared/section"
import { buttonVariants } from "@/components/ui/button"
import { useGymSelector } from "@/hooks/use-gym-selector"
import { faqItems } from "@/lib/data/faq-items"
import { gyms } from "@/lib/data/gyms"

export default function VisitPage() {
	return (
		<Suspense fallback={null}>
			<VisitPageContent />
		</Suspense>
	)
}

function VisitPageContent() {
	const { gyms: selectableGyms, selected, setSelected } = useGymSelector(gyms)
	const isComingSoon = selected.status === "coming-soon"

	return (
		<>
			<HeroSection
				title="Visit Us"
				subtitle="Placeholder subtext about planning a visit to a Hangar gym."
			/>

			<Section>
				<LocationSelector
					gyms={selectableGyms}
					selected={selected.slug}
					onSelect={setSelected}
				/>
			</Section>

			{isComingSoon ? (
				<Section>
					<p className="text-muted-foreground">
						{selected.name} is coming soon — registration, hours, prices, and
						booking details will be added closer to opening.
					</p>
				</Section>
			) : (
				<>
					<Section className="bg-muted/30">
						<h2 className="mb-4 text-2xl font-bold">Register online</h2>
						<p className="mb-4 text-muted-foreground leading-relaxed">
							Placeholder copy about registering online before your first visit.
						</p>
						<a
							href={selected.registrationUrl}
							target="_blank"
							rel="noopener noreferrer"
							className={buttonVariants()}
						>
							Register
						</a>
					</Section>

					<Section>
						<h2 className="mb-4 text-2xl font-bold">Current Occupancy</h2>
						{/* No live occupancy source exists yet — spec Open Question 2 is
						unresolved, so this always renders the fallback/empty state rather
						than a fabricated number. */}
						<p className="text-muted-foreground">
							Live occupancy data isn't available yet.
						</p>
					</Section>

					<Section className="bg-muted/30">
						<h2 className="mb-4 text-2xl font-bold">Opening Hours</h2>
						<table className="w-full max-w-md text-sm">
							<tbody>
								{selected.openingHours.map(row => (
									<tr key={row.label} className="border-b border-border">
										<td className="py-2 text-muted-foreground">{row.label}</td>
										<td className="py-2 text-right font-medium">{row.hours}</td>
									</tr>
								))}
							</tbody>
						</table>
					</Section>

					<Section>
						<h2 className="mb-4 text-2xl font-bold">Prices</h2>
						<PricesAccordion categories={selected.prices} />
					</Section>

					<Section className="bg-muted/30">
						<h2 className="mb-4 text-2xl font-bold">Book a Ticket</h2>
						<p className="mb-4 text-muted-foreground leading-relaxed">
							Placeholder copy about booking a ticket online ahead of your
							visit.
						</p>
						<a
							href={selected.bookingUrl}
							target="_blank"
							rel="noopener noreferrer"
							className={buttonVariants()}
						>
							Book now
						</a>
					</Section>

					<Section>
						<h2 className="mb-4 text-2xl font-bold">Documents</h2>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href={selected.consentFormUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 hover:underline"
								>
									<FileText className="size-4" aria-hidden="true" />
									Consent Form (PDF)
								</a>
							</li>
							<li>
								<a
									href={selected.visitorRulesUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 hover:underline"
								>
									<FileText className="size-4" aria-hidden="true" />
									Visitor Rules (PDF)
								</a>
							</li>
						</ul>
					</Section>

					<Section className="bg-muted/30">
						<h2 className="mb-4 text-2xl font-bold">FAQ</h2>
						<FaqAccordion items={faqItems} gymSlug={selected.slug} />
					</Section>
				</>
			)}
		</>
	)
}
