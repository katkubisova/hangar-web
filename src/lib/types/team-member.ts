import type { GymSlug } from "@/lib/types/gym"
import type { Localized, Resolved } from "@/lib/types/localized"

export type TeamGroupSlug = GymSlug | "core"

export interface TeamMemberData {
	photo: Localized<string>
	name: string
	role: Localized<string>
	groupSlug: TeamGroupSlug
	bio: Localized<string>
	email?: string
	displayOrder: number
}

export type TeamMember = Resolved<TeamMemberData>
