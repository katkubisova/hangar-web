import type { BenefitCardData } from "@/lib/types/benefit-card"

// From the Ostrava job ads (hangarostrava.cz/volna-mista/): bar staff and
// cleaning crew.
export const benefitCards: BenefitCardData[] = [
	{
		icon: "building",
		title: { cs: "Lezení zdarma", en: "Free climbing" },
		text: {
			cs: "Užij si naše zázemí naplno. K tomu slevy na outdoorové vybavení.",
			en: "Make the most of our facilities, plus discounts on outdoor gear.",
		},
		displayOrder: 1,
	},
	{
		icon: "clock",
		title: { cs: "Flexibilní směny", en: "Flexible shifts" },
		text: {
			cs: "Směny si skládáš podle svých možností, ať studuješ, trénuješ, nebo děláš něco dalšího.",
			en: "Shifts that fit around you, whether you study, train or do something else.",
		},
		displayOrder: 2,
	},
	{
		icon: "users",
		title: { cs: "Parta, která drží spolu", en: "A crew that sticks together" },
		text: {
			cs: "Mladý, otevřený kolektiv a teambuildingy na stěně i mimo ni.",
			en: "A young, open team and team-building events on the wall and beyond.",
		},
		displayOrder: 3,
	},
	{
		icon: "trending-up",
		title: { cs: "Férová odměna", en: "Fair pay" },
		text: {
			cs: "Férové finanční ohodnocení a možnost profesního růstu i dlouhodobé spolupráce.",
			en: "Fair pay and room to grow, with long-term opportunities.",
		},
		displayOrder: 4,
	},
]
