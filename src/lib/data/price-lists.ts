import type {
	PriceCategory,
	PriceLabel,
	PriceTable,
} from "@/lib/types/price-list"
import { formatPrice } from "@/lib/utils"

// Real price lists, verified against the live sites on 15 Oct 2026:
// - Brno: https://hangarbrno.cz/cenik/ (Czech) and /en/prices/ (English)
// - Ostrava: https://hangarostrava.cz/cenik/ (Czech only; English translated)
// Both branches share one structure and wording so they're easy to compare.
// Where they differ (prices, emails, accepted cards), the difference is
// real; don't harmonise it. Numbers are shared by both languages, so only
// the words are localized.

const PASS_COLUMNS: PriceLabel[] = [
	{ cs: "Kategorie", en: "Category" },
	{ cs: "Dopoledne 10", en: "Morning 10" },
	{ cs: "Dopoledne 20", en: "Morning 20" },
	{ cs: "Celý den 10", en: "All day 10" },
	{ cs: "Celý den 20", en: "All day 20" },
]

const ONE_MONTH = { cs: "1 měsíc", en: "1 month" }
const THREE_MONTHS = { cs: "3 měsíce", en: "3 months" }
const SIX_MONTHS = { cs: "6 měsíců", en: "6 months" }
const TWELVE_MONTHS = { cs: "12 měsíců", en: "12 months" }

const MEMBERSHIP_COLUMNS: PriceLabel[] = [
	{ cs: "Kategorie", en: "Category" },
	ONE_MONTH,
	THREE_MONTHS,
	SIX_MONTHS,
	TWELVE_MONTHS,
]

// Identical on both branches' source pages.
const MEMBERSHIP_INCLUDED_TABLE: PriceTable = {
	columns: [
		{ cs: "Členství", en: "Plan" },
		{
			cs: [{ text: "Sleva na vstup", marker: "*" }],
			en: [{ text: "Entry discount", marker: "*" }],
		},
		{ cs: "Sleva na baru", en: "Bar discount" },
		{
			cs: [{ text: "Členské lekce", marker: "**" }],
			en: [{ text: "Member classes", marker: "**" }],
		},
		{
			cs: [{ text: "Přerušení", marker: "***" }],
			en: [{ text: "Pause", marker: "***" }],
		},
	],
	rows: [
		{ label: ONE_MONTH, cells: ["15 %", null, null, null] },
		{ label: THREE_MONTHS, cells: ["20 %", "10 %", "1", ONE_MONTH] },
		{ label: SIX_MONTHS, cells: ["25 %", "12 %", "2", ONE_MONTH] },
		{ label: TWELVE_MONTHS, cells: ["30 %", "15 %", "4", ONE_MONTH] },
	],
}

const RENTAL_COLUMNS: PriceLabel[] = [
	{ cs: "Položka", en: "Item" },
	{ cs: "Dospělý", en: "Adult" },
	{ cs: "Dítě", en: "Child" },
]

const ADULT = { cs: "Dospělý", en: "Adult" }
const STUDENT = { cs: "Student", en: "Student" }
const PARENT = { cs: "Rodič", en: "Parent" }
// Both Czech source pages include ZTP in the passes' reduced row.
const PASS_REDUCED = {
	cs: "Dítě / Senior / ZTP",
	en: "Child / Senior / Disabled (ZTP)",
}

const SINGLE_ENTRY_ROWS_LABELS = {
	student: {
		cs: [{ text: "Student", marker: "1" }],
		en: [{ text: "Student", marker: "1" }],
	},
	childSenior: {
		cs: [
			{ text: "Dítě", marker: "2" },
			{ text: " / Senior", marker: "3" },
		],
		en: [
			{ text: "Child", marker: "2" },
			{ text: " / Senior", marker: "3" },
		],
	},
	ztp: { cs: "ZTP", en: "Disabled (ZTP)" },
	family: {
		cs: [{ text: "Rodinné vstupné", marker: "4" }],
		en: [{ text: "Family", marker: "4" }],
	},
	accompanying: { cs: "Doprovod", en: "Accompanying adult" },
}

