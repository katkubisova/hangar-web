import { FaqAccordion } from "@/components/shared/faq-accordion"
import { Section } from "@/components/shared/section"
import type { FaqItem } from "@/lib/types/faq-item"

interface FaqSectionProps {
	title: string
	items: FaqItem[]
	tone?: "default" | "muted"
}

// FAQ block: title on the left, questions on the right.
export function FaqSection({ title, items, tone = "muted" }: FaqSectionProps) {
	return (
		<Section tone={tone}>
			<div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
				<h2 className="text-h2 font-bold lg:col-span-4">{title}</h2>
				<div className="lg:col-span-8">
					<FaqAccordion items={items} />
				</div>
			</div>
		</Section>
	)
}
