import { cn } from "@/lib/utils"

// The five climbing-wall profiles from the brand guide (p. 61–65). They're
// black shapes that carry key information (date, time, a short label) and
// give a layout structure. Drawn as a mask, so the fill comes from the
// text colour: use text-cod-gray (default look) or any palette colour.
const PROFILES = {
	nose: 166.01 / 161.13,
	beast: 248.86 / 146.03,
	monster: 301.89 / 197.28,
	boomerang: 236.67 / 156.84,
	stargate: 195.85 / 207.83,
} as const

export type WallProfileName = keyof typeof PROFILES

interface WallProfileProps {
	profile: WallProfileName
	// Shows the profile's name, as in the guide's labelled versions.
	withName?: boolean
	className?: string
	// Content placed on top of the shape, e.g. a date on a poster. The
	// shapes are irregular, so keep it short and check it stays inside.
	children?: React.ReactNode
	contentClassName?: string
}

export function WallProfile({
	profile,
	withName = false,
	className,
	children,
	contentClassName,
}: WallProfileProps) {
	const src = `/brand/profiles/${profile}${withName ? "-name" : ""}.svg`

	return (
		<div
			className={cn("relative text-cod-gray", className)}
			style={{ aspectRatio: PROFILES[profile] }}
		>
			<span
				aria-hidden="true"
				className="absolute inset-0 bg-current"
				style={{
					maskImage: `url(${src})`,
					maskSize: "contain",
					maskRepeat: "no-repeat",
					maskPosition: "center",
				}}
			/>
			{children && (
				<div
					className={cn(
						"relative flex h-full flex-col justify-center p-[18%] text-alabaster",
						contentClassName
					)}
				>
					{children}
				</div>
			)}
		</div>
	)
}
