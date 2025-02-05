import { Author } from "@/app/(frontend)/_components/author/Author"
import { Categories } from "@/app/(frontend)/_components/categories/Categories"
import { PROJECT_QUERYResult } from "@/sanity/types"
import { PublishedAt } from "@/app/(frontend)/_components/published/Published"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"

export function ProjectCard(props: PROJECT_QUERYResult[0]) {
	const { title, author, mainImage, publishedAt, categories } = props

	return (
		<Link href={`/projects/${props.slug!.current}`}>
			<article>
				<div>
					<Categories categories={categories} />
				</div>
				<div>
					<h2>
						<span>{title}</span>
					</h2>
					<div>
						<Author author={author} />
						<PublishedAt publishedAt={publishedAt} />
					</div>
				</div>
				<div>
					{mainImage ? (
						<Image
							src={urlFor(mainImage).width(400).height(200).url()}
							width={400}
							height={200}
							alt={mainImage.alt || title || ""}
						/>
					) : null}
				</div>
			</article>
		</Link>
	)
}
