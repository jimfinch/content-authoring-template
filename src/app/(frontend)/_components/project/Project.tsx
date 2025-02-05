import { Author } from "@/app/(frontend)/_components/author/Author"
import { Categories } from "@/app/(frontend)/_components/categories/Categories"
import { components } from "@/sanity/portableTextComponents"
import { PortableText } from "next-sanity"
import { PROJECT_QUERYResult } from "@/sanity/types"
import { PublishedAt } from "@/app/(frontend)/_components/published/Published"
import { Title } from "@/app/(frontend)/_components/title/Title"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

export function Project(props: NonNullable<PROJECT_QUERYResult>) {
	const { title, author, mainImage, body, publishedAt, categories } = props

	return (
		<article>
			<header>
				<div>
					<Categories categories={categories} />
					<PublishedAt publishedAt={publishedAt} />
				</div>
				<Title>{title}</Title>
				<Author author={author} />
			</header>
			{mainImage ? (
				<figure>
					<Image
						src={urlFor(mainImage).width(400).height(400).url()}
						width={400}
						height={400}
						alt={mainImage.alt || title || ""}
					/>
				</figure>
			) : null}
			{body ? (
				<div className="lg:col-span-7 lg:col-start-6 prose lg:prose-lg">
					<PortableText value={body} components={components} />
				</div>
			) : null}
		</article>
	)
}
