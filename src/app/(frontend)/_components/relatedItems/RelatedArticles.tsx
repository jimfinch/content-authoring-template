"use client"

import { BaseRelatedItems } from "./BaseRelatedItems"
import { ARTICLE_QUERYResult } from "@/sanity/types"

interface RelatedArticlesProps {
	relatedArticles: NonNullable<ARTICLE_QUERYResult>["relatedArticles"]
	documentId: string
	documentType: string
}

export function RelatedArticles({
	relatedArticles,
	documentId,
	documentType,
}: RelatedArticlesProps) {
	return (
		<BaseRelatedItems
			items={relatedArticles}
			documentId={documentId}
			documentType={documentType}
			title="Related articles"
			pathKey="relatedArticles"
			urlPrefix="articles"
		/>
	)
}
