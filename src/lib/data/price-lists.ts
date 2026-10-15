import type {
	PriceCategory,
	PriceLabel,
	PriceTable,
} from "@/lib/types/price-list"
import { formatPrice } from "@/lib/utils"

// Real price lists, verified against the live sites on 15 Oct 2026:
// - Brno: https://hangarbrno.cz/en/prices/ (cross-checked with /cenik/)
// - Ostrava: https://hangarostrava.cz/cenik/ (Czech, translated)
// Both branches share one structure and wording so they're easy to compare.
// Where they differ (prices, emails, accepted cards, parental consent), the
// difference is real; don't harmonise it.

const PASS_COLUMNS: PriceLabel[] = [
	"Category",
	"Morning 10",
	"Morning 20",
	"All day 10",
	"All day 20",
]

const MEMBERSHIP_COLUMNS: PriceLabel[] = [
	"Category",
	"1 month",
	"3 months",
	"6 months",
	"12 months",
]

// Identical on both branches' source pages.
const MEMBERSHIP_INCLUDED_TABLE: PriceTable = {
	columns: [
		"Plan",
		[{ text: "Entry discount", marker: "*" }],
		"Bar discount",
		[{ text: "Member classes", marker: "**" }],
		[{ text: "Pause", marker: "***" }],
	],
	rows: [
		{ label: "1 month", cells: ["15 %", null, null, null] },
		{ label: "3 months", cells: ["20 %", "10 %", "1", "1 month"] },
		{ label: "6 months", cells: ["25 %", "12 %", "2", "1 month"] },
		{ label: "12 months", cells: ["30 %", "15 %", "4", "1 month"] },
	],
}

const RENTAL_COLUMNS: PriceLabel[] = ["Item", "Adult", "Child"]

const SENIOR_FOOTNOTE = { marker: "3", text: "Senior: active seniors over 65." }
const FAMILY_FOOTNOTE = { marker: "4", text: "Family: 2 adults + 2 children." }
const ZTP_NOTE = "Disabled (ZTP): the accompanying person enters free."
const BAREFOOT_NOTE =
	"Barefoot climbing is not allowed: climb in climbing shoes (your own or rented) or clean shoes."

function childFootnote(accompanyingFee: string) {
	return {
		marker: "2",
		text: `Child: ages 0–12, in the wall area only under the supervision of a legal guardian or a person over 18 who takes responsibility. Max 3 children per supervising adult in children's areas (movement park, kids' training zones), max 2 on the main climbing wall. Ages 0–1 free. Up to 6 free with a paying adult; each additional child pays the child fee. If only the child fee is paid, the accompanying fee (${accompanyingFee}) applies.`,
	}
}

function membershipFootnotes(pauseEmail: string) {
	return [
		{ marker: "*", text: "Based on approx. 2 visits per week." },
		{
			marker: "**",
			text: "Free instructor-led class for members. Class info is emailed in the days after purchase, with dates sent well in advance.",
		},
		{
			marker: "***",
			text: `Pause once, for one continuous month, without giving a reason. Email requests to ${pauseEmail}.`,
		},
	]
}

const MEMBERSHIP_NOTES = [
	"Unlimited entries all day on every plan.",
	"Adult membership: 1 child up to 6 free. Parent membership: 1 child up to 12 and a second up to 6 free.",
	"Payment: FKSP, Benefit Plus and Múza Pay accepted.",
]

function groupsNote(email: string) {
	return `Groups over 10: announce your visit at least 7 days ahead at ${email} (schools and team-building too). Unannounced groups may be refused entry to the climbing areas at high capacity.`
}

const EXACT_AMOUNT_RULE =
	"When paying by order, top up the exact amount: the bar can't return change or take the difference in cash or by card."

