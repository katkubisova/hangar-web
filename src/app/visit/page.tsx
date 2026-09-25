import { FaqAccordion } from "@/components/shared/faq-accordion"
import { HeroSection } from "@/components/shared/hero-section"
import { LocationCard } from "@/components/shared/location-card"
import { PhotoGallery } from "@/components/shared/photo-gallery"
import { Section } from "@/components/shared/section"
import { faqItems } from "@/lib/data/faq-items"
import { gyms } from "@/lib/data/gyms"

const visibleGyms = gyms
	.filter(gym => gym.status !== "hidden")
	.sort((a, b) => a.displayOrder - b.displayOrder)

const galleryImages = gyms.flatMap(gym => gym.galleryImages)

export default function VisitPage() {
	return (
		<>
			<HeroSection
				title="Visit Us"
				subtitle="Placeholder subtext about planning a visit to a Hangar gym."
			/>

			<Section>
				<div className="mb-8 text-center">
					<h2 className="text-3xl font-bold">Choose your location</h2>
				</div>
				<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{visibleGyms.map(gym => (
						<li key={gym.slug}>
							<LocationCard gym={gym} />
						</li>
					))}
				</ul>
			</Section>

			<Section className="bg-muted/30">
				<h2 className="mb-6 text-2xl font-bold">Gallery</h2>
				<PhotoGallery images={galleryImages} />
			</Section>

			<Section>
				<h2 className="mb-4 text-2xl font-bold">FAQ</h2>
				<FaqAccordion items={faqItems} />
			</Section>
		</>
	)
}
