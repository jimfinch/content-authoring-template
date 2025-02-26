"use client"

import Link from "next/link"
import { createDataAttribute } from "next-sanity"
import { client } from "@/sanity/lib/client"
import { useOptimistic } from "next-sanity/hooks"
import { BaseDocument } from "@/app/(frontend)/_types/shared"

const { projectId, dataset, stega } = client.config()

interface RelatedItemsProps {
	items: BaseDocument[]
	documentId: string
	documentType: string
	title: string
	pathKey: string
	urlPrefix: string
}

export function BaseRelatedItems({
	items,
	documentId,
	documentType,
	title,
	pathKey,
	urlPrefix,
}: RelatedItemsProps) {
	const optimisticItems = useOptimistic(items, (state, action) => {
		if (action.id === documentId && action?.document?.[pathKey]) {
			return action.document[pathKey].map(
				(item: BaseDocument) =>
					state?.find((p) => p._id === item._id) ?? item
			)
		}
		return state
	})

	if (!optimisticItems?.length) return null

	return (
		<aside className="container mx-auto my-24 px-6">
			<h2 className="mb-8 text-left text-1xl sm:text-2xl lg:text-2xl font-bold">
				{title}
			</h2>
			<ul className="flex flex-col">
				{optimisticItems.map((item) => (
					<li
						key={item._id}
						className="py-8 text-left text-2xl sm:text-4xl lg:text-6xl font-bold border-t border-neutral-800 hover:text-neutral-600 transition duration-300"
					>
						<Link href={`/${urlPrefix}/${item.slug?.current}`}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</aside>
	)
}
