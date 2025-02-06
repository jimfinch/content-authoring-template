"use client"

import { PAGE_QUERYResult } from "@/sanity/types"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { Categories } from "../categories/Categories"
import { Author } from "../author/Author"
import { PublishedAt } from "../published/Published"
import HandleSlug from "../_utils/handleSlug"
import { motion } from "motion/react"

type Statment = Extract<
	NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
	{ _type: "featured" }
> & {
	documents: Array<{
		_id?: string
		categories: Array<{ title: string }>
		mainImage?: { alt?: string }
		title?: string
		_type?: string
		author?: string
		publishedAt?: string
	}>
}

export function Featured({ title, documents }: Statment) {
	console.log(documents)
	return (
		<section className="mx-auto py-24">
			{title ? (
				<div className="pb-7 mb-20 border-b border-solid border-b-neutral-800">
					<h3 className="container mx-auto text-4xl">{title}</h3>
				</div>
			) : null}
			<div className="container mx-auto grid grid-cols-3 gap-x-20 gap-y-20">
				{documents &&
					documents.map((document) => (
						<Link key={document._id} href={HandleSlug(document)}>
							<motion.article className="w-full">
								{document.mainImage ? (
									<Image
										src={urlFor(document.mainImage)
											.width(400)
											.height(460)
											.url()}
										width={400}
										height={460}
										alt={
											document.mainImage.alt ||
											document.title ||
											""
										}
										className="rounded-md w-full h-auto"
									/>
								) : null}
								<div>
									<h2 className="text-2xl mt-3">
										{document.title}
									</h2>

									{/* Render author if matches article type */}
									{document._type == "article" ? (
										<div>
											<Author author={document.author} />
											<PublishedAt
												publishedAt={
													document.publishedAt
												}
											/>
										</div>
									) : null}
								</div>

								<div className="flex gap-4 mt-4">
									<Categories
										categories={document.categories}
									/>
								</div>
							</motion.article>
						</Link>
					))}
			</div>
		</section>
	)
}
