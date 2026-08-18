export type ArticleCategory =
	| "Gym Updates"
	| "Climbing Tips"
	| "Community"
	| "Events"

export type ArticleStatus = "published" | "draft"

export type ArticleBodyBlock =
	| { type: "paragraph"; text: string }
	| { type: "blockquote"; text: string }
	| { type: "image"; label: string; caption?: string }
	| { type: "video"; label: string }

export interface Article {
	title: string
	subtitle: string
	slug: string
	category: ArticleCategory
	author: string
	heroImage: string
	body: ArticleBodyBlock[]
	publishedDate: string
	readTime: string
	status: ArticleStatus
	relatedArticleSlugs: string[]
	metaTitle: string
	metaDescription: string
}
