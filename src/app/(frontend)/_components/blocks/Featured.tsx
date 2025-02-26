"use client"

import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { Categories } from "../categories/Categories"
import { Author } from "../author/Author"
import { PublishedAt } from "../published/Published"
import { generateUrl } from "@/app/(frontend)/_utils/urlHelpers"
import { motion } from "motion/react"

type Document = {
	_id: string
	mainImage?: {
		alt?: string
	}
	title?: string
	_type: string
	author?: any
	publishedAt?: string
	categories?: any[]
	slug: {
		current: string
	}
}

type Statement = {
	title?: string
	documents: Document[]
}

export function Featured({ title, documents }: Statement) {
	const fadeScaleUp = {
		initial: { y: "48px", opacity: 0, scale: 0.9 },
		animate: { y: "0", opacity: 1, scale: 1 },
		exit: { y: "48px", opacity: 0, scale: 0.9 },
	}

	const slideFromLeft = {
		initial: { marginLeft: "-60px" },
		animate: { marginLeft: "0px" },
		exit: { marginLeft: "-60px" },
	}

	return (
		<section className="py-12 md:py-24">
			{title ? (
				<div className="pb-7 mb-12 md:mb-20 border-b border-solid border-b-neutral-800">
					<div className="container mx-auto px-6 lg:px-10">
						<motion.h3
							variants={slideFromLeft}
							transition={{ duration: 0.75 }}
							initial="initial"
							whileInView="animate"
							exit="exit"
							className="text-4xl"
						>
							{title}
						</motion.h3>
					</div>
				</div>
			) : null}
			<div className="container mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
				{documents &&
					documents.map((document) => (
						<Link
							key={document._id}
							href={generateUrl({
								documentType: document._type,
								slug: document.slug?.current,
							})}
						>
							<motion.article
								variants={fadeScaleUp}
								transition={{ duration: 0.75 }}
								initial="initial"
								whileInView="animate"
								exit="exit"
								viewport={{ amount: 0.1 }}
								className="group w-full"
							>
								{document.mainImage ? (
									<div className="rounded-md overflow-hidden">
										<Image
											src={urlFor(document.mainImage)
												.width(500)
												.height(600)
												.url()}
											width={500}
											height={600}
											alt={
												document.mainImage.alt ||
												document.title ||
												""
											}
											className="w-full h-auto transition-all duration-500 group-hover:scale-110"
										/>
									</div>
								) : null}
								<div>
									<h2 className="text-2xl mt-3">
										{document.title}
									</h2>

									{/* Render author if matches article type */}
									{document._type == "articles" ? (
										<div>
											<Author
												className="mt-3 mb-4"
												author={document.author}
											/>
											<PublishedAt
												publishedAt={
													document.publishedAt || null
												}
											/>
										</div>
									) : null}
								</div>
								{document.categories && (
									<div className="flex flex-wrap gap-4 mt-4">
										<Categories
											categories={document.categories}
										/>
									</div>
								)}
							</motion.article>
						</Link>
					))}
			</div>
		</section>
	)
}
