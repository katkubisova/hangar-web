import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import type { Locale, Localized, Resolved } from "@/lib/types/localized"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

const NBSP = "\u00a0"

// Formats a CZK amount the way the branch price lists show it: "1 940 Kč".
// Non-breaking spaces keep the amount on one line.
export function formatPrice(amount: number) {
	const digits = String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, NBSP)
	return `${digits}${NBSP}Kč`
}

const LOCALIZED_KEYS = ["cs", "en"]

export function isLocalized(value: unknown): value is Localized<unknown> {
	if (!value || typeof value !== "object" || Array.isArray(value)) {
		return false
	}
	const keys = Object.keys(value)
	return (
		keys.length === LOCALIZED_KEYS.length &&
		LOCALIZED_KEYS.every(key => keys.includes(key))
	)
}

// Picks one language from content data: every { cs, en } value inside
// `value`, at any depth, is replaced by its `locale` version.
export function localize<T>(value: T, locale: Locale): Resolved<T> {
	if (isLocalized(value)) {
		return localize(value[locale], locale) as Resolved<T>
	}
	if (Array.isArray(value)) {
		return value.map(item => localize(item, locale)) as Resolved<T>
	}
	if (value && typeof value === "object") {
		return Object.fromEntries(
			Object.entries(value).map(([key, item]) => [key, localize(item, locale)])
		) as Resolved<T>
	}
	return value as Resolved<T>
}
