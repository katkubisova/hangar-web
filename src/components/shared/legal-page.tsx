import { Section } from "@/components/shared/section"

interface LegalPageProps {
	title: string
	paragraphs: string[]
}

// Shared layout for the rich-text legal pages (privacy, cookies, visitor
// rules) until their real copy arrives.
export function LegalPage({ title, paragraphs }: LegalPageProps) {
	return (
		<Section>
			<div className="mx-auto max-w-2xl space-y-4">
				<h1 className="text-3xl font-bold">{title}</h1>
				{paragraphs.map(paragraph => (
					<p key={paragraph} className="text-muted-foreground leading-relaxed">
						{paragraph}
					</p>
				))}
			</div>
		</Section>
	)
}
