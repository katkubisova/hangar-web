import type { ActivityCategory } from "@/lib/types/activity-category"

export const activityCategories: ActivityCategory[] = [
	{
		icon: "dumbbell",
		name: "Climbing Courses",
		description:
			"Placeholder description — structured courses for climbers progressing beyond the basics.",
		displayOrder: 1,
	},
	{
		icon: "flower",
		name: "Yoga & Studio Classes",
		description:
			"Placeholder description — studio classes focused on mobility and recovery for climbers.",
		displayOrder: 2,
	},
	{
		icon: "activity",
		name: "Fitness Classes",
		description:
			"Placeholder description — strength and conditioning classes to support your climbing.",
		displayOrder: 3,
	},
	{
		icon: "cake",
		name: "Birthday Parties",
		description:
			"Placeholder description — book the wall for a birthday celebration.",
		displayOrder: 4,
	},
	{
		icon: "tent",
		name: "Kids' Camps",
		description:
			"Placeholder description — holiday camps introducing kids to bouldering.",
		displayOrder: 5,
	},
	{
		icon: "calendar",
		name: "Other Events",
		description:
			"Placeholder description — team-building days, private hire, and one-off events.",
		displayOrder: 6,
	},
]
