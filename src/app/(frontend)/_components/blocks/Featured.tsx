"use client"

import { Author } from "../author/Author"
import { PublishedAt } from "../published/Published"
import { Categories } from "../categories/Categories"
import { BaseCard } from "../cards/BaseCard"
import { motion } from "motion/react"
import { generateUrl } from "@/app/(frontend)/_utils/urlHelpers"
import { animations } from "@/app/(frontend)/_utils/animations"
import { PAGE_QUERYResult } from "@/sanity/types"

type Document = {
	_ref: string
	_type: "reference"
	_weak?: boolean
	_key?: string
}
type FeaturedProps = Extract<
	NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
	{
		_type: "featured"
	}
> & {
	title: string
	documents: Document[]
}

export function Featured({ title, documents }: FeaturedProps) {
	return (
		<section className="py-12 md:py-24">
			{title ? (
				<div className="pb-7 mb-12 md:mb-20 border-b border-solid border-b-neutral-800">
					<div className="container mx-auto px-6 lg:px-10">
						<motion.h3
							variants={animations.slideFromLeft}
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
					documents.map((document, index) => (
						<BaseCard
							key={index}
							href={generateUrl({
								documentType: document._type,
								slug: document.slug?.current,
							})}
							title={document.title}
							mainImage={document.mainImage}
							_id={document._id}
							_type={document._type}
							slug={document.slug}
						>
							{/* Render author if matches article type */}
							{document._type === "articles" ? (
								<div className="flex flex-row items-center">
									<Author
										className="mt-3 mb-4"
										author={document.author}
									/>
									<span className="text-neutral-500 font-bold">
										,&nbsp;
									</span>
									<PublishedAt
										publishedAt={
											document.publishedAt || null
										}
									/>
								</div>
							) : null}
							{document.categories && (
								<div className="flex flex-wrap gap-4 mt-4">
									<Categories
										categories={document.categories}
									/>
								</div>
							)}
						</BaseCard>
					))}
			</div>
		</section>
	)
}