function studentFootnote(consentEmail: string) {
	return {
		marker: "1",
		text: {
			cs: `Student: 13–26 let. Nutná registrace a vlastní zákaznický účet. Studenti SŠ a VŠ se prokazují platným průkazem ISIC nebo potvrzením o studiu. Studenti ve věku 13–18 let, kteří přijdou bez zákonného zástupce nebo osoby starší 18 let, jež za ně přebírá odpovědnost, musí donést nebo poslat na ${consentEmail} podepsaný souhlas zákonného zástupce (neúplný nebo nepodepsaný formulář nepřijímáme).`,
			en: `Student: ages 13–26. Registration and a separate customer account required. High-school and university students show a valid ISIC card or certificate of study. Ages 13–18 visiting without a legal guardian or a responsible person over 18 must bring, or email to ${consentEmail}, a signed parental consent form (incomplete or unsigned forms are not accepted).`,
		},
	}
}

function childFootnote(accompanyingFee: number) {
	const fee = formatPrice(accompanyingFee)
	return {
		marker: "2",
		text: {
			cs: `Dítě: 0–12 let, v prostoru stěny jen pod dohledem zákonného zástupce nebo osoby starší 18 let, která za dítě přebírá odpovědnost. Max. 3 děti na 1 dospělého v dětských prostorech (dětský pohybový park, dětské tréninkové zóny), max. 2 na hlavní lezecké stěně. Děti 0–1 rok zdarma. Do 6 let zdarma s platící dospělou osobou; každé další dítě platí dětské vstupné. Při platbě pouze dětského vstupného se platí poplatek za doprovod (${fee}).`,
			en: `Child: ages 0–12, in the wall area only under the supervision of a legal guardian or a person over 18 who takes responsibility. Max 3 children per supervising adult in children's areas (movement park, kids' training zones), max 2 on the main climbing wall. Ages 0–1 free. Up to 6 free with a paying adult; each additional child pays the child fee. If only the child fee is paid, the accompanying fee (${fee}) applies.`,
		},
	}
}

const SENIOR_FOOTNOTE = {
	marker: "3",
	text: {
		cs: "Senior: aktivní senioři nad 65 let.",
		en: "Senior: active seniors over 65.",
	},
}
const FAMILY_FOOTNOTE = {
	marker: "4",
	text: {
		cs: "Rodinné vstupné: 2 dospělí + 2 děti.",
		en: "Family: 2 adults + 2 children.",
	},
}
const ZTP_NOTE = {
	cs: "ZTP: doprovod má vstup zdarma.",
	en: "Disabled (ZTP): the accompanying person enters free.",
}
const BAREFOOT_NOTE = {
	cs: "Na boso se lézt nesmí: lez v lezečkách (vlastních nebo půjčených) nebo v čisté obuvi.",
	en: "Barefoot climbing is not allowed: climb in climbing shoes (your own or rented) or clean shoes.",
}

function membershipFootnotes(pauseEmail: string) {
	return [
		{
			marker: "*",
			text: {
				cs: "Výpočet při odhadované návštěvě 2× týdně.",
				en: "Based on approx. 2 visits per week.",
			},
		},
		{
			marker: "**",
			text: {
				cs: "Členská lekce je lekce s instruktorem zdarma pro členy. Info o lekcích přijde e-mailem v blízkých dnech po zakoupení, termíny s dostatečným předstihem.",
				en: "Free instructor-led class for members. Class info is emailed in the days after purchase, with dates sent well in advance.",
			},
		},
		{
			marker: "***",
			text: {
				cs: `Přerušení jednou, na jeden souvislý měsíc, bez udání důvodu. Žádosti posílej na ${pauseEmail}.`,
				en: `Pause once, for one continuous month, without giving a reason. Email requests to ${pauseEmail}.`,
			},
		},
	]
}

const MEMBERSHIP_NOTES = [
	{
		cs: "Neomezené vstupy po celý den u všech členství.",
		en: "Unlimited entries all day on every plan.",
	},
	{
		cs: "Členství Dospělý: 1 dítě do 6 let zdarma. Členství Rodič: 1 dítě do 12 let a druhé do 6 let zdarma.",
		en: "Adult membership: 1 child up to 6 free. Parent membership: 1 child up to 12 and a second up to 6 free.",
	},
	{
		cs: "Platba: přijímáme FKSP, Benefit Plus a Múza Pay.",
		en: "Payment: FKSP, Benefit Plus and Múza Pay accepted.",
	},
]

