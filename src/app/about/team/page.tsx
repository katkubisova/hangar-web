import { HeroSection } from "@/components/shared/hero-section"
import { Section } from "@/components/shared/section"
import { TeamMemberCard } from "@/components/shared/team-member-card"
import { gyms } from "@/lib/data/gyms"
import { teamMembers } from "@/lib/data/team-members"
import type { TeamGroupSlug } from "@/lib/types/team-member"

const groups: { slug: TeamGroupSlug; label: string }[] = [
	{ slug: "core", label: "Hangar Core" },
	...gyms
		.filter(gym => gym.status !== "hidden")
		.sort((a, b) => a.displayOrder - b.displayOrder)
		.map(gym => ({ slug: gym.slug, label: gym.name })),
]

export default function TeamPage() {
	return (
		<>
			<HeroSection
				title="Our Team"
				subtitle="Placeholder subtext introducing the people behind Hangar."
			/>

			{groups.map((group, index) => {
				const members = teamMembers
					.filter(member => member.groupSlug === group.slug)
					.sort((a, b) => a.displayOrder - b.displayOrder)

				if (members.length === 0) {
					return null
				}

				return (
					<Section
						key={group.slug}
						className={index % 2 === 1 ? "bg-muted/30" : undefined}
					>
						<h2 className="mb-6 text-2xl font-bold">{group.label}</h2>
						<ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{members.map(member => (
								<li key={member.name}>
									<TeamMemberCard member={member} groupLabel={group.label} />
								</li>
							))}
						</ul>
					</Section>
				)
			})}
		</>
	)
}
