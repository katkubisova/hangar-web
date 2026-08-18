import type { GymSlug } from "@/lib/types/gym"

export type TeamGroupSlug = GymSlug | "core"

export interface TeamMember {
	photo: string
	name: string
	role: string
	groupSlug: TeamGroupSlug
	bio: string
	email?: string
	displayOrder: number
}
