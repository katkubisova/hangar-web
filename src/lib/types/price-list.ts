import type { Localized } from "@/lib/types/localized"

// A footnote marker as shown on the source price list, e.g. "1" or "**".
// Rendered as superscript next to the text it belongs to.
export type FootnoteMarker = string

export interface PriceLabelPart {
	text: string
	marker?: FootnoteMarker
}

// A plain string, or parts when the label carries footnote markers —
// e.g. "Child² / Senior³" is two parts, each with its own marker.
export type PriceLabel = Localized<string> | Localized<PriceLabelPart[]>

// A number is a price in CZK (formatted as "1 940 Kč"), a string is shown
// as-is (e.g. "15 %"; localized when it holds words, e.g. "1 month"), and
// null means "not offered" (rendered as "–").
export type PriceCell = number | string | Localized<string> | null

export interface PriceRow {
	label: PriceLabel
	cells: PriceCell[]
}

export interface PriceTable {
	// The first column is the row-label column; the rest line up with
	// each row's cells.
	columns: PriceLabel[]
	rows: PriceRow[]
}

export interface PriceFootnote {
	marker: FootnoteMarker
	text: Localized<string>
}

export interface PriceCategory {
	category: Localized<string>
	tables: PriceTable[]
	footnotes?: PriceFootnote[]
	notes?: Localized<string>[]
}
