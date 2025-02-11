import { PROJECT_QUERYResult } from "@/sanity/types"
import { Categories } from "@/app/(frontend)/_components/categories/Categories"
import { components } from "@/sanity/portableTextComponents"
import { PortableText } from "next-sanity"
import { Title } from "@/app/(frontend)/_components/title/Title"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

export function Project(props: NonNullable<PROJECT_QUERYResult>) {
	const { title, mainImage, body, categories } = props

	return (
		<article>
			<header className="container mx-auto px-6">
				<Title className="mb-12 text-center">{title}</Title>
			</header>
			{mainImage ? (
				<figure>
					<Image
						priority
						src={urlFor(mainImage).width(1920).height(1080).url()}
						width={1920}
						height={1080}
						alt={mainImage.alt || title || ""}
						className="w-full"
					/>
				</figure>
			) : null}
			{body ? (
				<div className="container mx-auto prose prose-invert lg:prose-lg mt-24 px-6">
					<PortableText value={body} components={components} />

					<div className="flex flex-wrap gap-4 mt-24">
						<Categories categories={categories} />
					</div>
				</div>
			) : null}
		</article>
	)
}
