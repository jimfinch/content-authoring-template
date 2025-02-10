import { PageBuilder } from "@/app/(frontend)/_components/pagebuilder/PageBuilder"
import { sanityFetch } from "@/sanity/lib/live"
import { PAGE_QUERY } from "@/sanity/lib/queries"
import { notFound } from "next/navigation"
import { Metadata } from "next"

type RouteProps = {
	params: Promise<{ slug: string }>
}

const getPage = async (params: RouteProps["params"]) =>
	sanityFetch({
		query: PAGE_QUERY,
		params: await params,
	})

export async function generateMetadata({
	params,
}: RouteProps): Promise<Metadata> {
	const { data: page } = await getPage(params)

	return {
		title: page.title,
	}
}

export default async function Page({ params }: RouteProps) {
	const { data: page } = await getPage(params)

	if (!page) {
		notFound()
	}

	return page?.content ? <PageBuilder content={page.content} /> : null
}
