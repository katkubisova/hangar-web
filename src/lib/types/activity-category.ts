export interface ActivityCategory {
	icon: string
	name: string
	description: string
	displayOrder: number
	/** Path within a gym's activity booking system, shared by all gyms. */
	bookingPath?: string
}
