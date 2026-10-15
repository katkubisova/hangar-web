import { brnoPrices, ostravaPrices } from "@/lib/data/price-lists"
import type { GymData } from "@/lib/types/gym"

// Facts verified against the live sites on 15 Oct 2026:
// - Brno: hangarbrno.cz (/, /hangar/, /kontakt/, /hangar-cafe/, /fyzio-hangar/)
// - Ostrava: hangarostrava.cz (/, /hangar/, /kontakt/, /hangar-cafe/, /fyzio-hangar/)
// Copy is rewritten from those facts; anything the sites don't cover is
// flagged in docs/copy-review.md, not invented.

export const gyms: GymData[] = [
	{
		name: "Hangar Brno",
		slug: "brno",
		status: "open",
		heroImage: {
			src: "/photos/brno-hall-b.jpg",
			alt: {
				cs: "Boulderová stěna plná chytů v Hangaru Brno",
				en: "A bouldering wall full of holds at Hangar Brno",
			},
		},
		shortDescription: {
			cs: "Dvě haly, přes 200 boulderů a tréninkové zóny, ve kterých se nikdo nenudí. Tady to v roce 2019 celé začalo.",
			en: "Two halls, over 200 boulders and training zones where nobody gets bored. This is where it all started in 2019.",
		},
		description: {
			cs: [
				"Hangar Brno v roce 2019 odstartoval novou éru moderního boulderingu v Česku. Hala A má přes 1 000 m² lezecké plochy a 120 boulderů od 5A do 8A. Mladší dvoupatrová Hala B přidává 700 m² a 70 boulderů na profilech, které navrhl Adam Ondra s předními českými stavěči.",
				"Chceš makat? Čekají tě dva Moonboardy (40° a 25°), kampus, fingerboard a spray wall o ploše 40 m² se sklonem 40°. Každé pondělí stavěči sundají 10–25 boulderů a v úterý staví nové. Co přibylo, najdeš v aplikaci TopLogger.",
				"Pro děti je tu pohybový park s hradem, skluzavkou a cvičnou stěnou (od 2 let), dětský koutek v Hale A a Rocket's Zone: 250 m² závodních boulderů oddílu Hangar Rockets, které si může zkusit každý (ve všední dny 15:30–19:00 v ní trénuje oddíl). Klimatizovaný gym máš v ceně vstupu, po lezení zajdi do Cafe Baru nebo do outdoor shopu.",
			],
			en: [
				"Hangar Brno kicked off a new era of modern bouldering in the Czech Republic in 2019. Hall A has over 1,000 m² of climbing surface and 120 boulders from 5A to 8A. The younger two-storey Hall B adds 700 m² and 70 boulders on wall profiles designed by Adam Ondra with top Czech routesetters.",
				"Want to train hard? There are two Moonboards (40° and 25°), a campus board, a fingerboard and a 40 m² spray wall at 40°. Every Monday the setters strip 10–25 boulders and set new ones on Tuesday. Find what's new in the TopLogger app.",
				"For kids there's a movement park with a castle, a slide and a practice wall (from age 2), a kids' corner in Hall A and Rocket's Zone: 250 m² of competition boulders from the Hangar Rockets club that anyone can try (the club trains there on weekdays 15:30–19:00). The air-conditioned gym is included in your entry; after climbing, drop by the Cafe Bar or the outdoor shop.",
			],
		},
		address: {
			cs: "Pražákova 1027/53, 619 00 Brno",
			en: "Pražákova 1027/53, 619 00 Brno",
		},
		companyName: "VerticalBlock s.r.o., U Soudu 6200/19, 708 00 Ostrava",
		companyId: "IČO 05488648",
		taxId: "DIČ CZ05488648",
		openingHours: [
			{ label: { cs: "Pondělí", en: "Monday" }, hours: "9:00–22:00" },
			{
				label: { cs: "Úterý–pátek", en: "Tuesday–Friday" },
				hours: "7:00–22:00",
			},
			{
				label: { cs: "Sobota–neděle", en: "Saturday–Sunday" },
				hours: "9:00–22:00",
			},
		],
		email: "info@hangarbrno.cz",
		phone: "+420 608 987 910",
		mapEmbedUrl:
			"https://maps.google.com/maps?t=m&output=embed&iwloc=near&z=14&q=Pra%C5%BE%C3%A1kova+1027%2F53%2C+619+00+Brno-st%C5%99ed",
		directionsText: {
			cs: [
				"MHD: tramvají č. 2 nebo 5 na zastávku Ústřední hřbitov, odtud je to asi 10 minut pěšky. Blízko je i zastávka Pražákova.",
				"Autem: parkuj v areálu jen na vyznačených místech Hangar. Když je plno, využij odstavné parkoviště vlevo od areálu.",
			],
			en: [
				"Public transport: tram 2 or 5 to the Ústřední hřbitov stop, then about a 10-minute walk. The Pražákova stop is close too.",
				"By car: park in the grounds only in the marked Hangar spaces. If they're full, use the overflow car park to the left of the grounds.",
			],
		},
		directionsVideoUrl: "https://www.youtube-nocookie.com/embed/uBzi9uXmsjI",
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
				cs: [
					"Bolest nebo strach ze zranění ti brání v pohybu? Tým Fyzio Hangar tě naučí vnímat své tělo, objevit jeho možnosti a zranění předcházet.",
					"Terapie jsou delší než obvykle: konzultace, pohybová terapie a další odborné metody v tempu, které sedí právě tobě. Sportovcům nabízíme i analýzu sportovní činnosti a zapojení terapie přímo do tréninku.",
					"Služby hradíš přímo, zdravotní pojišťovny je neproplácí (ani zpětně). Objednat se můžeš nejpozději den předem.",
				],
				en: [
					"Is pain or fear of injury holding you back? The Fyzio Hangar team helps you read your body, discover what it can do and prevent injuries.",
					"Sessions are longer than usual: consultation, movement therapy and other specialist methods at a pace that suits you. For athletes we also analyse your sport and build the therapy into your training.",
					"Services are paid directly; health insurers don't cover them (not even retroactively). Book at least one day ahead.",
				],
			},
			team: [
				...["Karolína Nevělíková", "Markéta Nevělíková", "Anna Deuserová"].map(
					name => ({
						photo: { cs: `Foto — ${name}`, en: `Photo — ${name}` },
						name,
						specialisation: { cs: "Fyzioterapie", en: "Physiotherapy" },
						bio: {
							cs: "Objednání přes rezervační systém.",
							en: "Book through the booking system.",
						},
					})
				),
				{
					photo: { cs: "Foto — Antonín Tomáš", en: "Photo — Antonín Tomáš" },
					name: "Antonín Tomáš",
					specialisation: { cs: "Fyzioterapie", en: "Physiotherapy" },
					bio: {
						cs: "Objednání na telefonu 723 815 363.",
						en: "Book by phone: 723 815 363.",
					},
				},
				{
					photo: {
						cs: "Foto — Michal Kačerovský",
						en: "Photo — Michal Kačerovský",
					},
					name: "Michal Kačerovský",
					specialisation: {
						cs: "Fyzioterapie a silový trénink",
						en: "Physiotherapy and strength training",
					},
					bio: {
						cs: "Objednání přes rezervační systém.",
						en: "Book through the booking system.",
					},
				},
				{
					photo: { cs: "Foto — Anna Čermáková", en: "Photo — Anna Čermáková" },
					name: "Anna Čermáková",
					specialisation: { cs: "Silový trénink", en: "Strength training" },
					bio: {
						cs: "Objednání na telefonu 608 340 118.",
						en: "Book by phone: 608 340 118.",
					},
				},
			],
			prices: [
				{
					name: {
						cs: "Vstupní vyšetření s terapií",
						en: "Initial assessment with therapy",
					},
					price: 1300,
					note: { cs: "60 min", en: "60 min" },
				},
				{
					name: { cs: "Jednorázová návštěva", en: "Single visit" },
					price: 1200,
					note: { cs: "55 min", en: "55 min" },
				},
				{
					name: {
						cs: "Navazující terapie (po vstupním vyšetření)",
						en: "Follow-up therapy (after the initial assessment)",
					},
					price: 1100,
					note: { cs: "55 min", en: "55 min" },
				},
				{
					name: {
						cs: "Balíček navazujících terapií",
						en: "Follow-up therapy package",
					},
					price: 5250,
					note: { cs: "5 terapií", en: "5 sessions" },
				},
				{
					name: {
						cs: "Balíček navazujících terapií",
						en: "Follow-up therapy package",
					},
					price: 10000,
					note: { cs: "10 terapií", en: "10 sessions" },
				},
				{
					name: { cs: "Sportovní masáž", en: "Sports massage" },
					price: 800,
					note: { cs: "55 min", en: "55 min" },
				},
				{
					name: { cs: "Relaxační masáž", en: "Relaxation massage" },
					price: 800,
					note: { cs: "55 min", en: "55 min" },
				},
				{
					name: {
						cs: "Vstupní individuální silový trénink",
						en: "Initial one-to-one strength session",
					},
					price: 850,
					note: { cs: "75 min", en: "75 min" },
				},
				{
					name: {
						cs: "Navazující individuální silový trénink",
						en: "Follow-up one-to-one strength session",
					},
					price: 750,
					note: { cs: "60 min", en: "60 min" },
				},
			],
		},
		consentFormUrl:
			"https://hangarbrno.cz/wp-content/uploads/2025/08/Souhlas-zakonneho-zastupce-Hangar-Brno-2.pdf",
		visitorRulesUrl:
			"https://hangarbrno.cz/wp-content/uploads/2026/04/Navstevni-rad-VB-2025-finalni-30_4.pdf",
		cafe: {
			coffeePhoto: "/photos/brno-drinks.jpg",
			bistroPhoto: "/photos/brno-bistro.jpg",
			coffee: {
				cs: "Espresso, cappuccino nebo americano z výběrové kávy od pražírny Father's. K tomu výhled přímo na lezeckou plochu.",
				en: "Espresso, cappuccino or americano made with specialty coffee from Father's roastery, with a view straight onto the climbing floor.",
			},
			bistro: {
				cs: "Snídaně, bagety, pizza i bowl z čerstvých surovin, vegani a vegetariáni si vyberou taky. Sladké od brněnské pekařky Cukrevolta. Poslední objednávky do 20:00.",
				en: "Breakfasts, baguettes, pizza and bowls made from fresh ingredients, with vegan and vegetarian options. Sweets from Brno bakery Cukrevolta. Last orders at 20:00.",
			},
		},
		galleryImages: [
			{
				src: "/photos/brno-hall-a.jpg",
				alt: {
					cs: "Boulderová hala shora",
					en: "The bouldering hall from above",
				},
			},
			{
				src: "/photos/brno-overhang.jpg",
				alt: {
					cs: "Převislý boulder uprostřed haly",
					en: "An overhanging boulder in the middle of the hall",
				},
			},
			{
				src: "/photos/brno-climber.jpg",
				alt: {
					cs: "Lezkyně na barevné stěně",
					en: "A climber on a colourful wall",
				},
			},
			{
				src: "/photos/brno-routesetting.jpg",
				alt: {
					cs: "Stavěči při stavění nových boulderů",
					en: "Routesetters building new boulders",
				},
			},
			{
				src: "/photos/brno-kids-park.jpg",
				alt: { cs: "Pohybový park pro děti", en: "The kids' movement park" },
			},
			{
				src: "/photos/brno-shop.jpg",
				alt: { cs: "Outdoor shop", en: "The outdoor shop" },
			},
		],
		instagramUrl: "https://www.instagram.com/hangarbrno/",
		facebookUrl: "https://www.facebook.com/hangarbrno",
		displayOrder: 1,
	},
	{
		name: "Hangar Ostrava",
		slug: "ostrava",
		status: "open",
		heroImage: {
			src: "/photos/ostrava-hall.jpg",
			alt: {
				cs: "Boulderová hala Hangaru Ostrava",
				en: "The bouldering hall at Hangar Ostrava",
			},
		},
		shortDescription: {
			cs: "Největší boulderovka v Moravskoslezském kraji: 1 500 m² lezecké plochy, Kilterboard a dvoupatrový dětský park.",
			en: "The biggest bouldering gym in the Moravian-Silesian Region: 1,500 m² of climbing surface, a Kilterboard and a two-storey kids' park.",
		},
		description: {
			cs: [
				"Největší boulderingové centrum v Moravskoslezském kraji má 1 500 m² lezecké plochy a přes 100 boulderů od 5A do 8A. Profily všech sklonů, od základních kroků po silové kousky a moderní dynamické skoky. Každé pondělí stavěči obmění jeden sektor a každý měsíc přibude 30 boulderů Hangar Challenge.",
				"Druhé patro patří tréninku: spray wall o ploše 55 m², dva Moonboardy (40° a 25°), hangboardy, kampus a Kilterboard s nastavitelným sklonem 0–70°, jeden ze dvou v Česku. Čeká na něm přes 120 000 boulderů včetně replik slavných problémů jako Off the Wagon nebo Midnight Lightning.",
				"Děti mají dvoupatrový pohybový park s hradní věží, lanovým mostem, tobogánem a dětskou boulderovou stěnou. Nahoře je Rocket's Zone oddílu Hangar Rockets Ostrava (ve všední dny 15:30–19:00 v ní trénuje oddíl). Gym máš v ceně vstupu a k tomu Cafe & Bistro s výhledem na stěnu, obchod s lezeckým vybavením a místnosti pro narozeninové oslavy.",
			],
			en: [
				"The biggest bouldering centre in the Moravian-Silesian Region has 1,500 m² of climbing surface and over 100 boulders from 5A to 8A. Wall profiles at every angle, from basic moves to power problems and modern dynamic jumps. Every Monday the setters reset one sector, and every month 30 Hangar Challenge boulders go up.",
				"The second floor is for training: a 55 m² spray wall, two Moonboards (40° and 25°), hangboards, a campus board and a Kilterboard with adjustable angle from 0° to 70°, one of only two in the Czech Republic. It holds over 120,000 boulders, including replicas of famous problems like Off the Wagon and Midnight Lightning.",
				"Kids get a two-storey movement park with a castle tower, a rope bridge, a tube slide and a kids' bouldering wall. Upstairs is Rocket's Zone of the Hangar Rockets Ostrava club (the club trains there on weekdays 15:30–19:00). The gym is included in your entry, plus there's a Cafe & Bistro overlooking the wall, a climbing gear shop and party rooms for kids' birthdays.",
			],
		},
		address: {
			cs: "Nad Porubkou 2405, 708 00 Ostrava-Poruba",
			en: "Nad Porubkou 2405, 708 00 Ostrava-Poruba",
		},
		companyName: "CLIMBING GYM s.r.o., U Soudu 6200/19, 708 00 Ostrava",
		companyId: "IČO 17445078",
		taxId: "DIČ CZ17445078",
		openingHours: [
			{ label: { cs: "Pondělí", en: "Monday" }, hours: "9:00–22:00" },
			{ label: { cs: "Úterý", en: "Tuesday" }, hours: "7:00–22:00" },
			{ label: { cs: "Středa", en: "Wednesday" }, hours: "9:00–22:00" },
			{ label: { cs: "Čtvrtek", en: "Thursday" }, hours: "7:00–22:00" },
			{
				label: { cs: "Pátek–neděle", en: "Friday–Sunday" },
				hours: "9:00–22:00",
			},
		],
		email: "info@hangarostrava.cz",
		phone: "+420 606 766 983",
		mapEmbedUrl:
			"https://maps.google.com/maps?t=m&output=embed&iwloc=near&z=14&q=Nad+Porubkou+2405%2C+708+00+Ostrava+8",
		directionsText: {
			cs: [
				"MHD: autobusem na zastávku Bytostav nebo Dělnická, odtud jsi u nás za 4 minuty. Jezdí sem spoje z centra Ostravy, z Poruby i od nádraží Ostrava-Svinov.",
				"Autem: kolem Hangaru je velké parkoviště i nabíječka pro elektroauta. Když je plno, zaparkuj u krajnice cesty k lesíku a mysli na projíždějící auta.",
			],
			en: [
				"Public transport: bus to the Bytostav or Dělnická stop, then a 4-minute walk. Buses run here from the centre of Ostrava, from Poruba and from Ostrava-Svinov station.",
				"By car: there's a large car park around Hangar and an EV charger. If it's full, park at the side of the road towards the woods, and mind the passing traffic.",
			],
		},
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
				cs: [
					"Fyzioterapii v Ostravě zajišťuje náš partner Fyzio Gym Cooper, fyzioterapeutické a tréninkové centrum s 10letou tradicí. Od roku 2018 garantuje fyzioterapii české reprezentace ve sportovním lezení.",
					"Specializací je lezení: od hobby lezců po závodníky, s důrazem na prevenci zranění a podporu výkonu. Na zranění prstů používají unikátní metodu Isele. Uvedené ceny jsou zvýhodněné pro Hangar Ostrava.",
				],
				en: [
					"Physiotherapy in Ostrava is provided by our partner Fyzio Gym Cooper, a physiotherapy and training centre with a 10-year track record. Since 2018 it has been the physiotherapy provider for the Czech national sport climbing team.",
					"Climbing is their specialty, from hobby climbers to competitors, with a focus on preventing injuries and supporting performance. For finger injuries they use the unique Isele method. Prices shown are Hangar Ostrava discounts.",
				],
			},
			team: [
				{
					photo: {
						cs: "Foto — Nikol Chovanová",
						en: "Photo — Nikol Chovanová",
					},
					name: "Nikol Chovanová",
					specialisation: {
						cs: "Fyzioterapie, certifikovaná lektorka metody Isele",
						en: "Physiotherapy, certified Isele method instructor",
					},
					bio: {
						cs: "Objednání přes Fyzio Gym Cooper: +420 777 640 621, info@fyziogym.cz.",
						en: "Book via Fyzio Gym Cooper: +420 777 640 621, info@fyziogym.cz.",
					},
				},
			],
			prices: [
				{
					name: {
						cs: "Komplexní péče — 1 lekce",
						en: "Complete care — 1 session",
					},
					price: 1100,
					note: { cs: "55 min", en: "55 min" },
				},
				{
					name: {
						cs: "Komplexní péče — balíček",
						en: "Complete care — package",
					},
					price: 980,
					note: { cs: "6 lekcí", en: "6 sessions" },
				},
				{
					name: {
						cs: "Komplexní péče — balíček",
						en: "Complete care — package",
					},
					price: 900,
					note: { cs: "12 lekcí", en: "12 sessions" },
				},
				{
					name: {
						cs: "Komplexní péče — balíček",
						en: "Complete care — package",
					},
					price: 800,
					note: { cs: "20 lekcí", en: "20 sessions" },
				},
				{
					name: {
						cs: "Komplexní diagnostika pohybového aparátu",
						en: "Complete musculoskeletal assessment",
					},
					price: 2100,
					note: { cs: "120 + 30 min", en: "120 + 30 min" },
				},
				{
					name: {
						cs: "Komplexní diagnostika pro lezce",
						en: "Complete assessment for climbers",
					},
					price: 2100,
					note: { cs: "120 + 30 min", en: "120 + 30 min" },
				},
				{
					name: {
						cs: "Testování lezeckých silových schopností (po základní diagnostice)",
						en: "Climbing strength testing (after the basic assessment)",
					},
					price: 2100,
				},
				{
					name: { cs: "Isele terapie ruky", en: "Isele hand therapy" },
					price: 1190,
					note: { cs: "1 terapie", en: "1 session" },
				},
				{
					name: {
						cs: "Isele terapie ruky — balíček",
						en: "Isele hand therapy — package",
					},
					price: 5100,
					note: { cs: "5 terapií", en: "5 sessions" },
				},
				{
					name: {
						cs: "Tréninkový plán (po komplexní diagnostice)",
						en: "Training plan (after the complete assessment)",
					},
					price: 3400,
					note: { cs: "4 týdny", en: "4 weeks" },
				},
			],
			bookingUrl: "https://fyziogym.cz/",
		},
		consentFormUrl:
			"https://hangarostrava.cz/wp-content/uploads/2025/08/Souhlas-zakonneho-zastupce-Ostrava.pdf",
		visitorRulesUrl:
			"https://hangarostrava.cz/wp-content/uploads/2025/11/CG-NAVSTEVNI-A-PROVOZNI-RAD-finalni.pdf",
		cafe: {
			coffeePhoto: "/photos/ostrava-coffee.jpg",
			bistroPhoto: "/photos/ostrava-bistro.jpg",
			coffee: {
				cs: "Espresso, cappuccino nebo americano z výběrové kávy od pražírny Father's, k tomu domácí limonáda nebo pořádné pivo. Všechno s výhledem na celou stěnu.",
				en: "Espresso, cappuccino or americano made with specialty coffee from Father's roastery, plus homemade lemonade or a proper beer, all with a view of the whole wall.",
			},
			bistro: {
				cs: "Teplá i studená jídla z čerstvých surovin každý den, od granoly po pizzu a Bún Cha. Dorty, koláče a cookies od Croissant House Ostrava. Poslední objednávky do 20:00.",
				en: "Hot and cold dishes made fresh every day, from granola to pizza and bún chả. Cakes, pastries and cookies from Croissant House Ostrava. Last orders at 20:00.",
			},
		},
		galleryImages: [
			{
				src: "/photos/ostrava-training.jpg",
				alt: {
					cs: "Tréninková zóna se strmou stěnou",
					en: "The training zone with a steep wall",
				},
			},
			{
				src: "/photos/ostrava-kilterboard.jpg",
				alt: { cs: "Kilterboard", en: "The Kilterboard" },
			},
			{
				src: "/photos/ostrava-coaching.jpg",
				alt: {
					cs: "Trenér jistí malého lezce",
					en: "A coach spotting a young climber",
				},
			},
			{
				src: "/photos/ostrava-routesetting.jpg",
				alt: { cs: "Stavění nových boulderů", en: "Building new boulders" },
			},
			{
				src: "/photos/ostrava-kids-park.jpg",
				alt: { cs: "Pohybový park pro děti", en: "The kids' movement park" },
			},
			{
				src: "/photos/ostrava-shop.jpg",
				alt: { cs: "Outdoor shop", en: "The outdoor shop" },
			},
		],
		instagramUrl: "https://www.instagram.com/hangarostrava/",
		facebookUrl: "https://www.facebook.com/hangarostrava",
		displayOrder: 2,
	},
	{
		name: "Hangar Plzeň",
		slug: "plzen",
		status: "coming-soon",
		heroImage: {
			alt: {
				cs: "Hangar Plzeň — již brzy",
				en: "Hangar Plzeň — coming soon",
			},
		},
		shortDescription: {
			cs: "Hangar míří do Plzně. Podrobnosti oznámíme před otevřením.",
			en: "Hangar is heading to Plzeň. Details coming closer to opening.",
		},
		description: { cs: [], en: [] },
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
		directionsText: { cs: [], en: [] },
		prices: [],
		cafe: { coffee: { cs: "", en: "" }, bistro: { cs: "", en: "" } },
		galleryImages: [],
		displayOrder: 3,
	},
]
