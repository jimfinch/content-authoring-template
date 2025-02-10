import { sanityFetch } from "@/sanity/lib/live"
import { ARTICLE_QUERY } from "@/sanity/lib/queries"
import { Article } from "@/app/(frontend)/_components/article/Article"
import { notFound } from "next/navigation"
import { Metadata } from "next"

type RouteProps = {
	params: Promise<{ slug: string }>
}

const getPage = async (params: RouteProps["params"]) =>
	sanityFetch({
		query: ARTICLE_QUERY,
		params: await params,
	})

export async function generateMetadata({
	params,
}: RouteProps): Promise<Metadata> {
	const { data: article } = await getPage(params)

	return {
		title: article.title,
	}
}

export default async function Page({ params }: RouteProps) {
	const { data: article } = await getPage(params)
	if (!article) {
		notFound()
	}

	return (
		<main className="pt-40">
			<Article {...article} />
		</main>
	)
}
