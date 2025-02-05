import Link from "next/link"
import { sanityFetch } from "@/sanity/lib/live"
import { ARTICLES_QUERY } from "@/sanity/lib/queries"

const options = { next: { revalidate: 60 } }

export default async function Page() {
	const { data: articles } = await sanityFetch({ query: ARTICLES_QUERY })

	return (
		<main className="container mx-auto grid grid-cols-1 gap-6 p-12">
			<h1 className="text-4xl font-bold">Post index</h1>
			<ul className="grid grid-cols-1 divide-y divide-blue-100">
				{articles.map((article) => (
					<li key={article._id}>
						<Link
							className="block p-4 hover:text-blue-500"
							href={`/articles/${article?.slug?.current}`}
						>
							{article?.title}
						</Link>
					</li>
				))}
			</ul>
			<hr />
			<Link href="/">&larr; Return home</Link>
		</main>
	)
}
