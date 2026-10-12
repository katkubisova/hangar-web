import { describe, expect, it } from "vitest"
import { getActivityBookingUrl, getGymCity } from "./gym-utils"

describe("getGymCity", () => {
	it("should strip the Hangar prefix", () => {
		expect(getGymCity("Hangar Brno")).toBe("Brno")
		expect(getGymCity("Hangar Plzeň")).toBe("Plzeň")
	})

	it("should return the name unchanged without the prefix", () => {
		expect(getGymCity("Brno")).toBe("Brno")
	})
})

describe("getActivityBookingUrl", () => {
	it("should not produce a doubled slash", () => {
		expect(
			getActivityBookingUrl("https://aktivity.hangarbrno.cz/", "/kurzy/")
		).toBe("https://aktivity.hangarbrno.cz/kurzy/")
	})

	it("should add a slash when neither side has one", () => {
		expect(
			getActivityBookingUrl("https://aktivity.hangarbrno.cz", "kurzy/")
		).toBe("https://aktivity.hangarbrno.cz/kurzy/")
	})

	it("should fall back to the base URL without a booking path", () => {
		expect(getActivityBookingUrl("https://aktivity.hangarbrno.cz/")).toBe(
			"https://aktivity.hangarbrno.cz/"
		)
	})
})
