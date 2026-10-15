import type { ActivityCategoryData } from "@/lib/types/activity-category"

export const activityCategories: ActivityCategoryData[] = [
	{
		icon: "dumbbell",
		name: { cs: "Lezecké kurzy", en: "Climbing Courses" },
		description: {
			cs: "Zástupný popis — kurzy pro lezce, kteří chtějí posunout základy dál.",
			en: "Placeholder description — structured courses for climbers progressing beyond the basics.",
		},
		displayOrder: 1,
		bookingPath: "/kurzy/",
	},
	{
		icon: "flower",
		name: { cs: "Jóga a studiové lekce", en: "Yoga & Studio Classes" },
		description: {
			cs: "Zástupný popis — lekce ve studiu zaměřené na mobilitu a regeneraci lezců.",
			en: "Placeholder description — studio classes focused on mobility and recovery for climbers.",
		},
		displayOrder: 2,
		// No category page in the booking systems. Target pending client confirmation.
		bookingPath: undefined,
	},
	{
		icon: "activity",
		name: { cs: "Fitness lekce", en: "Fitness Classes" },
		description: {
			cs: "Zástupný popis — silové a kondiční lekce, které podpoří tvoje lezení.",
			en: "Placeholder description — strength and conditioning classes to support your climbing.",
		},
		displayOrder: 3,
		bookingPath: "/fitness/",
	},
	{
		icon: "cake",
		name: { cs: "Narozeninové oslavy", en: "Birthday Parties" },
		description: {
			cs: "Zástupný popis — oslav narozeniny na stěně.",
			en: "Placeholder description — book the wall for a birthday celebration.",
		},
		displayOrder: 4,
		bookingPath: "/narozeninove-oslavy/",
	},
	{
		icon: "tent",
		name: { cs: "Dětské tábory", en: "Kids' Camps" },
		description: {
			cs: "Zástupný popis — prázdninové tábory, na kterých děti poznají bouldering.",
			en: "Placeholder description — holiday camps introducing kids to bouldering.",
		},
		displayOrder: 5,
		// No category page in the booking systems. Target pending client confirmation.
		bookingPath: undefined,
	},
	{
		icon: "calendar",
		name: { cs: "Další akce", en: "Other Events" },
		description: {
			cs: "Zástupný popis — teambuildingy, pronájem stěny a jednorázové akce.",
			en: "Placeholder description — team-building days, private hire, and one-off events.",
		},
		displayOrder: 6,
		bookingPath: "/akce-dalsi/",
	},
]
