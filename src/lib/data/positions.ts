import type { ContactPerson, PositionData } from "@/lib/types/position"

// Open positions from hangarostrava.cz/volna-mista/ (job ad PDFs), 15 Oct
// 2026. Brno has no openings ("Momentálně máme plno").

const OSTRAVA_HIRING_CONTACT: ContactPerson = {
	name: "Vjerka Podlešáková",
	role: { cs: "Zástupkyně provozního", en: "Deputy operations manager" },
	email: "vjerka@hangarostrava.cz",
}

export const positions: PositionData[] = [
	{
		title: { cs: "Brigádník/ce na bar", en: "Bar staff (part-time)" },
		slug: "bar-ostrava",
		locationSlugs: ["ostrava"],
		employmentType: "part-time",
		description: {
			cs: [
				"Chceš si přivydělat v akčním prostředí a stát se součástí lezecké komunity? Baví tě práce s lidmi, máš rád/a šrumec a rychle se zorientuješ? Do cafe baru na ostravském Hangaru hledáme šikovného člověka, který se postará o zákazníky a pomůže udržet hladký chod podniku.",
			],
			en: [
				"Want to earn some money in a lively place and join a climbing community? Enjoy working with people, like a bit of buzz and pick things up fast? We're looking for someone to run the cafe bar at Hangar Ostrava with us, look after customers and keep things running smoothly.",
			],
		},
		responsibilities: {
			cs: [
				"Práce za barem: odbavení návštěvníků, příprava kávy, čepování piva a příprava bistro jídel.",
				"Spolupráce s týmem na hladkém chodu baru i celé lezecké stěny.",
			],
			en: [
				"Working the bar: checking in visitors, making coffee, pouring beer and preparing bistro food.",
				"Working with the team to keep the bar and the whole gym running smoothly.",
			],
		},
		requirements: {
			cs: [
				"Časová flexibilita a zodpovědný přístup.",
				"Věk alespoň 18 let.",
				"Chuť učit se novým věcem.",
				"Zkušenosti z gastra, s obsluhou a komunikací se zákazníky.",
			],
			en: [
				"Flexible availability and a responsible attitude.",
				"Aged 18 or over.",
				"Eagerness to learn new things.",
				"Hospitality experience, serving and talking to customers.",
			],
		},
		offer: {
			cs: [
				"Férové finanční ohodnocení.",
				"Možnost profesního růstu a dlouhodobé spolupráce.",
				"Lezení zdarma a slevy na outdoorové vybavení.",
				"Přátelský kolektiv a pohodovou atmosféru.",
				"Flexibilní směny podle tvých možností.",
				"Teambuildingy na stěně i jinde.",
			],
			en: [
				"Fair pay.",
				"Room to grow and long-term opportunities.",
				"Free climbing and discounts on outdoor gear.",
				"A friendly team and a relaxed atmosphere.",
				"Flexible shifts that fit around you.",
				"Team-building events on the wall and beyond.",
			],
		},
		contactPerson: OSTRAVA_HIRING_CONTACT,
		applicationRecipientEmail: "vjerka@hangarostrava.cz",
		status: "open",
		displayOrder: 1,
	},
	{
		title: { cs: "Sanitář/ka", en: "Cleaning crew member" },
		slug: "sanitar-ostrava",
		locationSlugs: ["ostrava"],
		employmentType: "part-time",
		description: {
			cs: [
				"Baví tě udržovat pořádek a máš rád/a prostředí, kde to žije? Na ostravský Hangar hledáme spolehlivého a pečlivého sanitáře nebo sanitářku, díky kterým bude naše zázemí vždy čisté a připravené na každodenní nápor lezců.",
			],
			en: [
				"Enjoy keeping things tidy and like being where the action is? We're looking for a reliable, careful cleaner at Hangar Ostrava to keep our facilities clean and ready for the daily rush of climbers.",
			],
		},
		responsibilities: {
			cs: ["Udržovat čistotu a pořádek na celé lezecké stěně."],
			en: ["Keeping the whole climbing gym clean and tidy."],
		},
		requirements: {
			cs: [
				"Spolehlivost a pečlivost.",
				"Komunikativnost.",
				"Samostatnost.",
				"Žádné předchozí zkušenosti nejsou nutné, vše tě naučíme.",
			],
			en: [
				"Reliability and attention to detail.",
				"Good communication.",
				"Independence.",
				"No previous experience needed; we'll teach you everything.",
			],
		},
		offer: {
			cs: [
				"Flexibilní práce: zhruba 2 směny týdně.",
				"Převážně pondělní dopolední směny (7:00 – cca 12:00), další podle domluvy.",
				"Mladý, otevřený a přátelský kolektiv.",
				"Lezení zdarma a další výhody.",
				"Atraktivní platové ohodnocení.",
				"Teambuildingy na stěně i jinde.",
			],
			en: [
				"Flexible work: about 2 shifts a week.",
				"Mostly Monday morning shifts (7:00 to about 12:00), others by agreement.",
				"A young, open and friendly team.",
				"Free climbing and other perks.",
				"Attractive pay.",
				"Team-building events on the wall and beyond.",
			],
		},
		contactPerson: OSTRAVA_HIRING_CONTACT,
		applicationRecipientEmail: "vjerka@hangarostrava.cz",
		status: "open",
		displayOrder: 2,
	},
]
