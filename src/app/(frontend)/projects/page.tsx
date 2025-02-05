import Link from "next/link"
import { sanityFetch } from "@/sanity/lib/live"
import { PROJECTS_QUERY } from "@/sanity/lib/queries"

const options = { next: { revalidate: 60 } }

export default async function Page() {
	const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY })

	return (
		<main className="container mx-auto grid grid-cols-1 gap-6 p-12">
			<h1 className="text-4xl font-bold">Post index</h1>
			<ul className="grid grid-cols-1 divide-y divide-blue-100">
				{projects.map((project) => (
					<li key={project._id}>
						<Link
							className="block p-4 hover:text-blue-500"
							href={`/projects/${project?.slug?.current}`}
						>
							{project?.title}
						</Link>
					</li>
				))}
			</ul>
			<hr />
			<Link href="/">&larr; Return home</Link>
		</main>
	)
}
