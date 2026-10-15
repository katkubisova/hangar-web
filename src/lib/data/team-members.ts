import type { Localized } from "@/lib/types/localized"
import type { TeamGroupSlug, TeamMemberData } from "@/lib/types/team-member"

// From hangarbrno.cz/nas-tym/ and hangarostrava.cz/nas-tym/, 15 Oct 2026.
// People listed on both sites are in "core". Bios are shortened from the
// people's own texts. Personal email addresses (seznam.cz, gmail.com,
// volny.cz, post.cz) are left out pending the client's OK — see
// docs/copy-review.md.

function member(
	groupSlug: TeamGroupSlug,
	displayOrder: number,
	name: string,
	role: Localized<string>,
	bio: Localized<string>,
	email?: string
): TeamMemberData {
	return {
		photo: { cs: `Foto — ${name}`, en: `Photo — ${name}` },
		name,
		role,
		groupSlug,
		bio,
		email,
		displayOrder,
	}
}

const SHIFT_LEAD = { cs: "Vedoucí směny", en: "Shift lead" }

export const teamMembers: TeamMemberData[] = [
	member(
		"core",
		1,
		"Adam Ondra",
		{
			cs: "Profesionální lezec a partner Hangaru",
			en: "Professional climber and Hangar partner",
		},
		{
			cs: "Lezení je moje životní poslání i profese, a naštěstí je tak rozmanité, že se mu můžu věnovat 365 dní v roce. Média, rozhovory a akce: Kateřina Kuřátková.",
			en: "Climbing is my life's calling and my job, and luckily it's varied enough to do 365 days a year. Media, interviews and events: Kateřina Kuřátková.",
		},
		"katerina@adamondra.com"
	),
	member(
		"core",
		2,
		"Tomáš Labounek",
		{ cs: "CEO", en: "CEO" },
		{
			cs: "Ideový otec Hangaru. Se stávajícími i novými kontrakty se obracej na mou výkonnou asistentku Anežku Karáskovou.",
			en: "The man behind the idea of Hangar. For current or new contracts, contact my executive assistant Anežka Karásková.",
		},
		"labounek@hangargyms.com"
	),
	member(
		"core",
		3,
		"Anežka Karásková",
		{ cs: "Výkonná asistentka CEO", en: "Executive assistant to the CEO" },
		{
			cs: "Pravá ruka Tomáše Labounka: korespondence, administrativa a každodenní agenda. Obrať se rovnou na mě, společně to vyřešíme.",
			en: "Tomáš Labounek's right hand: correspondence, admin and day-to-day business. Come straight to me and we'll sort it out together.",
		},
		"anezka@hangargyms.com"
	),
	member(
		"core",
		4,
		"Pavel Labounek",
		{ cs: "Finance a účetnictví", en: "Finance and accounting" },
		{
			cs: "Mám na starosti ekonomiku a finance.",
			en: "I look after the economics and finances.",
		}
	),
	member(
		"core",
		5,
		"Kateřina Krestová",
		{ cs: "Marketing & event manažerka", en: "Marketing & event manager" },
		{
			cs: "Marketingové spolupráce, eventy, digital a další srandy. Máš nápad na akci nebo zájem o spolupráci? Jsem jedno ucho!",
			en: "Marketing partnerships, events, digital and other fun stuff. Got an idea for an event or want to work with us? I'm all ears!",
		},
		"katerina@hangarbrno.cz"
	),
	member(
		"core",
		6,
		"Barbora Durajová",
		{ cs: "Ředitelka neziskové sekce", en: "Head of the non-profit section" },
		{
			cs: "Vedu spolky Hangar Rockets v Brně i Ostravě: strategii, rozpočty, dotace a spolupráci se samosprávou a Českým horolezeckým svazem.",
			en: "I run the Hangar Rockets clubs in Brno and Ostrava: strategy, budgets, grants and working with local government and the Czech Mountaineering Federation.",
		},
		"barbora@hangarbrno.cz"
	),

	member(
		"brno",
		1,
		"Dominika Chlebková",
		{ cs: "Ředitelka komerční sekce", en: "Head of the commercial section" },
		{
			cs: "Odpovídám za strategii a rozvoj centra, investice a nové projekty, vedu vedoucí jednotlivých sektorů a starám se o personál a HR.",
			en: "I'm responsible for the centre's strategy and growth, investments and new projects. I lead the heads of each area and look after staff and HR.",
		},
		"dominika@hangarbrno.cz"
	),
	member(
		"brno",
		2,
		"Natálie Vugrincová",
		{ cs: "Vedoucí provozu", en: "Operations manager" },
		{
			cs: "Starám se o chod baru a sanitací. Obrať se na mě s prodloužením permanentky, zpětnou vazbou nebo zájmem o brigádu.",
			en: "I run the bar and cleaning. Come to me about extending a pass, feedback or a part-time job.",
		},
		"natalie@hangarbrno.cz"
	),
	member(
		"brno",
		3,
		"Lucie Hanousková",
		{ cs: "Vedoucí oddílů", en: "Head of clubs and courses" },
		{
			cs: "Koordinuji oddíl a všechny lezecké aktivity, od dětských kroužků po kurzy pro dospělé. Mám na starosti i narozeninové oslavy, školní návštěvy, teambuildingy a tábory.",
			en: "I coordinate the club and all climbing activities, from kids' groups to adult courses. I also handle birthday parties, school visits, team-building and camps.",
		},
		"lucie@hangarbrno.cz"
	),
	member(
		"brno",
		4,
		"Dominik Scharf",
		{ cs: "Šéftrenér", en: "Head coach" },
		{
			cs: "Šéftrenér oddílu Hangar Rockets Brno. Dohlížím na tréninkový program dětí a vedu instruktorský tým. Chceš se stát instruktorem? Pošli mi CV.",
			en: "Head coach of Hangar Rockets Brno. I oversee the kids' training programme and lead the instructor team. Want to be an instructor? Send me your CV.",
		},
		"dominik@hangarbrno.cz"
	),
	member(
		"brno",
		5,
		"Mikuláš Chlebek",
		{ cs: "Vedoucí technického úseku", en: "Head of technical operations" },
		{
			cs: "Chvíli opravuji něco, na co neexistuje návod, a chvíli vyjednávám s dodavateli, aby existoval. Máš nápad, co na stěně vylepšit? Sem s ním!",
			en: "One minute I'm fixing something that has no manual, the next I'm getting suppliers to write one. Got an idea to improve the gym? Bring it on!",
		},
		"support@hangarbrno.cz"
	),
	member(
		"brno",
		6,
		"Štěpán Stráník",
		{ cs: "Master šéf stavěč", en: "Head routesetter" },
		{
			cs: "Autor desítek boulderů, které každý týden vznikají na Hangaru. Stavím pro Hangar, pro českou reprezentaci i pro Adama Ondru.",
			en: "The setter behind dozens of new boulders at Hangar every week. I set for Hangar, for the Czech national team and for Adam Ondra.",
		}
	),
	member(
		"brno",
		7,
		"Veronika Knišová",
		{ cs: "Koordinátorka baru", en: "Bar coordinator" },
		{
			cs: "Zaškoluji brigádníky a pravidelně mě potkáš i za barem. Baví mě pestrost práce, otevření lidé a káva. Hodně kávy.",
			en: "I train new bar staff and you'll often find me behind the bar. I love the variety, the open people and coffee. Lots of coffee.",
		},
		"cafebar@hangarbrno.cz"
	),
	member(
		"brno",
		8,
		"Alžběta Cigánková",
		{
			cs: "Koordinátorka sanitačního týmu",
			en: "Cleaning team coordinator",
		},
		{
			cs: "Starám se o sanitace, abyste si na Hangaru užili nejen lezení, ale i příjemné prostředí.",
			en: "I run the cleaning so you can enjoy not just the climbing at Hangar, but a pleasant space too.",
		}
	),
	member("brno", 9, "Emma Bečvářová", SHIFT_LEAD, {
		cs: "Hangar je pro mě místo, kde vznikají přátelství, příležitosti a zážitky. A skvělá káva.",
		en: "For me Hangar is where friendships, opportunities and experiences happen. And great coffee.",
	}),
	member("brno", 10, "Petr Laco", SHIFT_LEAD, {
		cs: "Nejvíc si tu vážím super komunity a lidí, se kterými je sranda pracovat. Práci si rád zpestřuji dobrou kávou.",
		en: "What I value most is the great community and people who are fun to work with. I like to spice up the job with good coffee.",
	}),
	member("brno", 11, "Sofie Gabrielová", SHIFT_LEAD, {
		cs: "Přišla jsem jako naprostý nováček do světa lezení a Hangar mi přirostl k srdci. Baví mě jeho atmosféra a energie, za barem i na stěně.",
		en: "I arrived as a total climbing newbie and Hangar won my heart. I love the atmosphere and energy, behind the bar and on the wall.",
	}),
	member("brno", 12, "Lenka Doleželová", SHIFT_LEAD, {
		cs: "Malá holka s velkými sny, která na Hangaru našla druhou rodinu. Lezení, smích a espresso pomeranč s karamelovým sirupem.",
		en: "A small girl with big dreams who found a second family at Hangar. Climbing, laughter and orange espresso with caramel syrup.",
	}),
	member("brno", 13, "Babeta Doneé", SHIFT_LEAD, {
		cs: "K lezení mě přivedl brácha a teď jsem tady! Z kolegů i návštěvníků se tu stávají nerozluční parťáci.",
		en: "My brother got me into climbing and now here I am! Colleagues and visitors become inseparable mates here.",
	}),
	member("brno", 14, "Dorota Pokrievková", SHIFT_LEAD, {
		cs: "Hangar spojuje pohyb, úžasné lidi a příjemnou atmosféru. Chci, aby se tu každý cítil vítaný a rád se vracel.",
		en: "Hangar brings together movement, amazing people and a great atmosphere. I want everyone to feel welcome and keep coming back.",
	}),
	member("brno", 15, "Jana Frimmelová", SHIFT_LEAD, {
		cs: "Vždycky jsem si cenila přátelské atmosféry Hangaru. Jsem ráda, že ji teď můžu spoluvytvářet.",
		en: "I've always loved Hangar's friendly atmosphere. I'm glad I now get to help create it.",
	}),
	member("brno", 16, "Maja Matyášová", SHIFT_LEAD, {
		cs: "Baví mě rozmanitost práce: nejde jen o kafíčka a odbavování lidí. K tomu dobré kafe a super kolektiv.",
		en: "I love the variety: it's not just making coffee and checking people in. Add good coffee and a great team.",
	}),

	member(
		"ostrava",
		1,
		"Martin (Kebos) Sobek",
		{ cs: "Manažer provozu", en: "Operations manager" },
		{
			cs: "Starám se o všechno, co Hangar potřebuje k bezchybnému provozu: zákazníky, administrativu, akce i inovace. Když je potřeba, potkáš mě i s vrtačkou v ruce.",
			en: "I take care of everything Hangar needs to run smoothly: customers, admin, events and new ideas. When needed, you'll find me with a drill in hand.",
		},
		"martin@hangarostrava.cz"
	),
	member(
		"ostrava",
		2,
		"Vjerka Podlešáková",
		{ cs: "Zástupkyně provozního", en: "Deputy operations manager" },
		{
			cs: "Generátor dobré nálady. Starám se o bar, bistro a kavárnu, školení personálu a komunikaci s dodavateli.",
			en: "A generator of good vibes. I look after the bar, bistro and cafe, staff training and suppliers.",
		},
		"vjerka@hangarostrava.cz"
	),
	member(
		"ostrava",
		3,
		"Martin Chytil",
		{ cs: "Master šéf stavěč", en: "Head routesetter" },
		{
			cs: "Šéf ostravských stavěčů. Vymýšlím pestré a moderní bouldery všech obtížností, u kterých zapojíš svaly i mozek. Inspiraci sbírám na skalách.",
			en: "Head of the Ostrava setting team. I create varied, modern boulders at every grade that work your muscles and your brain. I find inspiration on real rock.",
		}
	),
	member(
		"ostrava",
		4,
		"Tonda Plšek",
		{ cs: "Vedoucí oddílu", en: "Head of the climbing club" },
		{
			cs: "Starám se o chod a rozvoj oddílu, od komunikace s rodiči po koordinaci instruktorů: kroužky, kurzy pro dospělé, individuály i závodní skupiny.",
			en: "I run and grow the climbing club, from talking to parents to coordinating instructors: kids' groups, adult courses, one-to-ones and competition squads.",
		},
		"tonda@hangarostrava.cz"
	),
	member(
		"ostrava",
		5,
		"Jeník Jurečka",
		{
			cs: "Koordinátor sportovních aktivit",
			en: "Sports activities coordinator",
		},
		{
			cs: "Lezení venku, teambuildingy, tělocvik pro školy, workshopy a silový trénink. Zajímá tě něco z toho? Ozvi se.",
			en: "Outdoor climbing, team-building, PE lessons for schools, workshops and strength training. Interested? Get in touch.",
		},
		"honza@hangarostrava.cz"
	),
]
