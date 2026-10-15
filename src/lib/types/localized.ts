export type Locale = "cs" | "en"

// A value that differs per language. Every Localized field must have both
// languages filled — a test walks all content data to enforce it.
export interface Localized<T> {
	cs: T
	en: T
}

// The shape of a value after localize() has picked one language: every
// Localized<T> inside it, at any depth, becomes T.
export type Resolved<T> =
	T extends Localized<infer U>
		? Resolved<U>
		: T extends readonly (infer E)[]
			? Resolved<E>[]
			: T extends object
				? { [K in keyof T]: Resolved<T[K]> }
				: T
