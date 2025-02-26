"use client"

import { BaseCard } from "@/app/(frontend)/_components/cards/BaseCard"
import { Author } from "@/app/(frontend)/_components/author/Author"
import { Categories } from "@/app/(frontend)/_components/categories/Categories"
import { PublishedAt } from "@/app/(frontend)/_components/published/Published"
import { ARTICLE_QUERYResult } from "@/sanity/types"

export function ArticleCard(props: ARTICLE_QUERYResult[0]) {
	const { title, author, mainImage, publishedAt, categories, slug, _id } =
		props

	return (
		<BaseCard
			href={`/articles/${slug.current}`}
			title={title}
			mainImage={mainImage}
			_id={_id}
			_type="article"
			slug={slug}
		>
			<div className="flex flex-row items-center">
				<Author className="mt-3 mb-4" author={author} />
				<span className="text-neutral-500 font-bold">,&nbsp;</span>
				<PublishedAt publishedAt={publishedAt} />
			</div>
			{categories && (
				<Categories categories={categories} className="mt-4" />
			)}
		</BaseCard>
	)
}
