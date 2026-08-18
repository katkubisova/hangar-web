export type GymSlug = "brno" | "ostrava" | "plzen"

export type GymStatus = "open" | "coming-soon" | "hidden"

export interface OpeningHoursRow {
	label: string
	hours: string
}

export interface PriceItem {
	name: string
	price: string
	note?: string
}

export interface PriceCategory {
	category: string
	items: PriceItem[]
}

export interface PhysioTeamMember {
	photo: string
	name: string
	specialisation: string
	bio: string
}

export interface PhysioInfo {
	enabled: boolean
	intro: string
	team: PhysioTeamMember[]
	prices: PriceItem[]
}

export interface Gym {
	name: string
	slug: GymSlug
	status: GymStatus
	heroImage: string
	shortDescription: string
	address: string
	companyName: string
	companyId: string
	taxId: string
	openingHours: OpeningHoursRow[]
	email: string
	phone: string
	mapEmbedUrl: string
	directionsText: string
	directionsVideoUrl: string
	registrationUrl: string
	bookingUrl: string
	activitiesBookingUrl: string
	prices: PriceCategory[]
	physio?: PhysioInfo
	consentFormUrl: string
	visitorRulesUrl: string
	cafeMenuUrl: string
	cafeMenuThumbnail: string
	displayOrder: number
}
