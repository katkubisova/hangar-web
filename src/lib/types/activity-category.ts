import type { StaticPathname } from "@/i18n/routing"
import type { Localized, Resolved } from "@/lib/types/localized"

export interface ActivityCategoryData {
	icon: string
	name: Localized<string>
	description: Localized<string>
	displayOrder: number
	/** Path within a gym's activity booking system, shared by all gyms. */
	bookingPath?: string
	/** An internal page to link to instead of the per-gym booking buttons. */
	link?: {
		href: StaticPathname
		label: Localized<string>
	}
}

export type ActivityCategory = Resolved<ActivityCategoryData>
