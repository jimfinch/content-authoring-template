import { ARTICLE_QUERYResult } from "@/sanity/types"
import { Author } from "@/app/(frontend)/_components/author/Author"
import { Categories } from "@/app/(frontend)/_components/categories/Categories"
import { components } from "@/sanity/portableTextComponents"
import { PortableText } from "next-sanity"
import { PublishedAt } from "@/app/(frontend)/_components/published/Published"
import { Title } from "@/app/(frontend)/_components/title/Title"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

export function Article(props: NonNullable<ARTICLE_QUERYResult>) {
	const { title, author, mainImage, body, publishedAt, categories } = props

	return (
		<article>
			<header className="container mx-auto px-6">
				<Title className="mb-6 lg:mb-12 text-center">{title}</Title>
				<div className="flex flex-row items-center justify-center mb-12">
					<Author author={author} />
					<span className="text-neutral-500 font-bold">,&nbsp;</span>
					<PublishedAt publishedAt={publishedAt} />
				</div>
			</header>
			{mainImage ? (
				<figure>
					<Image
						priority
						src={urlFor(mainImage).width(1920).height(1080).url()}
						width={1920}
						height={1080}
						alt={mainImage.alt || title || ""}
						className="w-full object-cover"
					/>
				</figure>
			) : null}
			{body ? (
				<div className="container mx-auto prose prose-invert lg:prose-lg my-12 lg:my-24 px-6">
					<PortableText value={body} components={components} />

					<div className="flex flex-wrap gap-4 mt-24">
						<Categories categories={categories} />
					</div>
				</div>
			) : null}
		</article>
	)
}
