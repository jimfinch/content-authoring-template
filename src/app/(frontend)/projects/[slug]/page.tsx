import { sanityFetch } from "@/sanity/lib/live"
import { PROJECT_QUERY } from "@/sanity/lib/queries"
import { Project } from "@/app/(frontend)/_components/projects/Project"
import { notFound } from "next/navigation"
import { Metadata } from "next"

type RouteProps = {
	params: Promise<{ slug: string }>
}

const getPage = async (params: RouteProps["params"]) =>
	sanityFetch({
		query: PROJECT_QUERY,
		params: await params,
	})

export async function generateMetadata({
	params,
}: RouteProps): Promise<Metadata> {
	const { data: project } = await getPage(params)

	return {
		title: project?.seoTitle,
		description: project?.seoDescription,
	}
}

export default async function Page({ params }: RouteProps) {
	const { data: project } = await getPage(params)

	if (!project) {
		notFound()
	}

	return (
		<main className="pt-40">
			<Project {...project} />
		</main>
	)
}
