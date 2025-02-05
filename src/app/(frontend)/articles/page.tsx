import { sanityFetch } from "@/sanity/lib/live"
import { ARTICLES_QUERY } from "@/sanity/lib/queries"
import { ArticleCard } from "@/app/(frontend)/_components/article/ArticleCard"
import { Title } from "@/app/(frontend)/_components/title/Title"

export default async function Page() {
	const { data: articles } = await sanityFetch({ query: ARTICLES_QUERY })

	return (
		<main>
			<Title>Article Index</Title>
			<div>
				{articles.map((article) => (
					<ArticleCard key={article._id} {...article} />
				))}
			</div>
		</main>
	)
}
