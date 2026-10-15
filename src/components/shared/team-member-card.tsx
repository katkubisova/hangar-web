import { Portrait } from "@/components/brand/portrait"
import type { TeamMember } from "@/lib/types/team-member"

interface TeamMemberCardProps {
	member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
	return (
		<article className="flex h-full flex-col gap-4">
			<Portrait name={member.name} alt={member.photo} />
			<div>
				<h3 className="text-h3 font-bold">{member.name}</h3>
				<p className="eyebrow mt-1">{member.role}</p>
			</div>
			{member.bio && (
				<p className="text-sm text-muted-foreground">{member.bio}</p>
			)}
			{member.email && (
				<a
					href={`mailto:${member.email}`}
					className="link mt-auto text-sm break-all"
				>
					{member.email}
				</a>
			)}
		</article>
	)
}
