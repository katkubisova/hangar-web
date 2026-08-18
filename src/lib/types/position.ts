import type { GymSlug } from "@/lib/types/gym"

export type EmploymentType = "full-time" | "part-time" | "contract"

export type PositionStatus = "open" | "closed"

export interface ContactPerson {
	name: string
	role: string
	phone: string
	email: string
}

export interface Position {
	title: string
	slug: string
	locationSlugs: GymSlug[]
	employmentType: EmploymentType
	description: string
	contactPerson: ContactPerson
	applicationRecipientEmail: string
	status: PositionStatus
	displayOrder: number
}
