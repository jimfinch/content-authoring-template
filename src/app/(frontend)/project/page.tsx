import { sanityFetch } from "@/sanity/lib/live"
import { PROJECTS_QUERY } from "@/sanity/lib/queries"
import { ProjectCard } from "@/app/(frontend)/_components/project/ProjectCard"
import { Title } from "@/app/(frontend)/_components/title/Title"

export default async function Page() {
	const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY })

	return (
		<main className="container mx-auto grid grid-cols-1 gap-6 p-12">
			<Title>Project Index</Title>
			<div>
				{projects.map((project) => (
					<ProjectCard key={project._id} {...project} />
				))}
			</div>
		</main>
	)
}
