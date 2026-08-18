import type { FaqItem } from "@/lib/types/faq-item"

export const faqItems: FaqItem[] = [
	{
		question: "Do I need my own climbing shoes and chalk?",
		answer:
			"Placeholder answer — rental shoes and chalk are available on site at every open location.",
		gymSlug: "all",
		displayOrder: 1,
	},
	{
		question: "Is there an age minimum for bouldering?",
		answer:
			"Placeholder answer — climbers of all ages are welcome; under-15s climb at Kids & Youth pricing.",
		gymSlug: "all",
		displayOrder: 2,
	},
	{
		question: "Do you offer belay lessons?",
		answer:
			"Placeholder answer — Hangar is a bouldering-only network, so no rope or belay instruction is offered.",
		gymSlug: "all",
		displayOrder: 3,
	},
	{
		question: "Where can I park at Hangar Brno?",
		answer:
			"Placeholder answer — on-site parking is available at Hangar Brno; see the directions section for details.",
		gymSlug: "brno",
		displayOrder: 4,
	},
	{
		question: "Is Hangar Ostrava accessible by tram?",
		answer:
			"Placeholder answer — yes, Hangar Ostrava is a short walk from the nearest tram stop.",
		gymSlug: "ostrava",
		displayOrder: 5,
	},
]
