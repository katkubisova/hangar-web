import { useTranslations } from "next-intl"

import { HeroSection } from "@/components/shared/hero-section"
import { Section } from "@/components/shared/section"

interface LegalPageProps {
	title: string
	paragraphs: string[]
}

// Shared layout for the rich-text legal pages (privacy, cookies, visitor
// rules) until their real copy arrives.
export function LegalPage({ title, paragraphs }: LegalPageProps) {
	const t = useTranslations("Footer")

	return (
		<>
			<HeroSection eyebrow={t("legal")} title={title} />
			<Section>
				<div className="max-w-2xl space-y-4">
					{paragraphs.map(paragraph => (
						<p key={paragraph} className="text-muted-foreground">
							{paragraph}
						</p>
					))}
				</div>
			</Section>
		</>
	)
}
