"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useMemo } from "react"
import type { Gym, GymSlug } from "@/lib/types/gym"

const GYM_QUERY_PARAM = "gym"

export function useGymSelector(gyms: Gym[]) {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const selectableGyms = useMemo(
		() => gyms.filter(gym => gym.status !== "hidden"),
		[gyms]
	)

	const requestedSlug = searchParams.get(GYM_QUERY_PARAM)
	const selected =
		selectableGyms.find(gym => gym.slug === requestedSlug) ?? selectableGyms[0]

	const setSelected = useCallback(
		(slug: GymSlug) => {
			const params = new URLSearchParams(searchParams.toString())
			params.set(GYM_QUERY_PARAM, slug)
			router.replace(`${pathname}?${params.toString()}`, { scroll: false })
		},
		[pathname, router, searchParams]
	)

	return { gyms: selectableGyms, selected, setSelected }
}
