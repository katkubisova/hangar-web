import type { GlobalSettings } from "@/lib/types/global-settings"

/**
 * contactRouting is set to a placeholder value ("per-location") to exercise
 * the UI during this wireframe phase. It is NOT a resolved decision — see
 * spec Open Question 3 ("Should Contact/Physio form submissions route
 * per-location or to one global inbox?"). Confirm with the client before
 * Phase 5 wires up real submission handling.
 *
 * `company`, `generalEmail`, and `generalPhone` exist to satisfy the
 * footer's "Company block — global legal entity" and "general email/phone"
 * requirements (spec Section 2.2), which aren't covered by the spec's own
 * content/data model (Section 7 lists no network-wide legal entity or
 * contact fields). Real values are unconfirmed — see spec Open Question 6.
 */
export const globalSettings: GlobalSettings = {
	contactFormRecipient: "hello@hangargyms.example",
	contactRouting: "per-location",
	showAppTeaser: false,
	defaultLanguage: "en",
	company: {
		name: "HangarGyms s.r.o. (placeholder — pending legal confirmation)",
		companyId: "IČO 00000099 (placeholder)",
		taxId: "DIČ CZ00000099 (placeholder)",
		address: "Registered address to be confirmed, Czech Republic",
	},
	generalEmail: "hello@hangargyms.example",
	generalPhone: "+420 000 000 000",
}