export const brnoPrices: PriceCategory[] = [
	{
		category: "Single entry",
		tables: [
			{
				columns: [
					"Category",
					"Weekdays 8:00–15:00",
					"Weekdays 15:00–22:00, weekends & holidays",
				],
				rows: [
					{ label: "Adult", cells: [215, 265] },
					{ label: [{ text: "Student", marker: "1" }], cells: [175, 210] },
					{
						label: [
							{ text: "Child", marker: "2" },
							{ text: " / Senior", marker: "3" },
						],
						cells: [130, 130],
					},
					{ label: "Disabled (ZTP)", cells: [130, 130] },
					{ label: [{ text: "Family", marker: "4" }], cells: [625, 705] },
					{ label: "Accompanying adult", cells: [110, 110] },
				],
			},
		],
		footnotes: [
			{
				marker: "1",
				text: "Student: ages 13–26. Registration and a separate customer account required. High-school and university students show a valid ISIC card or certificate of study. Ages 13–18 visiting without a legal guardian or a responsible person over 18 must bring, or email to hangarbrno@gmail.com, a signed parental consent form (incomplete or unsigned forms are not accepted).",
			},
			childFootnote(formatPrice(110)),
			SENIOR_FOOTNOTE,
			FAMILY_FOOTNOTE,
		],
		notes: [
			ZTP_NOTE,
			`Multisport card accepted. ${formatPrice(110)} supplement for visits over 1 hour (adult entry only).`,
			`Payment: Benefit Plus and Múza Pay accepted for single entries, the Multisport supplement, passes, memberships and shoe rental. ${EXACT_AMOUNT_RULE}`,
			groupsNote("lucie@hangarbrno.cz"),
		],
	},
	{
		category: "Passes (10 / 20 entries)",
		tables: [
			{
				columns: PASS_COLUMNS,
				rows: [
					{ label: "Adult", cells: [1940, 3590, 2400, 4440] },
					{ label: "Student", cells: [1570, 2950, 1890, 3550] },
					{ label: "Child / Senior", cells: [null, null, 1210, 2110] },
				],
			},
		],
		notes: [
			"Valid 1 year, entries transferable.",
			"Payment: FKSP, Benefit Plus and Múza Pay accepted.",
		],
	},
	{
		category: "Membership",
		tables: [
			{
				columns: MEMBERSHIP_COLUMNS,
				rows: [
					{ label: "Adult", cells: [1950, 5510, 10340, 19290] },
					{ label: "Student", cells: [1550, 4370, 8190, 15290] },
					{ label: "Parent", cells: [2740, 7700, 14380, 26700] },
				],
			},
			MEMBERSHIP_INCLUDED_TABLE,
		],
		footnotes: membershipFootnotes("info@hangarbrno.cz"),
		notes: MEMBERSHIP_NOTES,
	},
	{
		category: "Rental",
		tables: [
			{
				columns: RENTAL_COLUMNS,
				rows: [{ label: "Climbing shoes", cells: [80, 40] }],
			},
		],
		notes: [BAREFOOT_NOTE],
	},
]

export const ostravaPrices: PriceCategory[] = [
	{
		category: "Single entry",
		tables: [
			{
				columns: [
					"Category",
					"Weekdays before 15:00",
					"Weekdays after 15:00, weekends & holidays",
				],
				rows: [
					{ label: "Adult", cells: [210, 260] },
					{ label: [{ text: "Student", marker: "1" }], cells: [170, 205] },
					{
						label: [
							{ text: "Child", marker: "2" },
							{ text: " / Senior", marker: "3" },
						],
						cells: [125, 125],
					},
					{ label: "Disabled (ZTP)", cells: [125, 125] },
					{ label: [{ text: "Family", marker: "4" }], cells: [610, 690] },
					{ label: "Accompanying adult", cells: [105, 105] },
				],
			},
		],
		footnotes: [
			{
				marker: "1",
				text: "Student: ages 13–26. Registration and a separate customer account required. High-school and university students show a valid ISIC card or certificate of study.",
			},
			childFootnote(formatPrice(105)),
			SENIOR_FOOTNOTE,
			FAMILY_FOOTNOTE,
		],
		notes: [
			ZTP_NOTE,
			`Multisport cards accepted (Silver, Child, FKSP). ${formatPrice(110)} supplement for visits over 1 hour (adult entry only).`,
			`Payment: Benefit Plus accepted for single entries, the Multisport supplement, passes, memberships and shoe rental. ${EXACT_AMOUNT_RULE}`,
			groupsNote("honza@hangarostrava.cz"),
		],
	},
	{
		category: "Passes (10 / 20 entries)",
		tables: [
			{
				columns: PASS_COLUMNS,
				rows: [
					{ label: "Adult", cells: [1900, 3520, 2350, 4350] },
					{ label: "Student", cells: [1540, 2890, 1850, 3480] },
					{
						label: "Child / Senior / Disabled (ZTP)",
						cells: [null, null, 1180, 2060],
					},
				],
			},
		],
		notes: [
			"Valid 1 year from purchase, entries transferable.",
			"Payment: FKSP, Benefit Plus and Múza Pay accepted.",
		],
	},
	{
		category: "Membership",
		tables: [
			{
				columns: MEMBERSHIP_COLUMNS,
				rows: [
					{ label: "Adult", cells: [1920, 5410, 10140, 18930] },
					{ label: "Student", cells: [1510, 4260, 8000, 14920] },
					{ label: "Parent", cells: [2670, 7510, 14010, 26030] },
				],
			},
			MEMBERSHIP_INCLUDED_TABLE,
		],
		footnotes: membershipFootnotes("info@hangarostrava.cz"),
		notes: MEMBERSHIP_NOTES,
	},
	{
		category: "Rental",
		tables: [
			{
				columns: RENTAL_COLUMNS,
				rows: [{ label: "Climbing shoes", cells: [80, 40] }],
			},
		],
		notes: [BAREFOOT_NOTE],
	},
]
