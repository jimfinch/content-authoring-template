"use client"

import { BaseRelatedItems } from "./BaseRelatedItems"
import { PROJECT_QUERYResult } from "@/sanity/types"

interface RelatedProjectsProps {
	relatedProjects: NonNullable<PROJECT_QUERYResult>["relatedProjects"]
	documentId: string
	documentType: string
}

export function RelatedProjects({
	relatedProjects,
	documentId,
	documentType,
}: RelatedProjectsProps) {
	return (
		<BaseRelatedItems
			items={relatedProjects}
			documentId={documentId}
			documentType={documentType}
			title="Related projects"
			pathKey="relatedProjects"
			urlPrefix="projects"
		/>
	)
}
