import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import type { Resolved } from "@/lib/types/localized"
import type {
	PriceCategory,
	PriceCell,
	PriceLabel,
	PriceTable,
} from "@/lib/types/price-list"
import { formatPrice } from "@/lib/utils"

interface PricesAccordionProps {
	categories: Resolved<PriceCategory>[]
}

export function PricesAccordion({ categories }: PricesAccordionProps) {
	return (
		<Accordion multiple>
			{categories.map(category => (
				<AccordionItem key={category.category} value={category.category}>
					<AccordionTrigger>{category.category}</AccordionTrigger>
					<AccordionContent>
						<div className="space-y-4">
							{category.tables.map((table, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: tables are static and never reorder
								<PriceTableView key={index} table={table} />
							))}
							{category.footnotes && category.footnotes.length > 0 && (
								<ul className="space-y-1 text-xs text-muted-foreground">
									{category.footnotes.map(footnote => (
										<li key={footnote.marker}>
											<sup>{footnote.marker}</sup> {footnote.text}
										</li>
									))}
								</ul>
							)}
							{category.notes && category.notes.length > 0 && (
								<ul className="list-disc space-y-1 pl-5">
									{category.notes.map(note => (
										<li key={note}>{note}</li>
									))}
								</ul>
							)}
						</div>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}

// Wide tables scroll horizontally inside their own container on small
// screens (never the page), with the label column pinned to the left.
function PriceTableView({ table }: { table: Resolved<PriceTable> }) {
	const [labelColumn, ...valueColumns] = table.columns

	return (
		<div className="overflow-x-auto border border-foreground bg-background">
			<table className="w-full text-sm">
				<thead>
					<tr className="text-left text-muted-foreground *:border-b *:border-border">
						<th className="sticky left-0 z-10 bg-background p-2 font-medium">
							<Label label={labelColumn} />
						</th>
						{valueColumns.map((column, index) => (
							<th
								// biome-ignore lint/suspicious/noArrayIndexKey: columns are static and never reorder
								key={index}
								className="min-w-24 p-2 text-right align-bottom font-medium"
							>
								<Label label={column} />
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{table.rows.map((row, rowIndex) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: rows are static and never reorder
						<tr key={rowIndex} className="not-last:*:border-b *:border-border">
							<th
								scope="row"
								className="sticky left-0 z-10 min-w-24 bg-background p-2 text-left font-normal"
							>
								<Label label={row.label} />
							</th>
							{row.cells.map((cell, cellIndex) => (
								<td
									// biome-ignore lint/suspicious/noArrayIndexKey: cells are static and never reorder
									key={cellIndex}
									className="p-2 text-right font-medium whitespace-nowrap tabular-nums"
								>
									{formatCell(cell)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

function Label({ label }: { label: Resolved<PriceLabel> }) {
	if (typeof label === "string") {
		return label
	}

	return label.map(part => (
		<span key={part.text}>
			{part.text}
			{part.marker && <sup>{part.marker}</sup>}
		</span>
	))
}

function formatCell(cell: Resolved<PriceCell>) {
	if (cell === null) {
		return "–"
	}

	return typeof cell === "number" ? formatPrice(cell) : cell
}
