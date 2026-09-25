import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import type { FaqItem } from "@/lib/types/faq-item"

interface FaqAccordionProps {
	items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
	const sortedItems = [...items].sort((a, b) => a.displayOrder - b.displayOrder)

	return (
		<Accordion multiple={false}>
			{sortedItems.map(item => (
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
