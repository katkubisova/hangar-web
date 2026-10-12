const GYM_NAME_PREFIX = "Hangar "

/** "Hangar Brno" → "Brno". Gyms have no separate city field, so derive it. */
export function getGymCity(gymName: string) {
	return gymName.startsWith(GYM_NAME_PREFIX)
		? gymName.slice(GYM_NAME_PREFIX.length)
		: gymName
}

/**
 * Joins a gym's activity booking base URL with an activity's booking path,
 * avoiding a doubled slash. Falls back to the base URL when there's no path.
 */
export function getActivityBookingUrl(baseUrl: string, bookingPath?: string) {
	if (!bookingPath) {
		return baseUrl
	}

	return `${baseUrl.replace(/\/+$/, "")}/${bookingPath.replace(/^\/+/, "")}`
}
