"use client"

import { Suspense } from "react"

import { HeroSection } from "@/components/shared/hero-section"
import { LocationSelector } from "@/components/shared/location-selector"
import { Section } from "@/components/shared/section"
import { buttonVariants } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { useGymSelector } from "@/hooks/use-gym-selector"
import { gyms } from "@/lib/data/gyms"

const galleryImages = [
	"Gallery image — Hangar Cafe interior",
	"Gallery image — coffee bar",
	"Gallery image — bistro plate",
	"Gallery image — seating area",
]

export default function CafePage() {
	return (
		<Suspense fallback={null}>
			<CafePageContent />
		</Suspense>
	)
}

function CafePageContent() {
	const { gyms: selectableGyms, selected, setSelected } = useGymSelector(gyms)
	const isComingSoon = selected.status === "coming-soon"

	return (
		<>
			<HeroSection
				title="Hangar Cafe"
				subtitle="Placeholder subtext about Hangar Cafe."
			/>

			<Section>
				<div className="grid gap-8 md:grid-cols-2">
					<div className="space-y-3">
						<h2 className="text-2xl font-bold">Specialty Coffee</h2>
						<p className="text-muted-foreground leading-relaxed">
							Placeholder copy about the specialty coffee offer.
						</p>
						<PlaceholderImage
							label="Specialty coffee photo"
							className="rounded-lg"
						/>
					</div>
					<div className="space-y-3">
						<h2 className="text-2xl font-bold">Fresh Bistro</h2>
						<p className="text-muted-foreground leading-relaxed">
							Placeholder copy about the fresh bistro food offer.
						</p>
						<PlaceholderImage
							label="Fresh bistro photo"
							className="rounded-lg"
						/>
					</div>
				</div>
			</Section>

			<Section className="bg-muted/30">
				<h2 className="mb-6 text-2xl font-bold">Our Menus</h2>
				<LocationSelector
					gyms={selectableGyms}
					selected={selected.slug}
					onSelect={setSelected}
					className="mb-6"
				/>
				{isComingSoon ? (
					<p className="text-muted-foreground">
						{selected.name}'s menu will be available closer to opening.
					</p>
				) : (
					<div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
						<PlaceholderImage
							label={selected.cafeMenuThumbnail}
							aspectRatio="aspect-[3/4]"
							className="w-40 rounded-lg"
						/>
						<a
							href={selected.cafeMenuUrl}
							target="_blank"
							rel="noopener noreferrer"
							className={buttonVariants()}
						>
							Download menu (PDF)
						</a>
					</div>
				)}
			</Section>

			<Section>
				<h2 className="mb-6 text-2xl font-bold">Gallery</h2>
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
					{galleryImages.map(label => (
						<PlaceholderImage
							key={label}
							label={label}
							className="rounded-lg"
						/>
					))}
				</div>
			</Section>
		</>
	)
}
