import type { Localized, Resolved } from "@/lib/types/localized"

export interface FaqItemData {
	question: Localized<string>
	answer: Localized<string>
	displayOrder: number
}

export type FaqItem = Resolved<FaqItemData>
