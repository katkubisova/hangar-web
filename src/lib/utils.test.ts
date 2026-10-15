import { describe, expect, it } from "vitest"
import { cn, formatPrice } from "./utils"

describe("cn", () => {
	it("should merge classes correctly", () => {
		expect(cn("px-4", "py-2")).toBe("px-4 py-2")
	})

	it("should handle conflict resolution with tailwind classes", () => {
		expect(cn("px-4", "px-2")).toBe("px-2")
	})

	it("should handle conditional classes", () => {
		expect(
			cn("base-class", true && "conditional-class", false && "not-included")
		).toBe("base-class conditional-class")
	})

	it("should handle arrays of classes", () => {
		expect(cn(["px-4", "py-2"])).toBe("px-4 py-2")
	})

	it("should handle objects with conditional classes", () => {
		expect(cn({ "bg-red-500": true, "bg-blue-500": false })).toBe("bg-red-500")
	})

	it("should handle mixed inputs", () => {
		expect(cn("px-4", ["py-2"], { rounded: true, shadow: false })).toBe(
			"px-4 py-2 rounded"
		)
	})

	it("should handle empty inputs", () => {
		expect(cn()).toBe("")
	})

	it("should handle undefined and null values", () => {
		expect(cn(undefined, null, "bg-red-500")).toBe("bg-red-500")
	})
})

describe("formatPrice", () => {
	it("should format amounts below a thousand", () => {
		expect(formatPrice(215)).toBe("215\u00a0Kč")
	})

	it("should separate thousands with a non-breaking space", () => {
		expect(formatPrice(1940)).toBe("1\u00a0940\u00a0Kč")
		expect(formatPrice(26700)).toBe("26\u00a0700\u00a0Kč")
	})
})
