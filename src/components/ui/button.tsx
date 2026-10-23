"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import {
	type ButtonVariantProps,
	buttonVariants,
} from "@/components/ui/button-variants"

function Button({
	className,
	variant = "default",
	size = "default",
	...props
}: ButtonPrimitive.Props & ButtonVariantProps) {
	return (
		<ButtonPrimitive
			data-slot="button"
			className={buttonVariants({ variant, size, className })}
			{...props}
		/>
	)
}

export { Button }
