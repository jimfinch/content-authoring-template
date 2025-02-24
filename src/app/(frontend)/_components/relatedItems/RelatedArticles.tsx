"use client"

import Link from "next/link"
import { createDataAttribute } from "next-sanity"
import { ARTICLE_QUERYResult } from "@/sanity/types"
import { client } from "@/sanity/lib/client"
import { useOptimistic } from "next-sanity/hooks"

const { projectId, dataset, stega } = client.config()
export const createDataAttributeConfig = {
	projectId,
	dataset,
	baseUrl: typeof stega.studioUrl === "string" ? stega.studioUrl : "",
}

export function RelatedArticles({
	relatedArticles,
	documentId,
	documentType,
}: {
	relatedArticles: NonNullable<ARTICLE_QUERYResult>["relatedArticles"]
	documentId: string
	documentType: string
}) {
	const articles = useOptimistic<
		NonNullable<ARTICLE_QUERYResult>["relatedArticles"] | undefined,
		NonNullable<ARTICLE_QUERYResult>
	>(relatedArticles, (state, action) => {
		if (action.id === documentId && action?.document?.relatedArticles) {
			// Optimistic document only has _ref values, not resolved references
			return action.document.relatedArticles.map(
				(article) =>
					state?.find((p) => p._key === article._key) ?? article
			)
		}
		return state
	})
	if (!articles) {
		return null
	}
	return (
		<aside className="container mx-auto my-24 px-6">
			<h2 className="mb-8 text-left text-1xl sm:text-2xl lg:text-2xl font-bold">
				Related articles
			</h2>
			<div className="">
				<ul
					className="flex flex-col"
					data-sanity={createDataAttribute({
						...createDataAttributeConfig,
						id: documentId,
						type: documentType,
						path: "relatedArticles",
					}).toString()}
				>
					{articles.map((article) => (
						<li
							key={article._key}
							className="py-8 text-left text-2xl sm:text-4xl lg:text-6xl font-bold border-t border-neutral-800 hover:text-neutral-600 transition duration-300"
							data-sanity={createDataAttribute({
								...createDataAttributeConfig,
								id: documentId,
								type: documentType,
								path: `relatedArticles[_key=="${article._key}"]`,
							}).toString()}
						>
							<Link href={`/articles/${article?.slug?.current}`}>
								{article.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</aside>
	)
}
