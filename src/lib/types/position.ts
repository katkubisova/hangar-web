import type { GymSlug } from "@/lib/types/gym"
import type { Localized, Resolved } from "@/lib/types/localized"

export type EmploymentType = "full-time" | "part-time" | "contract"

export type PositionStatus = "open" | "closed"

export interface ContactPerson {
	name: string
	role: Localized<string>
	phone?: string
	email: string
}

export interface PositionData {
	title: Localized<string>
	// Shared by both languages, so the language switch keeps the same job.
	slug: string
	locationSlugs: GymSlug[]
	employmentType: EmploymentType
	// Intro paragraphs, then optional bullet lists.
	description: Localized<string[]>
	responsibilities?: Localized<string[]>
	requirements?: Localized<string[]>
	offer?: Localized<string[]>
	contactPerson: ContactPerson
	applicationRecipientEmail: string
	status: PositionStatus
	displayOrder: number
}

export type Position = Resolved<PositionData>
