import { BenefitCard } from "@/components/shared/benefit-card"
import { EmptyState } from "@/components/shared/empty-state"
import { HeroSection } from "@/components/shared/hero-section"
import { PositionListItem } from "@/components/shared/position-list-item"
import { Section } from "@/components/shared/section"
import { benefitCards } from "@/lib/data/benefit-cards"
import { positions } from "@/lib/data/positions"

const openPositions = positions
	.filter(position => position.status === "open")
	.sort((a, b) => a.displayOrder - b.displayOrder)

const sortedBenefitCards = [...benefitCards].sort(
	(a, b) => a.displayOrder - b.displayOrder
)

export default function CareersPage() {
	return (
		<>
			<HeroSection
				title="Careers"
				subtitle="Placeholder subtext about working at Hangar."
			/>

			<Section>
				<h2 className="mb-6 text-2xl font-bold">Why work at Hangar</h2>
				<ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{sortedBenefitCards.map(card => (
						<li key={card.title}>
							<BenefitCard benefit={card} />
						</li>
					))}
				</ul>
			</Section>

			<Section className="bg-muted/30">
				<h2 className="mb-6 text-2xl font-bold">Open Positions</h2>
				{openPositions.length === 0 ? (
					<EmptyState
						message="No open positions right now — but we're always growing."
						action={{ label: "Get in touch", href: "/contact" }}
					/>
				) : (
					<ul className="space-y-3">
						{openPositions.map(position => (
							<li key={position.slug}>
								<PositionListItem position={position} />
							</li>
						))}
					</ul>
				)}
			</Section>
		</>
	)
}
