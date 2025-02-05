import { sanityFetch } from "@/sanity/lib/live"
import { PROJECT_QUERY } from "@/sanity/lib/queries"
import { Project } from "@/app/(frontend)/_components/project/Project"
import { notFound } from "next/navigation"

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { data: project } = await sanityFetch({
		query: PROJECT_QUERY,
		params: await params,
	})

	if (!project) {
		notFound()
	}

	return (
		<main>
			<Project {...project} />
		</main>
	)
}
