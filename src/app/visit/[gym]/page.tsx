import { Facebook, FileText, Instagram } from "lucide-react"
import { notFound } from "next/navigation"

import { ContactForm } from "@/components/shared/contact-form"
import { HeroSection } from "@/components/shared/hero-section"
import { PhotoGallery } from "@/components/shared/photo-gallery"
import { PricesAccordion } from "@/components/shared/prices-accordion"
import { Section } from "@/components/shared/section"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { gyms } from "@/lib/data/gyms"

interface BranchPageProps {
	params: Promise<{ gym: string }>
}

// Only open locations get a branch page — Plzeň is a disabled "coming soon"
// tile on /visit with no page of its own yet.
const openGyms = gyms.filter(gym => gym.status === "open")

export function generateStaticParams() {
	return openGyms.map(gym => ({ gym: gym.slug }))
}

export default async function BranchPage({ params }: BranchPageProps) {
	const { gym: slug } = await params
	const gym = openGyms.find(g => g.slug === slug)

	if (!gym) {
		notFound()
	}

	return (
		<>
			<HeroSection title={gym.name} subtitle={gym.shortDescription} />

			<Section>
				<div className="grid gap-8 lg:grid-cols-2">
					<div className="space-y-4">
						<h2 className="text-2xl font-bold">About this location</h2>
						<p className="text-muted-foreground leading-relaxed">
							{gym.shortDescription}
						</p>
						<div className="flex gap-3">
							<Button
								variant="outline"
								size="icon"
								aria-label={`${gym.name} on Instagram`}
								render={
									// biome-ignore lint/a11y/useAnchorContent: accessible label comes from the aria-label above, merged onto this anchor via the render prop
									<a
										href={gym.instagramUrl}
										target="_blank"
										rel="noopener noreferrer"
									/>
								}
							>
								<Instagram className="size-4" aria-hidden="true" />
							</Button>
							<Button
								variant="outline"
								size="icon"
								aria-label={`${gym.name} on Facebook`}
								render={
									// biome-ignore lint/a11y/useAnchorContent: accessible label comes from the aria-label above, merged onto this anchor via the render prop
									<a
										href={gym.facebookUrl}
										target="_blank"
										rel="noopener noreferrer"
									/>
								}
							>
								<Facebook className="size-4" aria-hidden="true" />
							</Button>
						</div>
					</div>
					<div className="space-y-4">
						<p>{gym.address}</p>
						<table className="w-full text-sm">
							<tbody>
								{gym.openingHours.map(row => (
									<tr key={row.label} className="border-b border-border">
										<td className="py-2 text-muted-foreground">{row.label}</td>
										<td className="py-2 text-right font-medium">{row.hours}</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className="space-y-1 text-sm">
							<a href={`mailto:${gym.email}`} className="block hover:underline">
								{gym.email}
							</a>
							<a
								href={`tel:${gym.phone.replace(/\s/g, "")}`}
								className="block hover:underline"
							>
								{gym.phone}
							</a>
						</div>
					</div>
				</div>
			</Section>

			<Section className="bg-muted/30">
				<h2 className="mb-6 text-2xl font-bold">Gallery</h2>
				<PhotoGallery images={gym.galleryImages} />
			</Section>

			<Section>
				<h2 className="mb-4 text-2xl font-bold">Register online</h2>
				<p className="mb-4 text-muted-foreground leading-relaxed">
					Placeholder copy about registering online before your first visit.
				</p>
				<Button
					render={
						// biome-ignore lint/a11y/useAnchorContent: text comes from Button's children, merged onto this anchor via the render prop
						<a
							href={gym.registrationUrl}
							target="_blank"
							rel="noopener noreferrer"
						/>
					}
				>
					Register
				</Button>
			</Section>

			<Section className="bg-muted/30">
				<h2 className="mb-4 text-2xl font-bold">Current Occupancy</h2>
				{/* No live occupancy source exists yet — spec Open Question 2 is
				unresolved, so this always renders the fallback/empty state rather
				than a fabricated number. */}
				<p className="text-muted-foreground">
					Live occupancy data isn't available yet.
				</p>
			</Section>

			<Section>
				<h2 className="mb-4 text-2xl font-bold">Prices</h2>
				<PricesAccordion categories={gym.prices} />
			</Section>

			<Section className="bg-muted/30">
				<h2 className="mb-4 text-2xl font-bold">Book a Ticket</h2>
				<p className="mb-4 text-muted-foreground leading-relaxed">
					Placeholder copy about booking a ticket online ahead of your visit.
				</p>
				<Button
					render={
						// biome-ignore lint/a11y/useAnchorContent: text comes from Button's children, merged onto this anchor via the render prop
						<a
							href={gym.bookingUrl}
							target="_blank"
							rel="noopener noreferrer"
						/>
					}
				>
					Book now
				</Button>
			</Section>

			<Section>
				<h2 className="mb-4 text-2xl font-bold">Documents</h2>
				<ul className="space-y-2 text-sm">
					<li>
						<a
							href={gym.consentFormUrl}
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
							href={gym.visitorRulesUrl}
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
				<h2 className="mb-8 text-3xl font-bold">Cafe & Physio</h2>

				<div className="mb-12 space-y-6">
					<h3 className="text-xl font-semibold">Hangar Cafe</h3>
					<div className="grid gap-8 md:grid-cols-2">
						<div className="space-y-3">
							<h4 className="text-lg font-medium">Specialty Coffee</h4>
							<p className="text-muted-foreground leading-relaxed">
								Placeholder copy about the specialty coffee offer.
							</p>
							<PlaceholderImage
								label="Specialty coffee photo"
								className="rounded-lg"
							/>
						</div>
						<div className="space-y-3">
							<h4 className="text-lg font-medium">Fresh Bistro</h4>
							<p className="text-muted-foreground leading-relaxed">
								Placeholder copy about the fresh bistro food offer.
							</p>
							<PlaceholderImage
								label="Fresh bistro photo"
								className="rounded-lg"
							/>
						</div>
					</div>
					<div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
						<PlaceholderImage
							label={gym.cafeMenuThumbnail}
							aspectRatio="aspect-[3/4]"
							className="w-40 rounded-lg"
						/>
						<Button
							render={
								// biome-ignore lint/a11y/useAnchorContent: text comes from Button's children, merged onto this anchor via the render prop
								<a
									href={gym.cafeMenuUrl}
									target="_blank"
									rel="noopener noreferrer"
								/>
							}
						>
							Download menu (PDF)
						</Button>
					</div>
				</div>

				<div className="space-y-6 border-t border-border pt-12">
					<h3 className="text-xl font-semibold">Physio</h3>
					{!gym.physio ? (
						<p className="text-muted-foreground">
							Physio isn't offered at this location yet.
						</p>
					) : (
						<>
							<p className="text-muted-foreground leading-relaxed">
								{gym.physio.intro}
							</p>
							<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
								{gym.physio.team.map(member => (
									<li
										key={member.name}
										className="flex flex-col gap-3 rounded-lg border border-border bg-background p-4"
									>
										<PlaceholderImage
											label={member.photo}
											aspectRatio="aspect-square"
											className="rounded-full"
										/>
										<div>
											<p className="font-medium">{member.name}</p>
											<p className="text-sm text-muted-foreground">
												{member.specialisation}
											</p>
										</div>
										<p className="text-sm text-muted-foreground">
											{member.bio}
										</p>
									</li>
								))}
							</ul>
							<table className="w-full max-w-lg text-sm">
								<thead>
									<tr className="border-b border-border text-left text-muted-foreground">
										<th className="py-2 font-medium">Service</th>
										<th className="py-2 font-medium">Duration</th>
										<th className="py-2 text-right font-medium">Price</th>
									</tr>
								</thead>
								<tbody>
									{gym.physio.prices.map(item => (
										<tr key={item.name} className="border-b border-border">
											<td className="py-2">{item.name}</td>
											<td className="py-2 text-muted-foreground">
												{item.note}
											</td>
											<td className="py-2 text-right font-medium">
												{item.price}
											</td>
										</tr>
									))}
								</tbody>
							</table>

							<div className="grid gap-8 md:grid-cols-2">
								<div>
									<h4 className="mb-2 text-lg font-medium">
										Book an appointment
									</h4>
									<p className="mb-4 text-muted-foreground leading-relaxed">
										Placeholder copy about booking a physio appointment online.
									</p>
									<Button
										render={
											// biome-ignore lint/a11y/useAnchorContent: text comes from Button's children, merged onto this anchor via the render prop
											<a
												href={gym.physio.bookingUrl}
												target="_blank"
												rel="noopener noreferrer"
											/>
										}
									>
										Book now
									</Button>
								</div>
								<div>
									<h4 className="mb-2 text-lg font-medium">
										Or send a message
									</h4>
									<ContactForm />
								</div>
							</div>
						</>
					)}
				</div>
			</Section>
		</>
	)
}
