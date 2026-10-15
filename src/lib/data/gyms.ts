import { brnoPrices, ostravaPrices } from "@/lib/data/price-lists"
import type { GymData } from "@/lib/types/gym"

export const gyms: GymData[] = [
	{
		name: "Hangar Brno",
		slug: "brno",
		status: "open",
		heroImage: {
			cs: "Foto pobočky — Hangar Brno",
			en: "Gym photo — Hangar Brno",
		},
		shortDescription: {
			cs: "Naše vlajková pobočka s největší boulderingovou plochou v síti, samostatnou tréninkovou zónou a Hangar Cafe přímo na místě.",
			en: "Our flagship location with the largest bouldering surface in the network, a dedicated training zone, and Hangar Cafe on site.",
		},
		address: {
			cs: "Zástupná ulice 1, 602 00 Brno, Česká republika",
			en: "Placeholder Street 1, 602 00 Brno, Czech Republic",
		},
		companyName:
			"Hangar Brno s.r.o. (placeholder — pending legal confirmation)",
		companyId: "IČO 00000000 (placeholder)",
		taxId: "DIČ CZ00000000 (placeholder)",
		openingHours: [
			{
				label: { cs: "Pondělí–pátek", en: "Monday–Friday" },
				hours: "9:00–22:00",
			},
			{
				label: { cs: "Sobota–neděle", en: "Saturday–Sunday" },
				hours: "9:00–21:00",
			},
		],
		email: "brno@hangargyms.example",
		phone: "+420 000 000 001",
		mapEmbedUrl: "#",
		directionsText: {
			cs: "Kousek pěšky od nejbližší tramvajové zastávky; parkování přímo na místě.",
			en: "A short walk from the nearest tram stop; parking available on site.",
		},
		directionsVideoUrl: "#",
		registrationUrl: {
			cs: "https://rezervace.hangarbrno.cz/newRegistration?lang=cs",
			en: "https://rezervace.hangarbrno.cz/newRegistration?lang=en",
		},
		bookingUrl: {
			cs: "https://rezervace.hangarbrno.cz/?lang=cs",
			en: "https://rezervace.hangarbrno.cz/?lang=en",
		},
		activitiesBookingUrl: "https://aktivity.hangarbrno.cz/",
		prices: brnoPrices,
		physio: {
			enabled: true,
			intro: {
				cs: "Náš fyzioterapeutický tým pomáhá lezcům rychleji regenerovat a lépe se hýbat. Ošetření probíhá přímo na pobočce.",
				en: "Our physiotherapy team helps climbers recover faster and move better, with sessions available on site.",
			},
			team: [
				{
					photo: {
						cs: "Foto fyzioterapeuta — Jana Nováková",
						en: "Physio photo — Jana Nováková",
					},
					name: "Jana Nováková",
					specialisation: {
						cs: "Sportovní fyzioterapie, rehabilitace pro lezce",
						en: "Sports physiotherapy, climbing-specific rehab",
					},
					bio: {
						cs: "Zástupný medailonek — zkušenosti se sportovní fyzioterapií a s lezci všech úrovní.",
						en: "Placeholder bio — background in sports physiotherapy working with climbers of all levels.",
					},
				},
			],
			prices: [
				{
					name: { cs: "Vstupní vyšetření", en: "Initial consultation" },
					price: 900,
					note: "60 min",
				},
				{
					name: { cs: "Navazující terapie", en: "Follow-up session" },
					price: 700,
					note: "45 min",
				},
			],
			bookingUrl: "#",
		},
		consentFormUrl: "#",
		visitorRulesUrl: "#",
		cafeMenuUrl: "#",
		cafeMenuThumbnail: {
			cs: "Náhled menu — kavárna Brno",
			en: "Gallery image — Brno cafe menu",
		},
		galleryImages: [
			{
				cs: "Fotka z galerie — Hangar Brno, boulderingová hala",
				en: "Gallery image — Hangar Brno bouldering hall",
			},
			{
				cs: "Fotka z galerie — Hangar Brno, tréninková zóna",
				en: "Gallery image — Hangar Brno training zone",
			},
			{
				cs: "Fotka z galerie — Hangar Brno, interiér kavárny",
				en: "Gallery image — Hangar Brno cafe interior",
			},
			{
				cs: "Fotka z galerie — Hangar Brno, recepce",
				en: "Gallery image — Hangar Brno reception",
			},
		],
		instagramUrl: "https://instagram.com/hangarbrno",
		facebookUrl: "https://facebook.com/hangarbrno",
		displayOrder: 1,
	},
	{
		name: "Hangar Ostrava",
		slug: "ostrava",
		status: "open",
		heroImage: {
			cs: "Foto pobočky — Hangar Ostrava",
			en: "Gym photo — Hangar Ostrava",
		},
		shortDescription: {
			cs: "Boulderingová hala v industriálním stylu s vysokou stěnou a rostoucí komunitou místních lezců.",
			en: "An industrial-style bouldering hall with high-wall climbing and a growing community of local climbers.",
		},
		address: {
			cs: "Zástupná ulice 2, 702 00 Ostrava, Česká republika",
			en: "Placeholder Street 2, 702 00 Ostrava, Czech Republic",
		},
		companyName:
			"Hangar Ostrava s.r.o. (placeholder — pending legal confirmation)",
		companyId: "IČO 00000001 (placeholder)",
		taxId: "DIČ CZ00000001 (placeholder)",
		openingHours: [
			{
				label: { cs: "Pondělí–pátek", en: "Monday–Friday" },
				hours: "9:00–22:00",
			},
			{
				label: { cs: "Sobota–neděle", en: "Saturday–Sunday" },
				hours: "9:00–21:00",
			},
		],
		email: "ostrava@hangargyms.example",
		phone: "+420 000 000 002",
		mapEmbedUrl: "#",
		directionsText: {
			cs: "Blízko centra s přímým spojením tramvají a parkováním v okolí.",
			en: "Located close to the city centre with direct tram access and nearby parking.",
		},
		directionsVideoUrl: "#",
		registrationUrl: {
			cs: "https://rezervace.hangarostrava.cz/newRegistration?lang=cs",
			en: "https://rezervace.hangarostrava.cz/newRegistration?lang=en",
		},
		bookingUrl: {
			cs: "https://rezervace.hangarostrava.cz/?lang=cs",
			en: "https://rezervace.hangarostrava.cz/?lang=en",
		},
		activitiesBookingUrl: "https://aktivity.hangarostrava.cz/",
		prices: ostravaPrices,
		physio: {
			enabled: true,
			intro: {
				cs: "Náš fyzioterapeutický tým pomáhá lezcům rychleji regenerovat a lépe se hýbat. Ošetření probíhá přímo na pobočce.",
				en: "Our physiotherapy team helps climbers recover faster and move better, with sessions available on site.",
			},
			team: [
				{
					photo: {
						cs: "Foto fyzioterapeuta — Tomáš Dvořák",
						en: "Physio photo — Tomáš Dvořák",
					},
					name: "Tomáš Dvořák",
					specialisation: {
						cs: "Sportovní fyzioterapie, rehabilitace pro lezce",
						en: "Sports physiotherapy, climbing-specific rehab",
					},
					bio: {
						cs: "Zástupný medailonek — zkušenosti se sportovní fyzioterapií a s lezci všech úrovní.",
						en: "Placeholder bio — background in sports physiotherapy working with climbers of all levels.",
					},
				},
			],
			prices: [
				{
					name: { cs: "Vstupní vyšetření", en: "Initial consultation" },
					price: 900,
					note: "60 min",
				},
				{
					name: { cs: "Navazující terapie", en: "Follow-up session" },
					price: 700,
					note: "45 min",
				},
			],
			bookingUrl: "#",
		},
		consentFormUrl: "#",
		visitorRulesUrl: "#",
		cafeMenuUrl: "#",
		cafeMenuThumbnail: {
			cs: "Náhled menu — kavárna Ostrava",
			en: "Gallery image — Ostrava cafe menu",
		},
		galleryImages: [
			{
				cs: "Fotka z galerie — Hangar Ostrava, boulderingová hala",
				en: "Gallery image — Hangar Ostrava bouldering hall",
			},
			{
				cs: "Fotka z galerie — Hangar Ostrava, vysoká stěna",
				en: "Gallery image — Hangar Ostrava high-wall area",
			},
			{
				cs: "Fotka z galerie — Hangar Ostrava, interiér kavárny",
				en: "Gallery image — Hangar Ostrava cafe interior",
			},
			{
				cs: "Fotka z galerie — Hangar Ostrava, recepce",
				en: "Gallery image — Hangar Ostrava reception",
			},
		],
		instagramUrl: "https://instagram.com/hangarostrava",
		facebookUrl: "https://facebook.com/hangarostrava",
		displayOrder: 2,
	},
	{
		name: "Hangar Plzeň",
		slug: "plzen",
		status: "coming-soon",
		heroImage: {
			cs: "Foto pobočky — Hangar Plzeň (již brzy)",
			en: "Gym photo — Hangar Plzeň (coming soon)",
		},
		shortDescription: {
			cs: "Naše nejnovější pobočka je na cestě — podrobnosti oznámíme před otevřením.",
			en: "Our newest location is on the way — details will be announced closer to opening.",
		},
		address: {
			cs: "Adresu oznámíme, Plzeň, Česká republika",
			en: "Address to be announced, Plzeň, Czech Republic",
		},
		companyName:
			"Hangar Plzeň s.r.o. (placeholder — pending legal confirmation)",
		companyId: "IČO 00000002 (placeholder)",
		taxId: "DIČ CZ00000002 (placeholder)",
		openingHours: [],
		email: "plzen@hangargyms.example",
		phone: "+420 000 000 003",
		mapEmbedUrl: "#",
		directionsText: { cs: "", en: "" },
		directionsVideoUrl: "#",
		registrationUrl: { cs: "#", en: "#" },
		bookingUrl: { cs: "#", en: "#" },
		activitiesBookingUrl: "#",
		prices: [],
		consentFormUrl: "#",
		visitorRulesUrl: "#",
		cafeMenuUrl: "#",
		cafeMenuThumbnail: {
			cs: "Náhled menu — kavárna Plzeň (již brzy)",
			en: "Gallery image — Plzeň cafe menu (coming soon)",
		},
		galleryImages: [],
		instagramUrl: "#",
		facebookUrl: "#",
		displayOrder: 3,
	},
]
