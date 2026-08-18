import { HeroSection } from "@/components/shared/hero-section"
import { Section } from "@/components/shared/section"
import { PlaceholderImage } from "@/components/ui/placeholder-image"

const steps = [
	"Pick up a challenge card",
	"Complete routes at your own pace",
	"Log progress on the challenge board",
	"Collect your reward at reception",
]

export default function HangarChallengePage() {
	return (
		<>
			<HeroSection
				title="Hangar Challenge"
				subtitle="A year-round challenge for climbers of all levels."
			/>

			<Section>
				<div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold">
							What is the Hangar Challenge?
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Placeholder paragraph — explaining the self-paced, year-round
							bouldering challenge that runs across all Hangar locations, open
							to climbers of every level.
						</p>
					</div>
					<PlaceholderImage
						label="Hangar Challenge photo"
						className="rounded-lg"
					/>
				</div>
			</Section>

			<Section className="bg-muted/30">
				<h2 className="mb-8 text-3xl font-bold">How it works</h2>
				<ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{steps.map((step, index) => (
						<li key={step} className="space-y-2">
							<span className="text-sm font-medium text-muted-foreground">
								Step {index + 1}
							</span>
							<p className="font-medium">{step}</p>
						</li>
					))}
				</ol>
			</Section>
		</>
	)
}