function multisportNote(supplement: number) {
	const fee = formatPrice(supplement)
	return {
		cs: `Přijímáme kartu Multisport (Stříbrná, Dítě, FKSP). Při návštěvě delší než 1 hodina doplatek ${fee} (jen u dospělého vstupného).`,
		en: `Multisport cards accepted (Silver, Child, FKSP). ${fee} supplement for visits over 1 hour (adult entry only).`,
	}
}

const EXACT_AMOUNT_RULE = {
	cs: "Při platbě objednávkou dobij přesnou částku: bar nemůže vracet přebytek ani přijímat doplatky v hotovosti či kartou.",
	en: "When paying by order, top up the exact amount: the bar can't return change or take the difference in cash or by card.",
}

function singleEntryPaymentNote(cards: { cs: string; en: string }) {
	return {
		cs: `Platba: ${cards.cs} lze použít na jednotlivé vstupy, doplatek k Multisportu, permanentky, členství a půjčovné lezeček. ${EXACT_AMOUNT_RULE.cs}`,
		en: `Payment: ${cards.en} accepted for single entries, the Multisport supplement, passes, memberships and shoe rental. ${EXACT_AMOUNT_RULE.en}`,
	}
}

function groupsNote(email: string) {
	return {
		cs: `Skupiny nad 10 osob: ohlaste návštěvu alespoň 7 dní předem na ${email} (platí i pro školy a teambuildingy). Neohlášená skupina nemusí být při velkém vytížení vpuštěna do lezeckých prostor.`,
		en: `Groups over 10: announce your visit at least 7 days ahead at ${email} (schools and team-building too). Unannounced groups may be refused entry to the climbing areas at high capacity.`,
	}
}

const PASS_PAYMENT_NOTE = {
	cs: "Platba: přijímáme FKSP, Benefit Plus a Múza Pay.",
	en: "Payment: FKSP, Benefit Plus and Múza Pay accepted.",
}

const SINGLE_ENTRY = { cs: "Jednorázové vstupné", en: "Single entry" }
const PASSES = {
	cs: "Permanentky (10 / 20 vstupů)",
	en: "Passes (10 / 20 entries)",
}
const MEMBERSHIP = { cs: "Členství", en: "Membership" }
const RENTAL = { cs: "Půjčovna", en: "Rental" }
const CLIMBING_SHOES = { cs: "Lezečky", en: "Climbing shoes" }

export const brnoPrices: PriceCategory[] = [
	{
		category: SINGLE_ENTRY,
		tables: [
			{
				columns: [
					{ cs: "Kategorie", en: "Category" },
					{ cs: "Všední dny 8:00–15:00", en: "Weekdays 8:00–15:00" },
					{
						cs: "Všední dny 15:00–22:00, víkendy a svátky",
						en: "Weekdays 15:00–22:00, weekends & holidays",
					},
				],
				rows: [
					{ label: ADULT, cells: [215, 265] },
					{ label: SINGLE_ENTRY_ROWS_LABELS.student, cells: [175, 210] },
					{ label: SINGLE_ENTRY_ROWS_LABELS.childSenior, cells: [130, 130] },
					{ label: SINGLE_ENTRY_ROWS_LABELS.ztp, cells: [130, 130] },
					{ label: SINGLE_ENTRY_ROWS_LABELS.family, cells: [625, 705] },
					{ label: SINGLE_ENTRY_ROWS_LABELS.accompanying, cells: [110, 110] },
				],
			},
		],
		footnotes: [
			studentFootnote("hangarbrno@gmail.com"),
			childFootnote(110),
			SENIOR_FOOTNOTE,
			FAMILY_FOOTNOTE,
		],
		notes: [
			ZTP_NOTE,
			multisportNote(110),
			singleEntryPaymentNote({
				cs: "Benefit Plus a Múza Pay",
				en: "Benefit Plus and Múza Pay",
			}),
			groupsNote("lucie@hangarbrno.cz"),
		],
	},
	{
		category: PASSES,
		tables: [
			{
				columns: PASS_COLUMNS,
				rows: [
					{ label: ADULT, cells: [1940, 3590, 2400, 4440] },
					{ label: STUDENT, cells: [1570, 2950, 1890, 3550] },
					{ label: PASS_REDUCED, cells: [null, null, 1210, 2110] },
				],
			},
		],
		notes: [
			{
				cs: "Platnost 1 rok, vstupy jsou přenosné.",
				en: "Valid 1 year, entries transferable.",
			},
			PASS_PAYMENT_NOTE,
		],
	},
	{
		category: MEMBERSHIP,
		tables: [
			{
				columns: MEMBERSHIP_COLUMNS,
				rows: [
					{ label: ADULT, cells: [1950, 5510, 10340, 19290] },
					// The Czech page shows 15 920 Kč for Student / 12 months, the
					// English page 15 290 Kč. Kept at 15 290 pending the client's
					// confirmation — flagged in the Phase 1 PR.
					{ label: STUDENT, cells: [1550, 4370, 8190, 15290] },
					{ label: PARENT, cells: [2740, 7700, 14380, 26700] },
				],
			},
			MEMBERSHIP_INCLUDED_TABLE,
		],
		footnotes: membershipFootnotes("info@hangarbrno.cz"),
		notes: MEMBERSHIP_NOTES,
	},
	{
		category: RENTAL,
		tables: [
			{
				columns: RENTAL_COLUMNS,
				rows: [{ label: CLIMBING_SHOES, cells: [80, 40] }],
			},
		],
		notes: [BAREFOOT_NOTE],
	},
]

