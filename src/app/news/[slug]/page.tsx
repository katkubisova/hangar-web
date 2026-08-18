import { Copy, Facebook, Linkedin, X } from "lucide-react"
import { notFound } from "next/navigation"

import { ArticleCard } from "@/components/shared/article-card"
import { Section } from "@/components/shared/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { articles } from "@/lib/data/articles"
import type { ArticleBodyBlock } from "@/lib/types/article"

interface ArticlePageProps {
	params: Promise<{ slug: string }>
}

function ArticleBody({ blocks }: { blocks: ArticleBodyBlock[] }) {
	return (
		<div className="mx-auto max-w-2xl space-y-6">
			{blocks.map(block => {
				const key = `${block.type}-${block.type === "video" || block.type === "image" ? block.label : block.text}`

				if (block.type === "paragraph") {
					return (
						<p key={key} className="text-muted-foreground leading-relaxed">
							{block.text}
						</p>
					)
				}
				if (block.type === "blockquote") {
					return (
						<blockquote
							key={key}
							className="border-l-2 border-border pl-4 italic text-muted-foreground"
						>
							{block.text}
						</blockquote>
					)
				}
				if (block.type === "image") {
					return (
						<figure key={key}>
							<PlaceholderImage label={block.label} className="rounded-lg" />
							{block.caption && (
								<figcaption className="mt-2 text-sm text-muted-foreground">
									{block.caption}
								</figcaption>
							)}
						</figure>
					)
				}
				return (
					<PlaceholderImage
						key={key}
						label={block.label}
						className="rounded-lg"
					/>
				)
			})}
		</div>
	)
}

export default async function ArticlePage({ params }: ArticlePageProps) {
	const { slug } = await params
	const article = articles.find(
		a => a.slug === slug && a.status === "published"
	)

	if (!article) {
		notFound()
	}

	const relatedArticles = article.relatedArticleSlugs
		.map(relatedSlug => articles.find(a => a.slug === relatedSlug))
		.filter((a): a is (typeof articles)[number] => Boolean(a))
		.slice(0, 3)

	return (
		<>
			<Section>
				<PlaceholderImage
					label={article.heroImage}
					className="mb-8 rounded-lg"
				/>
				<div className="mx-auto max-w-2xl">
					<Badge variant="outline" className="mb-4">
						{article.category}
					</Badge>
					<h1 className="mb-2 text-4xl font-bold">{article.title}</h1>
					<p className="mb-4 text-lg text-muted-foreground">
						{article.subtitle}
					</p>
					<p className="mb-8 text-sm text-muted-foreground">
						{article.publishedDate} · {article.readTime} · {article.author}
					</p>
				</div>

				<ArticleBody blocks={article.body} />

				<div className="mx-auto mt-8 flex max-w-2xl items-center gap-2">
					<span className="text-sm text-muted-foreground">Share:</span>
					<Button
						variant="outline"
						size="icon"
						disabled
						aria-label="Share on Facebook (not yet functional)"
					>
						<Facebook className="size-4" aria-hidden="true" />
					</Button>
					<Button
						variant="outline"
						size="icon"
						disabled
						aria-label="Share on X (not yet functional)"
					>
						<X className="size-4" aria-hidden="true" />
					</Button>
					<Button
						variant="outline"
						size="icon"
						disabled
						aria-label="Share on LinkedIn (not yet functional)"
					>
						<Linkedin className="size-4" aria-hidden="true" />
					</Button>
					<Button
						variant="outline"
						size="icon"
						disabled
						aria-label="Copy link (not yet functional)"
					>
						<Copy className="size-4" aria-hidden="true" />
					</Button>
				</div>
			</Section>

			{relatedArticles.length > 0 && (
				<Section className="bg-muted/30">
					<h2 className="mb-6 text-2xl font-bold">Related Articles</h2>
					<ul className="grid gap-6 md:grid-cols-3">
						{relatedArticles.map(related => (
							<li key={related.slug}>
								<ArticleCard article={related} />
							</li>
						))}
					</ul>
				</Section>
			)}
		</>
	)
}
