import { PageBuilder } from "@/app/(frontend)/_components/pagebuilder/PageBuilder"
import { sanityFetch } from "@/sanity/lib/live"
import { PAGE_QUERY } from "@/sanity/lib/queries"

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { data: page } = await sanityFetch({
		query: PAGE_QUERY,
		params: await params,
	})

	console.log(page)

	return page?.content ? <PageBuilder content={page.content} /> : null
}
