import type { Localized, Resolved } from "@/lib/types/localized"
import type { PriceCategory } from "@/lib/types/price-list"

export type GymSlug = "brno" | "ostrava" | "plzen"

export type GymStatus = "open" | "coming-soon" | "hidden"

export interface OpeningHoursRow {
	label: Localized<string>
	hours: string
}

export interface PriceItem {
	name: Localized<string>
	// CZK, formatted as "900 Kč".
	price: number
	note?: string
}

export interface PhysioTeamMember {
	photo: Localized<string>
	name: string
	specialisation: Localized<string>
	bio: Localized<string>
}

export interface PhysioInfo {
	enabled: boolean
	intro: Localized<string>
	team: PhysioTeamMember[]
	prices: PriceItem[]
	// Placeholder — no real booking system is wired up yet; see the
	// physio contact form for the actual point of contact.
	bookingUrl: string
}

export interface GymData {
	name: string
	slug: GymSlug
	status: GymStatus
	heroImage: Localized<string>
	shortDescription: Localized<string>
	address: Localized<string>
	companyName: string
	companyId: string
	taxId: string
	openingHours: OpeningHoursRow[]
	email: string
	phone: string
	mapEmbedUrl: string
	directionsText: Localized<string>
	directionsVideoUrl: string
	registrationUrl: Localized<string>
	bookingUrl: Localized<string>
	activitiesBookingUrl: string
	prices: PriceCategory[]
	physio?: PhysioInfo
	consentFormUrl: string
	visitorRulesUrl: string
	cafeMenuUrl: string
	cafeMenuThumbnail: Localized<string>
	galleryImages: Localized<string>[]
	instagramUrl: string
	facebookUrl: string
	displayOrder: number
}

export type Gym = Resolved<GymData>
