import type { Gym } from "@/lib/types/gym"

export const gyms: Gym[] = [
	{
		name: "Hangar Brno",
		slug: "brno",
		status: "open",
		heroImage: "Gym photo — Hangar Brno",
		shortDescription:
			"Our flagship location with the largest bouldering surface in the network, a dedicated training zone, and Hangar Cafe on site.",
		address: "Placeholder Street 1, 602 00 Brno, Czech Republic",
		companyName:
			"Hangar Brno s.r.o. (placeholder — pending legal confirmation)",
		companyId: "IČO 00000000 (placeholder)",
		taxId: "DIČ CZ00000000 (placeholder)",
		openingHours: [
			{ label: "Monday–Friday", hours: "9:00–22:00" },
			{ label: "Saturday–Sunday", hours: "9:00–21:00" },
		],
		email: "brno@hangargyms.example",
		phone: "+420 000 000 001",
		mapEmbedUrl: "#",
		directionsText:
			"A short walk from the nearest tram stop; parking available on site.",
		directionsVideoUrl: "#",
		registrationUrl: "https://rezervace.hangarbrno.cz/newRegistration?lang=en",
		bookingUrl: "https://rezervace.hangarbrno.cz/?lang=en",
		activitiesBookingUrl: "https://aktivity.hangarbrno.cz/",
		prices: [
			{
				category: "Adults",
				items: [
					{ name: "Single entry", price: "220 CZK" },
					{ name: "10-entry card", price: "1 900 CZK" },
					{ name: "Monthly pass", price: "1 400 CZK" },
				],
			},
			{
				category: "Kids & Youth",
				items: [
					{ name: "Single entry (under 15)", price: "150 CZK" },
					{ name: "10-entry card (under 15)", price: "1 300 CZK" },
				],
			},
			{
				category: "Annual Passes",
				items: [
					{
						name: "Annual pass",
						price: "9 900 CZK",
						note: "Best value for regular climbers",
					},
				],
			},
		],
		physio: {
			enabled: true,
			intro:
				"Our physiotherapy team helps climbers recover faster and move better, with sessions available on site.",
			team: [
				{
					photo: "Physio photo — Jana Nováková",
					name: "Jana Nováková",
					specialisation: "Sports physiotherapy, climbing-specific rehab",
					bio: "Placeholder bio — background in sports physiotherapy working with climbers of all levels.",
				},
			],
			prices: [
				{ name: "Initial consultation", price: "900 CZK", note: "60 min" },
				{ name: "Follow-up session", price: "700 CZK", note: "45 min" },
			],
		},
		consentFormUrl: "#",
		visitorRulesUrl: "#",
		cafeMenuUrl: "#",
		cafeMenuThumbnail: "Gallery image — Brno cafe menu",
		displayOrder: 1,
	},
	{
		name: "Hangar Ostrava",
		slug: "ostrava",
		status: "open",
		heroImage: "Gym photo — Hangar Ostrava",
		shortDescription:
			"An industrial-style bouldering hall with high-wall climbing and a growing community of local climbers.",
		address: "Placeholder Street 2, 702 00 Ostrava, Czech Republic",
		companyName:
			"Hangar Ostrava s.r.o. (placeholder — pending legal confirmation)",
		companyId: "IČO 00000001 (placeholder)",
		taxId: "DIČ CZ00000001 (placeholder)",
		openingHours: [
			{ label: "Monday–Friday", hours: "9:00–22:00" },
			{ label: "Saturday–Sunday", hours: "9:00–21:00" },
		],
		email: "ostrava@hangargyms.example",
		phone: "+420 000 000 002",
		mapEmbedUrl: "#",
		directionsText:
			"Located close to the city centre with direct tram access and nearby parking.",
		directionsVideoUrl: "#",
		registrationUrl:
			"https://rezervace.hangarostrava.cz/newRegistration?lang=en",
		bookingUrl: "https://rezervace.hangarostrava.cz/?lang=en",
		activitiesBookingUrl: "https://aktivity.hangarostrava.cz/",
		prices: [
			{
				category: "Adults",
				items: [
					{ name: "Single entry", price: "210 CZK" },
					{ name: "10-entry card", price: "1 800 CZK" },
					{ name: "Monthly pass", price: "1 300 CZK" },
				],
			},
			{
				category: "Kids & Youth",
				items: [
					{ name: "Single entry (under 15)", price: "140 CZK" },
					{ name: "10-entry card (under 15)", price: "1 200 CZK" },
				],
			},
			{
				category: "Annual Passes",
				items: [
					{
						name: "Annual pass",
						price: "9 400 CZK",
						note: "Best value for regular climbers",
					},
				],
			},
		],
		consentFormUrl: "#",
		visitorRulesUrl: "#",
		cafeMenuUrl: "#",
		cafeMenuThumbnail: "Gallery image — Ostrava cafe menu",
		displayOrder: 2,
	},
	{
		name: "Hangar Plzeň",
		slug: "plzen",
		status: "coming-soon",
		heroImage: "Gym photo — Hangar Plzeň (coming soon)",
		shortDescription:
			"Our newest location is on the way — details will be announced closer to opening.",
		address: "Address to be announced, Plzeň, Czech Republic",
		companyName:
			"Hangar Plzeň s.r.o. (placeholder — pending legal confirmation)",
		companyId: "IČO 00000002 (placeholder)",
		taxId: "DIČ CZ00000002 (placeholder)",
		openingHours: [],
		email: "plzen@hangargyms.example",
		phone: "+420 000 000 003",
		mapEmbedUrl: "#",
		directionsText: "",
		directionsVideoUrl: "#",
		registrationUrl: "#",
		bookingUrl: "#",
		activitiesBookingUrl: "#",
		prices: [],
		consentFormUrl: "#",
		visitorRulesUrl: "#",
		cafeMenuUrl: "#",
		cafeMenuThumbnail: "Gallery image — Plzeň cafe menu (coming soon)",
		displayOrder: 3,
	},
]
