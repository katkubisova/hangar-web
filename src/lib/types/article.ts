export type ArticleCategory =
	| "Gym Updates"
	| "Climbing Tips"
	| "Community"
	| "Events"

export type ArticleStatus = "published" | "draft"

export interface Article {
	title: string
	subtitle: string
	slug: string
	category: ArticleCategory
	author: string
	heroImage: string
	body: string
	publishedDate: string
	readTime: string
	status: ArticleStatus
	relatedArticleSlugs: string[]
	metaTitle: string
	metaDescription: string
}
