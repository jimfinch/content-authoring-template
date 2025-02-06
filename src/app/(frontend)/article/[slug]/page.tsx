import { sanityFetch } from "@/sanity/lib/live"
import { ARTICLE_QUERY } from "@/sanity/lib/queries"
import { Article } from "@/app/(frontend)/_components/article/Article"
import { notFound } from "next/navigation"

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { data: article } = await sanityFetch({
		query: ARTICLE_QUERY,
		params: await params,
	})

	if (!article) {
		notFound()
	}

	return (
		<main className="container mx-auto grid grid-cols-1 gap-6 p-12">
			<Article {...article} />
		</main>
	)
}
