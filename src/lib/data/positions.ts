import type { PositionData } from "@/lib/types/position"

export const positions: PositionData[] = [
	{
		title: {
			cs: "Instruktor/ka na boulderingové stěně",
			en: "Bouldering Wall Instructor",
		},
		slug: "bouldering-wall-instructor-brno",
		locationSlugs: ["brno"],
		employmentType: "part-time",
		description: {
			cs: "Zástupný popis pozice — dohled na stěně, úvodní instruktáže pro začátečníky a pomoc s akcemi.",
			en: "Placeholder role description — supervising the climbing wall, running beginner inductions, and supporting events.",
		},
		contactPerson: {
			name: "Placeholder Name",
			role: { cs: "Vedoucí pobočky", en: "Gym Manager" },
			phone: "+420 000 000 001",
			email: "brno.manager@hangargyms.example",
		},
		applicationRecipientEmail: "careers@hangargyms.example",
		status: "open",
		displayOrder: 1,
	},
	{
		title: { cs: "Barista/ka v kavárně", en: "Cafe Barista" },
		slug: "cafe-barista-ostrava",
		locationSlugs: ["ostrava"],
		employmentType: "part-time",
		description: {
			cs: "Zástupný popis pozice — příprava kávy a lehkého bistro jídla v Hangar Cafe Ostrava.",
			en: "Placeholder role description — preparing coffee and light bistro food at Hangar Cafe Ostrava.",
		},
		contactPerson: {
			name: "Placeholder Name",
			role: { cs: "Vedoucí pobočky", en: "Gym Manager" },
			phone: "+420 000 000 002",
			email: "ostrava.manager@hangargyms.example",
		},
		applicationRecipientEmail: "careers@hangargyms.example",
		status: "open",
		displayOrder: 2,
	},
	{
		title: { cs: "Fyzioterapeut/ka", en: "Physiotherapist" },
		slug: "physiotherapist-brno",
		locationSlugs: ["brno"],
		employmentType: "contract",
		description: {
			cs: "Zástupný popis pozice — tato pozice je už obsazená a zůstává tu jen kvůli otestování filtru uzavřených pozic.",
			en: "Placeholder role description — this position has since been filled and is kept here only to exercise the closed-position filtering behaviour.",
		},
		contactPerson: {
			name: "Placeholder Name",
			role: { cs: "Vedoucí pobočky", en: "Gym Manager" },
			phone: "+420 000 000 001",
			email: "brno.manager@hangargyms.example",
		},
		applicationRecipientEmail: "careers@hangargyms.example",
		status: "closed",
		displayOrder: 3,
	},
]
