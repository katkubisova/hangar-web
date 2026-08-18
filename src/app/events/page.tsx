import Link from "next/link"

import { ActivityCard } from "@/components/shared/activity-card"
import { HeroSection } from "@/components/shared/hero-section"
import { Section } from "@/components/shared/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { activityCategories } from "@/lib/data/activity-categories"
import { gyms } from "@/lib/data/gyms"

const bookableGyms = gyms
	.filter(gym => gym.status !== "hidden")
	.sort((a, b) => a.displayOrder - b.displayOrder)

const sortedActivityCategories = [...activityCategories].sort(
	(a, b) => a.displayOrder - b.displayOrder
)

export default function EventsPage() {
	return (
		<>
			<HeroSection
				title="Events & Activities"
				subtitle="Placeholder subtext about events and activities across the Hangar network."
			/>

			<Section>
				<h2 className="mb-6 text-2xl font-bold">Book Activities</h2>
				<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{bookableGyms.map(gym => {
						const isComingSoon = gym.status === "coming-soon"

						return (
							<li
								key={gym.slug}
								className="flex flex-col gap-4 rounded-lg border border-border p-4"
							>
								<div className="flex items-center justify-between gap-2">
									<h3 className="font-medium">{gym.name}</h3>
									<Badge variant={isComingSoon ? "secondary" : "default"}>
										{isComingSoon ? "Coming soon" : "Open"}
									</Badge>
								</div>
								{isComingSoon ? (
									<p className="text-sm text-muted-foreground">
										Booking isn't available yet for this location.
									</p>
								) : (
									<Button
										variant="outline"
										className="w-fit"
										render={
											// biome-ignore lint/a11y/useAnchorContent: text comes from Button's children, merged onto this anchor via the render prop
											<a
												href={gym.activitiesBookingUrl}
												target="_blank"
												rel="noopener noreferrer"
											/>
										}
									>
										Book activities
									</Button>
								)}
							</li>
						)
					})}
				</ul>
			</Section>

			<Section className="bg-muted/30">
				<h2 className="mb-6 text-2xl font-bold">Activity Types</h2>
				<ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{sortedActivityCategories.map(activity => (
						<li key={activity.name}>
							<ActivityCard activity={activity} />
						</li>
					))}
				</ul>
			</Section>

			<Section className="bg-foreground text-background">
				<div className="mx-auto max-w-xl text-center">
					<h2 className="mb-4 text-3xl font-bold">Hangar Challenge</h2>
					<p className="mb-6 opacity-80">
						Placeholder copy about the year-round Hangar Challenge running
						across all locations.
					</p>
					<Button
						variant="secondary"
						render={<Link href="/hangar-challenge" />}
					>
						How it works
					</Button>
				</div>
			</Section>
		</>
	)
}
