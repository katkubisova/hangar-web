import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import type { FaqItem } from "@/lib/types/faq-item"
import type { GymSlug } from "@/lib/types/gym"

interface FaqAccordionProps {
	items: FaqItem[]
	gymSlug: GymSlug
}

export function FaqAccordion({ items, gymSlug }: FaqAccordionProps) {
	const visibleItems = items
		.filter(item => item.gymSlug === "all" || item.gymSlug === gymSlug)
		.sort((a, b) => a.displayOrder - b.displayOrder)

	return (
		<Accordion multiple={false}>
			{visibleItems.map(item => (
				<AccordionItem key={item.question} value={item.question}>
					<AccordionTrigger>{item.question}</AccordionTrigger>
					<AccordionContent>
						<p>{item.answer}</p>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
