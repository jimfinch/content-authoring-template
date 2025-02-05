import { Author } from "@/app/(frontend)/_components/author/Author"
import { Categories } from "@/app/(frontend)/_components/categories/Categories"
import { components } from "@/sanity/portableTextComponents"
import { PortableText } from "next-sanity"
import { ARTICLE_QUERYResult } from "@/sanity/types"
import { PublishedAt } from "@/app/(frontend)/_components/published/Published"
import { Title } from "@/app/(frontend)/_components/title/Title"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

export function Article(props: NonNullable<ARTICLE_QUERYResult>) {
	const { title, author, mainImage, body, publishedAt, categories } = props

	return (
		<article className="grid lg:grid-cols-12 gap-y-12">
			<header className="lg:col-span-12 flex flex-col gap-4 items-start">
				<div className="flex gap-4 items-center">
					<Categories categories={categories} />
					<PublishedAt publishedAt={publishedAt} />
				</div>
				<Title>{title}</Title>
				<Author author={author} />
			</header>
			{mainImage ? (
				<figure className="lg:col-span-4 flex flex-col gap-2 items-start">
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
