import { useTranslations } from "next-intl"

import { BrandImage } from "@/components/brand/brand-image"
import { EmptyState } from "@/components/shared/empty-state"
import type { Resolved } from "@/lib/types/localized"
import type { Photo } from "@/lib/types/photo"

interface PhotoGalleryProps {
	images: Resolved<Photo>[]
}

// Photo grid in full colour, square crops, three across on larger screens.
export function PhotoGallery({ images }: PhotoGalleryProps) {
	const t = useTranslations("Common")

	if (images.length === 0) {
		return <EmptyState message={t("noPhotos")} />
	}

	return (
		<ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
			{images.map(image => (
				<li key={image.src ?? image.alt}>
					<BrandImage
						src={image.src}
						alt={image.alt}
						aspectRatio="aspect-square"
						sizes="(min-width: 768px) 33vw, 50vw"
					/>
				</li>
			))}
		</ul>
	)
}
