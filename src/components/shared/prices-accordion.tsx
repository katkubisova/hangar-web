import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import type { PriceCategory } from "@/lib/types/gym"

interface PricesAccordionProps {
	categories: PriceCategory[]
}

export function PricesAccordion({ categories }: PricesAccordionProps) {
	return (
		<Accordion multiple>
			{categories.map(category => (
				<AccordionItem key={category.category} value={category.category}>
					<AccordionTrigger>{category.category}</AccordionTrigger>
					<AccordionContent>
						<ul className="space-y-2">
							{category.items.map(item => (
								<li
									key={item.name}
									className="flex items-baseline justify-between gap-4"
								>
									<span>
										{item.name}
										{item.note && (
											<span className="ml-2 text-xs text-muted-foreground">
												{item.note}
											</span>
										)}
									</span>
									<span className="font-medium tabular-nums">{item.price}</span>
								</li>
							))}
						</ul>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
