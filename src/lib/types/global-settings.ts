export type ContactRouting = "global" | "per-location"

export interface CompanyInfo {
	name: string
	companyId: string
	taxId: string
	address: string
}

export interface GlobalSettings {
	contactFormRecipient: string
	contactRouting: ContactRouting
	showAppTeaser: boolean
	defaultLanguage: "en" | "cs"
	company: CompanyInfo
	generalEmail: string
	generalPhone: string
}
