import Link from "next/link"

import { ArticleCard } from "@/components/shared/article-card"
import { HeroSection } from "@/components/shared/hero-section"
import { LocationCard } from "@/components/shared/location-card"
import { Section } from "@/components/shared/section"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { articles } from "@/lib/data/articles"
import { gyms } from "@/lib/data/gyms"

const visibleGyms = gyms
	.filter(gym => gym.status !== "hidden")
	.sort((a, b) => a.displayOrder - b.displayOrder)

const recentArticles = articles
	.filter(article => article.status === "published")
	.sort((a, b) => b.publishedDate.localeCompare(a.publishedDate))
	.slice(0, 3)

export default function HomePage() {
	return (
		<>
			<HeroSection
				imageLabel="Hero image"
				title="The Climbing Gym Network of the Czech Republic"
				subtitle="Placeholder subtext introducing the Hangar network. Second placeholder line with a short supporting detail."
				cta={{ label: "Find your gym", href: "#locations" }}
			/>

			<Section id="about">
				<div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold">About Hangar</h2>
						<p className="text-muted-foreground leading-relaxed">
							Placeholder paragraph one — describing the Hangar network's
							origins and mission across the Czech Republic.
						</p>
						<p className="text-muted-foreground leading-relaxed">
							Placeholder paragraph two — describing the facilities and what
							makes a Hangar gym different from other climbing walls.
						</p>
						<p className="text-muted-foreground leading-relaxed">
							Placeholder paragraph three — describing the community and what's
							next for the network.
						</p>
					</div>
					<PlaceholderImage label="About Hangar photo" className="rounded-lg" />
				</div>
			</Section>

			<Section id="locations" className="scroll-mt-16 bg-muted/30">
				<div className="mb-8 text-center">
					<h2 className="text-3xl font-bold">Find your Hangar</h2>
				</div>
				<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{visibleGyms.map(gym => (
						<li key={gym.slug}>
							<LocationCard gym={gym} />
						</li>
					))}
				</ul>
			</Section>

			<Section>
				<div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
					<PlaceholderImage
						label="Visit Us photo"
						className="rounded-lg lg:order-2"
					/>
					<div className="space-y-4 lg:order-1">
						<h2 className="text-3xl font-bold">Visit Us</h2>
						<p className="text-muted-foreground leading-relaxed">
							Placeholder copy line one — planning a visit, registration, and
							what to expect.
						</p>
						<p className="text-muted-foreground leading-relaxed">
							Placeholder copy line two — hours, pricing, and booking a ticket.
						</p>
						<Button render={<Link href="/visit" />}>Plan your visit</Button>
					</div>
				</div>
			</Section>

			<Section className="bg-muted/30">
				<div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold">Events & Activities</h2>
						<p className="text-muted-foreground leading-relaxed">
							Placeholder copy line one — courses, classes, and one-off events.
						</p>
						<p className="text-muted-foreground leading-relaxed">
							Placeholder copy line two — the year-round Hangar Challenge.
						</p>
						<Button render={<Link href="/events" />}>See what's on</Button>
					</div>
					<PlaceholderImage label="Events photo" className="rounded-lg" />
				</div>
			</Section>

			<Section>
				<div className="mb-8 flex items-center justify-between">
					<h2 className="text-3xl font-bold">News</h2>
					<Link href="/news" className="text-sm font-medium hover:underline">
						All news
					</Link>
				</div>
				<ul className="grid gap-6 md:grid-cols-3">
					{recentArticles.map(article => (
						<li key={article.slug}>
							<ArticleCard article={article} />
						</li>
					))}
				</ul>
			</Section>
		</>
	)
}
