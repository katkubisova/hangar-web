import type { Article } from "@/lib/types/article"

export const articles: Article[] = [
	{
		title: "Hangar Brno's training zone gets a moonboard upgrade",
		subtitle: "New hangboards and a moonboard are now open to all members.",
		slug: "brno-training-zone-upgrade",
		category: "Gym Updates",
		author: "Hangar Team",
		heroImage: "Article hero image — training zone upgrade",
		body: [
			{
				type: "paragraph",
				text: "Placeholder body copy describing the training zone upgrade at Hangar Brno, including the new moonboard and hangboard stations now available to members.",
			},
			{
				type: "image",
				label: "Article image — new moonboard installation",
				caption:
					"Placeholder caption — the new moonboard, installed this month.",
			},
			{
				type: "paragraph",
				text: "Placeholder body copy continuing the story — opening hours for the training zone and how to book a slot.",
			},
			{
				type: "blockquote",
				text: "“Placeholder quote — a member's reaction to the new training zone.”",
			},
		],
		publishedDate: "2026-06-02",
		readTime: "3 min read",
		status: "published",
		relatedArticleSlugs: [
			"five-tips-for-new-boulderers",
			"community-climbing-meetup-recap",
			"reading-a-boulder-problem",
		],
		metaTitle: "Hangar Brno's training zone gets a moonboard upgrade",
		metaDescription:
			"Placeholder meta description for the Brno training zone upgrade article.",
	},
	{
		title: "Five tips for new boulderers",
		subtitle:
			"Getting started at Hangar — what to know before your first visit.",
		slug: "five-tips-for-new-boulderers",
		category: "Climbing Tips",
		author: "Hangar Team",
		heroImage: "Article hero image — tips for new boulderers",
		body: [
			{
				type: "paragraph",
				text: "Placeholder body copy with five beginner-friendly tips for climbers visiting a Hangar gym for the first time.",
			},
			{
				type: "paragraph",
				text: "Placeholder body copy — what to wear, what to bring, and what rental gear is available on site.",
			},
		],
		publishedDate: "2026-05-20",
		readTime: "4 min read",
		status: "published",
		relatedArticleSlugs: [
			"brno-training-zone-upgrade",
			"reading-a-boulder-problem",
			"meet-the-hangar-cafe-team",
		],
		metaTitle: "Five tips for new boulderers",
		metaDescription:
			"Placeholder meta description for the beginner tips article.",
	},
	{
		title: "Reading a boulder problem: a beginner's guide",
		subtitle: "How to plan your route before you climb it.",
		slug: "reading-a-boulder-problem",
		category: "Climbing Tips",
		author: "Hangar Team",
		heroImage: "Article hero image — reading a boulder problem",
		body: [
			{
				type: "paragraph",
				text: "Placeholder body copy explaining how to read holds, sequences, and body positioning before attempting a boulder problem.",
			},
			{
				type: "video",
				label: "Video embed — reading a boulder problem walkthrough",
			},
			{
				type: "paragraph",
				text: "Placeholder body copy wrapping up with a suggested drill to practice route-reading on your next visit.",
			},
		],
		publishedDate: "2026-05-10",
		readTime: "5 min read",
		status: "published",
		relatedArticleSlugs: [
			"five-tips-for-new-boulderers",
			"community-climbing-meetup-recap",
			"brno-training-zone-upgrade",
		],
		metaTitle: "Reading a boulder problem: a beginner's guide",
		metaDescription:
			"Placeholder meta description for the route-reading article.",
	},
	{
		title: "Community climbing meetup recap",
		subtitle: "Highlights from last month's community night at Hangar Ostrava.",
		slug: "community-climbing-meetup-recap",
		category: "Community",
		author: "Hangar Team",
		heroImage: "Article hero image — community meetup recap",
		body: [
			{
				type: "paragraph",
				text: "Placeholder body copy recapping the community climbing meetup, with quotes and photos from members.",
			},
			{
				type: "image",
				label: "Article image — meetup group photo",
				caption: "Placeholder caption — members at the community night.",
			},
		],
		publishedDate: "2026-04-28",
		readTime: "3 min read",
		status: "published",
		relatedArticleSlugs: [
			"brno-training-zone-upgrade",
			"reading-a-boulder-problem",
			"meet-the-hangar-cafe-team",
		],
		metaTitle: "Community climbing meetup recap",
		metaDescription:
			"Placeholder meta description for the community meetup recap article.",
	},
	{
		title: "Meet the team behind Hangar Cafe",
		subtitle: "The people pouring your coffee between climbs.",
		slug: "meet-the-hangar-cafe-team",
		category: "Community",
		author: "Hangar Team",
		heroImage: "Article hero image — Hangar Cafe team",
		body: [
			{
				type: "paragraph",
				text: "Placeholder body copy introducing the Hangar Cafe team across locations.",
			},
		],
		publishedDate: "2026-04-12",
		readTime: "2 min read",
		status: "published",
		relatedArticleSlugs: [
			"community-climbing-meetup-recap",
			"five-tips-for-new-boulderers",
			"brno-training-zone-upgrade",
		],
		metaTitle: "Meet the team behind Hangar Cafe",
		metaDescription: "Placeholder meta description for the cafe team article.",
	},
]
