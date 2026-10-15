import type { BenefitCardData } from "@/lib/types/benefit-card"

export const benefitCards: BenefitCardData[] = [
	{
		icon: "users",
		title: { cs: "Skvělá komunita", en: "Great Community" },
		text: {
			cs: "Zástupný text — přidej se k lezcům a kolegům, které tenhle sport opravdu baví.",
			en: "Placeholder copy — join a network of climbers and staff who genuinely love the sport.",
		},
		displayOrder: 1,
	},
	{
		icon: "building",
		title: { cs: "Moderní zázemí", en: "Modern Facilities" },
		text: {
			cs: "Zástupný text — pracuj v nově postavených halách s moderním vybavením.",
			en: "Placeholder copy — work in newly built gyms with up-to-date equipment.",
		},
		displayOrder: 2,
	},
	{
		icon: "clock",
		title: { cs: "Flexibilní směny", en: "Flexible Hours" },
		text: {
			cs: "Zástupný text — směny, které skloubíš se studiem, tréninkem i dalšími povinnostmi.",
			en: "Placeholder copy — shifts that work around study, training, or other commitments.",
		},
		displayOrder: 3,
	},
	{
		icon: "trending-up",
		title: { cs: "Prostor růst", en: "Room to Grow" },
		text: {
			cs: "Zástupný text — rostoucí síť se skutečnou šancí převzít víc odpovědnosti.",
			en: "Placeholder copy — a growing network with real opportunities to take on more.",
		},
		displayOrder: 4,
	},
]
