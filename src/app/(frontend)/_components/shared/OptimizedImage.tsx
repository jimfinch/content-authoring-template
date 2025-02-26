"use client"

import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"

interface OptimizedImageProps {
	image: any
	width: number
	height: number
	alt: string
	className?: string
	priority?: boolean
}

export function OptimizedImage({
	image,
	width,
	height,
	alt,
	className,
	priority = false,
}: OptimizedImageProps) {
	if (!image) return null

	return (
		<Image
			src={urlFor(image).width(width).height(height).url()}
			width={width}
			height={height}
			alt={image.alt || alt || ""}
			className={className}
			priority={priority}
		/>
	)
}
