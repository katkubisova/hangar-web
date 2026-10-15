import { describe, expect, it } from "vitest"
import { activityCategories } from "@/lib/data/activity-categories"
import { benefitCards } from "@/lib/data/benefit-cards"
import { faqItems } from "@/lib/data/faq-items"
import { gyms } from "@/lib/data/gyms"
import { positions } from "@/lib/data/positions"
import { brnoPrices, ostravaPrices } from "@/lib/data/price-lists"
import { teamMembers } from "@/lib/data/team-members"
import { isLocalized, localize } from "@/lib/utils"
import cs from "../../../messages/cs.json"
import en from "../../../messages/en.json"

const CONTENT = {
	activityCategories,
	benefitCards,
	faqItems,
	gyms,
	positions,
	brnoPrices,
	ostravaPrices,
	teamMembers,
}

// Paths of Localized values where one language is empty while the other
// isn't. Both empty is allowed (e.g. Plzeň's directions, not known yet).
function findHalfFilled(value: unknown, path: string): string[] {
	if (isLocalized(value)) {
		const isEmpty = (item: unknown) =>
			item === "" || (Array.isArray(item) && item.length === 0)
		return isEmpty(value.cs) !== isEmpty(value.en) ? [path] : []
	}
	if (value && typeof value === "object") {
		return Object.entries(value).flatMap(([key, item]) =>
			findHalfFilled(item, `${path}.${key}`)
		)
	}
	return []
}

// Every key path in a messages object, e.g. "Footer.tagline".
function messageKeys(messages: object, prefix = ""): string[] {
	return Object.entries(messages).flatMap(([key, value]) =>
		typeof value === "object"
			? messageKeys(value, `${prefix}${key}.`)
			: [`${prefix}${key}`]
	)
}

describe("localized content data", () => {
	it.each(
		Object.entries(CONTENT)
	)("%s has both languages filled everywhere", (name, data) => {
		expect(findHalfFilled(data, name)).toEqual([])
	})

	it.each([
		["Brno", brnoPrices],
		["Ostrava", ostravaPrices],
	])("%s price numbers are identical in both languages", (_, prices) => {
		const numbers = (locale: "cs" | "en") =>
			localize(prices, locale).flatMap(category =>
				category.tables.flatMap(table =>
					table.rows.map(row =>
						row.cells.map(cell => (typeof cell === "number" ? cell : null))
					)
				)
			)
		expect(numbers("cs")).toEqual(numbers("en"))
	})
})

describe("messages", () => {
	it("Czech and English have the same keys", () => {
		expect(messageKeys(cs).sort()).toEqual(messageKeys(en).sort())
	})

	it("no message is empty", () => {
		const empty = (messages: object) =>
			messageKeys(messages).filter(
				key =>
					key
						.split(".")
						.reduce<unknown>(
							(node, part) => (node as Record<string, unknown>)[part],
							messages
						) === ""
			)
		expect(empty(cs)).toEqual([])
		expect(empty(en)).toEqual([])
	})
})
