import type { ActivityCategoryData } from "@/lib/types/activity-category"

// From the activity booking systems (aktivity.hangarbrno.cz,
// aktivity.hangarostrava.cz) and the branch pages, 15 Oct 2026.
export const activityCategories: ActivityCategoryData[] = [
	{
		icon: "dumbbell",
		name: { cs: "Lezecké kurzy", en: "Climbing courses" },
		description: {
			cs: "Pololetní kurzy pro děti, rodiče s dětmi i dospělé začátečníky a pokročilé. Chceš posun rychle? Domluv si individuální lekci s trenérem.",
			en: "Semester courses for kids, parents with kids, and adult beginners and improvers. Want to progress fast? Book a one-to-one session with a coach.",
		},
		displayOrder: 1,
		bookingPath: "/kurzy/",
	},
	{
		icon: "flower",
		name: { cs: "Jóga a studiové lekce", en: "Yoga & studio classes" },
		// Not offered on either live site or booking system — flagged in
		// docs/copy-review.md. Keep or drop pending the client.
		description: {
			cs: "Lekce ve studiu zaměřené na mobilitu a regeneraci lezců.",
			en: "Studio classes focused on mobility and recovery for climbers.",
		},
		displayOrder: 2,
		// No category page in the booking systems. Target pending client confirmation.
		bookingPath: undefined,
	},
	{
		icon: "activity",
		name: { cs: "Fitness lekce", en: "Fitness classes" },
		description: {
			cs: "Kruhové tréninky v Hangar Gymu a silový trénink pro lezce: shyby, core a vše, co tvoje lezení posune dál.",
			en: "Circuit training in the Hangar Gym and strength training for climbers: pull-ups, core and everything that takes your climbing further.",
		},
		displayOrder: 3,
		bookingPath: "/fitness/",
	},
	{
		icon: "cake",
		name: { cs: "Narozeninové oslavy", en: "Birthday parties" },
		description: {
			cs: "Dětská oslava plná pohybu, smíchu a dobrodružství. Volné termíny najdeš v rezervačním systému.",
			en: "A kids' party full of movement, laughter and adventure. Find free dates in the booking system.",
		},
		displayOrder: 4,
		bookingPath: "/narozeninove-oslavy/",
	},
	{
		icon: "tent",
		name: { cs: "Příměstské tábory", en: "Kids' day camps" },
		description: {
			cs: "Příměšťáky o podzimních i pololetních prázdninách: celý den lezení a pohybu na Hangaru.",
			en: "Day camps during the autumn and mid-term breaks: a full day of climbing and movement at Hangar.",
		},
		displayOrder: 5,
		// No category page in the booking systems. Target pending client confirmation.
		bookingPath: undefined,
	},
	{
		icon: "calendar",
		name: { cs: "Další akce", en: "Other events" },
		description: {
			cs: "Promítání, workshopy, závody, školní návštěvy a teambuildingy. Co se zrovna chystá, najdeš v kalendáři akcí.",
			en: "Film screenings, workshops, competitions, school visits and team-building. See what's coming up in the events calendar.",
		},
		displayOrder: 6,
		bookingPath: "/akce-dalsi/",
	},
]
