import { HOME_PAGE_QUERY } from "@/sanity/lib/queries"
import { PageBuilder } from "@/app/(frontend)/_components/pagebuilder/PageBuilder"
import { sanityFetch } from "@/sanity/lib/live"
import { notFound } from "next/navigation"

export default async function Page() {
	const { data: page } = await sanityFetch({
		query: HOME_PAGE_QUERY,
	})

	if (!page) {
		notFound()
	}

	return page?.homePage?.content ? (
		<PageBuilder content={page?.homePage.content} />
	) : null
}
