import type messages from "../../messages/en.json"
import type { routing } from "./routing"

// Types next-intl's useLocale() as "cs" | "en" and checks every
// translation key at compile time against the English messages.
declare module "next-intl" {
	interface AppConfig {
		Locale: (typeof routing.locales)[number]
		Messages: typeof messages
	}
}