export const ostravaPrices: PriceCategory[] = [
	{
		category: SINGLE_ENTRY,
		tables: [
			{
				columns: [
					{ cs: "Kategorie", en: "Category" },
					{ cs: "Všední dny do 15:00", en: "Weekdays before 15:00" },
					{
						cs: "Všední dny od 15:00, víkendy a svátky",
						en: "Weekdays after 15:00, weekends & holidays",
					},
				],
				rows: [
					{ label: ADULT, cells: [210, 260] },
					{ label: SINGLE_ENTRY_ROWS_LABELS.student, cells: [170, 205] },
					{ label: SINGLE_ENTRY_ROWS_LABELS.childSenior, cells: [125, 125] },
					{ label: SINGLE_ENTRY_ROWS_LABELS.ztp, cells: [125, 125] },
					{ label: SINGLE_ENTRY_ROWS_LABELS.family, cells: [610, 690] },
					{ label: SINGLE_ENTRY_ROWS_LABELS.accompanying, cells: [105, 105] },
				],
			},
		],
		footnotes: [
			studentFootnote("hangarostrava@gmail.com"),
			childFootnote(105),
			SENIOR_FOOTNOTE,
			FAMILY_FOOTNOTE,
		],
		notes: [
			ZTP_NOTE,
			multisportNote(110),
			singleEntryPaymentNote({ cs: "Benefit Plus", en: "Benefit Plus" }),
			groupsNote("honza@hangarostrava.cz"),
		],
	},
	{
		category: PASSES,
		tables: [
			{
				columns: PASS_COLUMNS,
				rows: [
					{ label: ADULT, cells: [1900, 3520, 2350, 4350] },
					{ label: STUDENT, cells: [1540, 2890, 1850, 3480] },
					{ label: PASS_REDUCED, cells: [null, null, 1180, 2060] },
				],
			},
		],
		notes: [
			{
				cs: "Platnost 1 rok od zakoupení, vstupy jsou přenosné.",
				en: "Valid 1 year from purchase, entries transferable.",
			},
			PASS_PAYMENT_NOTE,
		],
	},
	{
		category: MEMBERSHIP,
		tables: [
			{
				columns: MEMBERSHIP_COLUMNS,
				rows: [
					{ label: ADULT, cells: [1920, 5410, 10140, 18930] },
					{ label: STUDENT, cells: [1510, 4260, 8000, 14920] },
					{ label: PARENT, cells: [2670, 7510, 14010, 26030] },
				],
			},
			MEMBERSHIP_INCLUDED_TABLE,
		],
		footnotes: membershipFootnotes("info@hangarostrava.cz"),
		notes: MEMBERSHIP_NOTES,
	},
	{
		category: RENTAL,
		tables: [
			{
				columns: RENTAL_COLUMNS,
				rows: [{ label: CLIMBING_SHOES, cells: [80, 40] }],
			},
		],
		notes: [BAREFOOT_NOTE],
	},
]
