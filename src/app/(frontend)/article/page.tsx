import { sanityFetch } from "@/sanity/lib/live"
import { ARTICLES_QUERY } from "@/sanity/lib/queries"
import { ArticleCard } from "@/app/(frontend)/_components/article/ArticleCard"
import { Title } from "@/app/(frontend)/_components/title/Title"

export default async function Page() {
	const { data: articles } = await sanityFetch({ query: ARTICLES_QUERY })

	return (
		<main className="container mx-auto grid grid-cols-1 gap-6 py-40 px-6">
			<Title className="mb-12 text-center text-4xl sm:text-6xl lg:text-8xl font-bold">
				Article Index
			</Title>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-12 lg:gap-20">
				{articles.map((article) => (
					<ArticleCard key={article._id} {...article} />
				))}
			</div>
		</main>
	)
}
