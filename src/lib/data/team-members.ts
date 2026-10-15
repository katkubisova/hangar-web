import type { TeamMemberData } from "@/lib/types/team-member"

export const teamMembers: TeamMemberData[] = [
	{
		photo: { cs: "Foto týmu — Adam Ondra", en: "Team photo — Adam Ondra" },
		name: "Adam Ondra",
		role: { cs: "Zakladatel a ambasador", en: "Founder & Ambassador" },
		groupSlug: "core",
		bio: {
			cs: "Zástupný medailonek — profesionální lezec a zakladatel, který stojí za sítí Hangar.",
			en: "Placeholder bio — professional climber and founder backing the Hangar network.",
		},
		displayOrder: 1,
	},
	{
		photo: {
			cs: "Foto týmu — člen hlavního týmu",
			en: "Team photo — Core team member",
		},
		name: "Placeholder Name",
		role: { cs: "Vedoucí provozu sítě", en: "Network Operations Lead" },
		groupSlug: "core",
		bio: {
			cs: "Zástupný medailonek vedoucího provozu sítě.",
			en: "Placeholder bio for the network operations lead.",
		},
		email: "operations@hangargyms.example",
		displayOrder: 2,
	},
	{
		photo: {
			cs: "Foto týmu — vedoucí pobočky Brno",
			en: "Team photo — Brno gym manager",
		},
		name: "Placeholder Name",
		role: { cs: "Vedoucí pobočky", en: "Gym Manager" },
		groupSlug: "brno",
		bio: {
			cs: "Zástupný medailonek vedoucího pobočky Hangar Brno.",
			en: "Placeholder bio for the Hangar Brno gym manager.",
		},
		email: "brno.manager@hangargyms.example",
		displayOrder: 1,
	},
	{
		photo: {
			cs: "Foto týmu — hlavní trenér Brno",
			en: "Team photo — Brno head coach",
		},
		name: "Placeholder Name",
		role: { cs: "Hlavní trenér", en: "Head Coach" },
		groupSlug: "brno",
		bio: {
			cs: "Zástupný medailonek hlavního trenéra Hangar Brno.",
			en: "Placeholder bio for the Hangar Brno head coach.",
		},
		displayOrder: 2,
	},
	{
		photo: {
			cs: "Foto týmu — vedoucí pobočky Ostrava",
			en: "Team photo — Ostrava gym manager",
		},
		name: "Placeholder Name",
		role: { cs: "Vedoucí pobočky", en: "Gym Manager" },
		groupSlug: "ostrava",
		bio: {
			cs: "Zástupný medailonek vedoucího pobočky Hangar Ostrava.",
			en: "Placeholder bio for the Hangar Ostrava gym manager.",
		},
		email: "ostrava.manager@hangargyms.example",
		displayOrder: 1,
	},
	{
		photo: {
			cs: "Foto týmu — hlavní trenér Ostrava",
			en: "Team photo — Ostrava head coach",
		},
		name: "Placeholder Name",
		role: { cs: "Hlavní trenér", en: "Head Coach" },
		groupSlug: "ostrava",
		bio: {
			cs: "Zástupný medailonek hlavního trenéra Hangar Ostrava.",
			en: "Placeholder bio for the Hangar Ostrava head coach.",
		},
		displayOrder: 2,
	},
]
