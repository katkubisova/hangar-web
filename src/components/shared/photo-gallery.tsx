import { useTranslations } from "next-intl"

import { EmptyState } from "@/components/shared/empty-state"
import { PlaceholderImage } from "@/components/ui/placeholder-image"

interface PhotoGalleryProps {
	images: string[]
}

export function PhotoGallery({ images }: PhotoGalleryProps) {
	const t = useTranslations("Common")

	if (images.length === 0) {
		return <EmptyState message={t("noPhotos")} />
	}

	return (
		<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
			{images.map(label => (
				<PlaceholderImage key={label} label={label} className="rounded-lg" />
			))}
		</div>
	)
}
