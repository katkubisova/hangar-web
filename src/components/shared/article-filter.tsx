"use client"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import type { ArticleCategory } from "@/lib/types/article"

export type ArticleCategoryFilter = ArticleCategory | "All"

const categories: ArticleCategoryFilter[] = [
	"All",
	"Gym Updates",
	"Climbing Tips",
	"Community",
	"Events",
]

interface ArticleFilterProps {
	value: ArticleCategoryFilter
	onChange: (value: ArticleCategoryFilter) => void
}

export function ArticleFilter({ value, onChange }: ArticleFilterProps) {
	return (
		<Select
			value={value}
			onValueChange={newValue => onChange(newValue as ArticleCategoryFilter)}
		>
			<SelectTrigger aria-label="Filter articles by category">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				{categories.map(category => (
					<SelectItem key={category} value={category}>
						{category}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
