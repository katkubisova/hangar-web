import { cn } from "@/lib/utils"

interface ParagraphsProps {
	paragraphs: string[]
	className?: string
}

// Renders multi-paragraph copy from content data as separate <p>s.
export function Paragraphs({ paragraphs, className }: ParagraphsProps) {
	return paragraphs.map(paragraph => (
		<p key={paragraph} className={cn("leading-relaxed", className)}>
			{paragraph}
		</p>
	))
}
