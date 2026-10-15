import type { Localized, Resolved } from "@/lib/types/localized"

export interface BenefitCardData {
	icon: string
	title: Localized<string>
	text: Localized<string>
	displayOrder: number
}

export type BenefitCard = Resolved<BenefitCardData>
