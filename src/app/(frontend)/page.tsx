import Link from "next/link"

export default async function Page() {
	return (
		<main>
			<section className="container mx-auto grid grid-cols-1 gap-6 p-12">
				<h1 className="text-4xl font-bold">Home</h1>
				<hr />
				<Link href="/projects">Project index &rarr;</Link>
				<Link href="/articles">Articles index &rarr;</Link>
			</section>
		</main>
	)
}
