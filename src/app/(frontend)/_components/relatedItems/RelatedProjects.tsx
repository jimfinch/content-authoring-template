"use client"

import Link from "next/link"
import { createDataAttribute } from "next-sanity"
import { PROJECT_QUERYResult } from "@/sanity/types"
import { client } from "@/sanity/lib/client"
import { useOptimistic } from "next-sanity/hooks"

const { projectId, dataset, stega } = client.config()
export const createDataAttributeConfig = {
	projectId,
	dataset,
	baseUrl: typeof stega.studioUrl === "string" ? stega.studioUrl : "",
}

export function RelatedProjects({
	relatedProjects,
	documentId,
	documentType,
}: {
	relatedProjects: NonNullable<PROJECT_QUERYResult>["relatedProjects"]
	documentId: string
	documentType: string
}) {
	const projects = useOptimistic<
		NonNullable<PROJECT_QUERYResult>["relatedProjects"] | undefined,
		NonNullable<PROJECT_QUERYResult>
	>(relatedProjects, (state, action) => {
		if (action.id === documentId && action?.document?.relatedProjects) {
			// Optimistic document only has _ref values, not resolved references
			return action.document.relatedProjects.map(
				(project) =>
					state?.find((p) => p._key === project._key) ?? project
			)
		}
		return state
	})
	if (!projects) {
		return null
	}
	return (
		<aside className="container mx-auto my-60 px-6">
			<h2 className="mb-8 text-left text-1xl sm:text-2xl lg:text-2xl font-bold">
				Related projects
			</h2>
			<div className="">
				<ul
					className="flex flex-col"
					data-sanity={createDataAttribute({
						...createDataAttributeConfig,
						id: documentId,
						type: documentType,
						path: "relatedProjects",
					}).toString()}
				>
					{projects.map((project) => (
						<li
							key={project._key}
							className="py-8 text-left text-2xl sm:text-4xl lg:text-6xl font-bold border-t border-neutral-800 hover:text-neutral-600 transition duration-300"
							data-sanity={createDataAttribute({
								...createDataAttributeConfig,
								id: documentId,
								type: documentType,
								path: `relatedProjects[_key=="${project._key}"]`,
							}).toString()}
						>
							<Link href={`/projects/${project?.slug?.current}`}>
								{project.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</aside>
	)
}
