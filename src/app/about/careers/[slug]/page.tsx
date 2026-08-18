import Link from "next/link"
import { notFound } from "next/navigation"

import { Section } from "@/components/shared/section"
import { Badge } from "@/components/ui/badge"
import { gyms } from "@/lib/data/gyms"
import { positions } from "@/lib/data/positions"
import type { EmploymentType } from "@/lib/types/position"

interface PositionPageProps {
	params: Promise<{ slug: string }>
}

const employmentTypeLabel: Record<EmploymentType, string> = {
	"full-time": "Full-time",
	"part-time": "Part-time",
	contract: "Contract",
}

export default async function PositionPage({ params }: PositionPageProps) {
	const { slug } = await params
	const position = positions.find(p => p.slug === slug && p.status === "open")

	if (!position) {
		notFound()
	}

	const locations = position.locationSlugs
		.map(locSlug => gyms.find(gym => gym.slug === locSlug))
		.filter((gym): gym is (typeof gyms)[number] => Boolean(gym))
	// Company info is per-location (spec Open Question 6), so this shows the
	// first linked location's legal entity — every current position maps to
	// exactly one location.
	const company = locations[0]

	return (
		<Section>
			<Link
				href="/about/careers"
				className="mb-6 inline-block text-sm text-muted-foreground hover:underline"
			>
				← Back to Careers
			</Link>

			<h1 className="mb-3 text-3xl font-bold">{position.title}</h1>
			<div className="mb-6 flex flex-wrap gap-2">
				{locations.map(location => (
					<Badge key={location.slug} variant="outline">
						{location.name}
					</Badge>
				))}
				<Badge variant="secondary">
					{employmentTypeLabel[position.employmentType]}
				</Badge>
			</div>

			<div className="mb-8 max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
				<p>{position.description}</p>
			</div>

			<div className="mb-8 max-w-md rounded-lg border border-border p-4">
				<p className="mb-2 text-sm font-medium">Contact</p>
				<p className="text-sm">
					{position.contactPerson.name} — {position.contactPerson.role}
				</p>
				<p className="text-sm text-muted-foreground">
					{position.contactPerson.phone}
				</p>
				<p className="text-sm text-muted-foreground">
					{position.contactPerson.email}
				</p>
			</div>

			{company && (
				<div className="mb-8 max-w-md space-y-1 text-sm text-muted-foreground">
					<p>{company.companyName}</p>
					<p>{company.companyId}</p>
					<p>{company.taxId}</p>
					<p>{company.address}</p>
				</div>
			)}

			<div className="max-w-md rounded-lg bg-muted/30 p-4">
				<h2 className="mb-2 text-lg font-semibold">Apply</h2>
				<p className="text-sm text-muted-foreground">
					Application form — coming in Phase 5 (see CLAUDE.md).
				</p>
			</div>
		</Section>
	)
}
