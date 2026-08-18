import type { Position } from "@/lib/types/position"

export const positions: Position[] = [
	{
		title: "Bouldering Wall Instructor",
		slug: "bouldering-wall-instructor-brno",
		locationSlugs: ["brno"],
		employmentType: "part-time",
		description:
			"Placeholder role description — supervising the climbing wall, running beginner inductions, and supporting events.",
		contactPerson: {
			name: "Placeholder Name",
			role: "Gym Manager",
			phone: "+420 000 000 001",
			email: "brno.manager@hangargyms.example",
		},
		applicationRecipientEmail: "careers@hangargyms.example",
		status: "open",
		displayOrder: 1,
	},
	{
		title: "Cafe Barista",
		slug: "cafe-barista-ostrava",
		locationSlugs: ["ostrava"],
		employmentType: "part-time",
		description:
			"Placeholder role description — preparing coffee and light bistro food at Hangar Cafe Ostrava.",
		contactPerson: {
			name: "Placeholder Name",
			role: "Gym Manager",
			phone: "+420 000 000 002",
			email: "ostrava.manager@hangargyms.example",
		},
		applicationRecipientEmail: "careers@hangargyms.example",
		status: "open",
		displayOrder: 2,
	},
	{
		title: "Physiotherapist",
		slug: "physiotherapist-brno",
		locationSlugs: ["brno"],
		employmentType: "contract",
		description:
			"Placeholder role description — this position has since been filled and is kept here only to exercise the closed-position filtering behaviour.",
		contactPerson: {
			name: "Placeholder Name",
			role: "Gym Manager",
			phone: "+420 000 000 001",
			email: "brno.manager@hangargyms.example",
		},
		applicationRecipientEmail: "careers@hangargyms.example",
		status: "closed",
		displayOrder: 3,
	},
]
