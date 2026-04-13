# Framer Motion Guide

This guide covers animation patterns using Framer Motion in this project.

## Installation

Framer Motion is installed as a dependency:

```bash
pnpm add framer-motion
```

## When to Use

Use Framer Motion for:
- Staggered list animations
- Enter/exit transitions (AnimatePresence)
- Layout animations
- Gesture-based interactions

Avoid for:
- Simple hover states (use CSS transitions)
- Static UI elements

## Motion Variants Pattern

Create reusable animation variants in `motion-variants.ts`:

```tsx
// motion-variants.ts
import type { Variants } from "framer-motion"

export const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.05 },
	},
}

export const itemVariants: Variants = {
	hidden: { opacity: 0, y: 8 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3, ease: "easeOut" },
	},
}
```

## Usage

### Staggered List Animation

```tsx
import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "./motion-variants"

function List({ items }: Props) {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{items.map(item => (
				<motion.div key={item.id} variants={itemVariants}>
					{item.name}
				</motion.div>
			))}
		</motion.div>
	)
}
```

### Single Element Animation

```tsx
import { motion } from "framer-motion"

function CardSkeleton() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 8 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
		>
			{/* content */}
		</motion.div>
	)
}
```

## Client Component Requirement

Motion components must be used in Client Components:

```tsx
"use client"

import { motion } from "framer-motion"

export function AnimatedList() {
	// ...
}
```

## Best Practices

1. **Extract variants** - Keep animation logic in `motion-variants.ts`
2. **Use staggerChildren** - Prefer variants over manual `animationDelay`
3. **Keep it subtle** - Small `y: 8px` translates, short `300ms` durations
4. **CSS first** - Use CSS transitions for hover/focus states

## Resources

- [Framer Motion Docs](https://motion.dev/docs)
- [Variants Guide](https://motion.dev/docs/animation-variants)