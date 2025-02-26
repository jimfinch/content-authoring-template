import { sanityFetch } from "@/sanity/lib/live"
import { CATEGORY_QUERY } from "@/sanity/lib/queries"
import { notFound } from "next/navigation"
import { ArticleCard } from "@/app/(frontend)/_components/articles/ArticleCard"
import { ProjectCard } from "@/app/(frontend)/_components/projects/ProjectCard"
import { Container } from "@/app/(frontend)/_components/layout/Container"
import { Title } from "@/app/(frontend)/_components/title/Title"

type RouteProps = {
	params: Promise<{ slug: string }>
}

const getCategory = async (params: RouteProps["params"]) =>
	sanityFetch({
		query: CATEGORY_QUERY,
		params: await params,
	})

export default async function CategoryPage({ params }: RouteProps) {
	const { data: category } = await getCategory(params)

	if (!category) {
		notFound()
	}

	return (
		<main className="container mx-auto grid grid-cols-1 gap-6 py-40 px-6">
			<Container>
				<Title className="mb-12">{category.title}</Title>

				{category.articles && category.articles.length > 0 && (
					<>
						<h2 className="text-2xl mb-8">Articles</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 mb-24">
							{category.articles.map((article) => (
								<ArticleCard key={article._id} {...article} />
							))}
						</div>
					</>
				)}

				{category.projects && category.projects.length > 0 && (
					<>
						<h2 className="text-2xl mb-8">Projects</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
							{category.projects.map((project) => (
								<ProjectCard key={project._id} {...project} />
							))}
						</div>
					</>
				)}
			</Container>
		</main>
	)
}
