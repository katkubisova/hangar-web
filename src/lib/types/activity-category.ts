import type { Localized, Resolved } from "@/lib/types/localized"

export interface ActivityCategoryData {
	icon: string
	name: Localized<string>
	description: Localized<string>
	displayOrder: number
	/** Path within a gym's activity booking system, shared by all gyms. */
	bookingPath?: string
}

export type ActivityCategory = Resolved<ActivityCategoryData>
