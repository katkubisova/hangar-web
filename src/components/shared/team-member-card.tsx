import { Badge } from "@/components/ui/badge"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import type { TeamMember } from "@/lib/types/team-member"

interface TeamMemberCardProps {
	member: TeamMember
	groupLabel: string
}

export function TeamMemberCard({ member, groupLabel }: TeamMemberCardProps) {
	return (
		<div className="flex flex-col gap-3 rounded-lg border border-border p-4">
			<PlaceholderImage
				label={member.photo}
				aspectRatio="aspect-square"
				className="rounded-full"
			/>
			<div>
				<p className="font-medium">{member.name}</p>
				<p className="text-sm text-muted-foreground">{member.role}</p>
			</div>
			<Badge variant="outline" className="w-fit">
				{groupLabel}
			</Badge>
			<p className="text-sm text-muted-foreground">{member.bio}</p>
			{member.email && (
				<a href={`mailto:${member.email}`} className="text-sm hover:underline">
					{member.email}
				</a>
			)}
		</div>
	)
}
