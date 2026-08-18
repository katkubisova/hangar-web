"use client"

import { useState } from "react"
import { ArticleCard } from "@/components/shared/article-card"
import {
	type ArticleCategoryFilter,
	ArticleFilter,
} from "@/components/shared/article-filter"
import { EmptyState } from "@/components/shared/empty-state"
import { HeroSection } from "@/components/shared/hero-section"
import { Section } from "@/components/shared/section"
import { articles } from "@/lib/data/articles"

const publishedArticles = articles.filter(
	article => article.status === "published"
)

export default function NewsPage() {
	const [category, setCategory] = useState<ArticleCategoryFilter>("All")

	const filteredArticles = publishedArticles.filter(
		article => category === "All" || article.category === category
	)

	return (
		<>
			<HeroSection
				title="News"
				subtitle="Placeholder subtext about Hangar news, updates, and community stories."
			/>

			<Section>
				<div className="mb-8">
					<ArticleFilter value={category} onChange={setCategory} />
				</div>

				{filteredArticles.length === 0 ? (
					<EmptyState
						message="No articles in this category yet."
						action={{
							label: "Reset filter",
							onClick: () => setCategory("All"),
						}}
					/>
				) : (
					<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{filteredArticles.map(article => (
							<li key={article.slug}>
								<ArticleCard article={article} />
							</li>
						))}
					</ul>
				)}
			</Section>
		</>
	)
}
