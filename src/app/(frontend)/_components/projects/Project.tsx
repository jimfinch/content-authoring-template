import { PROJECT_QUERYResult } from "@/sanity/types"
import { Categories } from "@/app/(frontend)/_components/categories/Categories"
import { components } from "@/sanity/portableTextComponents"
import { PortableText } from "next-sanity"
import { Title } from "@/app/(frontend)/_components/title/Title"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { RelatedProjects } from "@/app/(frontend)/_components/relatedItems/RelatedProjects"

interface ProjectProps extends NonNullable<PROJECT_QUERYResult> {}

export function Project({
	title,
	mainImage,
	body,
	categories,
	relatedProjects,
	_id,
}: ProjectProps) {
	const imageWidth = 1920
	const imageHeight = 1080
	const imageAlt = mainImage?.alt || title || ""

	return (
		<article>
			<header className="container mx-auto px-6">
				<Title className="mb-12 text-center">{title}</Title>
			</header>

			{mainImage && (
				<figure>
					<Image
						priority
						src={urlFor(mainImage)
							.width(imageWidth)
							.height(imageHeight)
							.url()}
						width={imageWidth}
						height={imageHeight}
						alt={imageAlt}
						className="w-full"
					/>
				</figure>
			)}

			{body && (
				<div className="container mx-auto prose prose-invert lg:prose-lg mt-24 px-6">
					<PortableText value={body} components={components} />

					{categories && (
						<div className="flex flex-wrap gap-4 mt-24">
							<Categories categories={categories} />
						</div>
					)}
				</div>
			)}

			{relatedProjects && (
				<RelatedProjects
					relatedProjects={relatedProjects}
					documentId={_id}
					documentType="project"
				/>
			)}
		</article>
	)
}
