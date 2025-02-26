"use client"

import { BaseCard } from "@/app/(frontend)/_components/cards/BaseCard"
import { Categories } from "@/app/(frontend)/_components/categories/Categories"
import { PROJECT_QUERYResult } from "@/sanity/types"

export function ProjectCard(props: PROJECT_QUERYResult[0]) {
	const { title, mainImage, categories, slug, _id } = props

	return (
		<BaseCard
			href={`/projects/${slug.current}`}
			title={title}
			mainImage={mainImage}
			_id={_id}
			_type="project"
			slug={slug}
		>
			<div className="flex flex-wrap gap-4 mt-4">
				{categories && <Categories categories={categories} />}
			</div>
		</BaseCard>
	)
}
