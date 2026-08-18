"use client"

import { Suspense } from "react"

import { HeroSection } from "@/components/shared/hero-section"
import { LocationSelector } from "@/components/shared/location-selector"
import { Section } from "@/components/shared/section"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { useGymSelector } from "@/hooks/use-gym-selector"
import { gyms } from "@/lib/data/gyms"

const physioGyms = gyms.filter(gym => gym.physio?.enabled)

export default function PhysioPage() {
	return (
		<Suspense fallback={null}>
			<PhysioPageContent />
		</Suspense>
	)
}

function PhysioPageContent() {
	const {
		gyms: selectableGyms,
		selected,
		setSelected,
	} = useGymSelector(physioGyms)
	const physio = selected.physio

	return (
		<>
			<HeroSection
				title="Physio"
				subtitle="Professional physiotherapy for climbers — helping you recover faster and move better."
			/>

			<Section>
				<LocationSelector
					gyms={selectableGyms}
					selected={selected.slug}
					onSelect={setSelected}
				/>
			</Section>

			{!physio ? (
				<Section>
					<p className="text-muted-foreground">
						Physio isn't offered at this location yet.
					</p>
				</Section>
			) : (
				<>
					<Section className="bg-muted/30">
						<h2 className="mb-2 text-2xl font-bold">Our Physiotherapists</h2>
						<p className="mb-6 text-muted-foreground leading-relaxed">
							{physio.intro}
						</p>
						<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{physio.team.map(member => (
								<li
									key={member.name}
									className="flex flex-col gap-3 rounded-lg border border-border p-4"
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
									<p className="text-sm text-muted-foreground">{member.bio}</p>
								</li>
							))}
						</ul>
					</Section>

					<Section>
						<h2 className="mb-6 text-2xl font-bold">Prices</h2>
						<table className="w-full max-w-lg text-sm">
							<thead>
								<tr className="border-b border-border text-left text-muted-foreground">
									<th className="py-2 font-medium">Service</th>
									<th className="py-2 font-medium">Duration</th>
									<th className="py-2 text-right font-medium">Price</th>
								</tr>
							</thead>
							<tbody>
								{physio.prices.map(item => (
									<tr key={item.name} className="border-b border-border">
										<td className="py-2">{item.name}</td>
										<td className="py-2 text-muted-foreground">{item.note}</td>
										<td className="py-2 text-right font-medium">
											{item.price}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</Section>

					<Section className="bg-muted/30">
						<h2 className="mb-2 text-2xl font-bold">Book an appointment</h2>
						<p className="text-muted-foreground">
							Booking form — coming in Phase 5 (see CLAUDE.md).
						</p>
					</Section>
				</>
			)}
		</>
	)
}
