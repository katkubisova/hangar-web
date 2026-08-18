import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import type { Article } from "@/lib/types/article"

interface ArticleCardProps {
	article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
	return (
		<Link href={`/news/${article.slug}`} className="group flex flex-col gap-3">
			<PlaceholderImage
				label={article.heroImage}
				className="rounded-lg transition-opacity group-hover:opacity-80"
			/>
			<div className="flex flex-col gap-1.5">
				<Badge variant="outline" className="w-fit">
					{article.category}
				</Badge>
				<h3 className="font-medium leading-snug group-hover:underline">
					{article.title}
				</h3>
				<p className="text-sm text-muted-foreground">{article.subtitle}</p>
				<p className="text-xs text-muted-foreground">
					{article.publishedDate} · {article.readTime} · {article.author}
				</p>
			</div>
		</Link>
	)
}
