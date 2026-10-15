import { createNavigation } from "next-intl/navigation"
import type { ComponentProps } from "react"

import { routing } from "@/i18n/routing"

export const { Link, redirect, usePathname, useRouter, getPathname } =
	createNavigation(routing)

// Any internal link target: a known pathname, or a pathname with params,
// query or hash.
export type AppHref = ComponentProps<typeof Link>["href"]
