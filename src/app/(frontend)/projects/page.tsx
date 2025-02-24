import { sanityFetch } from "@/sanity/lib/live"
import { PROJECTS_QUERY } from "@/sanity/lib/queries"
import { ProjectCard } from "@/app/(frontend)/_components/projects/ProjectCard"
import { Title } from "@/app/(frontend)/_components/title/Title"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Project Index - Content Authoring Boilerplate",
	description: "Project Index Descripton",
}

export default async function Page() {
	const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY })

	return (
		<main className="container mx-auto grid grid-cols-1 gap-6 py-40 px-6">
			<Title className="mb-12 text-center text-4xl sm:text-6xl lg:text-8xl font-bold">
				Project Index
			</Title>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-12 lg:gap-20">
				{projects.map((project) => (
					<ProjectCard key={project._id} {...project} />
				))}
			</div>
		</main>
	)
}
