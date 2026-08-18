import type { GymSlug } from "@/lib/types/gym"

export interface FaqItem {
	question: string
	answer: string
	gymSlug: GymSlug | "all"
	displayOrder: number
}
