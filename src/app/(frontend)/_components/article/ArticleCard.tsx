"use client"

import { Author } from "@/app/(frontend)/_components/author/Author"
import { Categories } from "@/app/(frontend)/_components/categories/Categories"
import { ARTICLE_QUERYResult } from "@/sanity/types"
import { PublishedAt } from "@/app/(frontend)/_components/published/Published"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

export function ArticleCard(props: ARTICLE_QUERYResult[0]) {
	const { title, author, mainImage, publishedAt, categories } = props

	const fadeInUp = {
		initial: { y: "48px", opacity: 0 },
		animate: { y: "0", opacity: 1 },
		exit: { y: "48px", opacity: 0 },
	}

	return (
		<Link href={`/article/${props.slug!.current}`}>
			<motion.article
				variants={fadeInUp}
				transition={{ duration: 0.75 }}
				initial="initial"
				whileInView="animate"
				exit="exit"
				className="w-full"
			>
				{mainImage ? (
					<Image
						src={urlFor(mainImage).width(400).height(460).url()}
						width={400}
						height={460}
						alt={mainImage.alt || title || ""}
						className="rounded-md w-full h-auto"
					/>
				) : null}
				<div>
					<h2 className="text-2xl mt-3">{title}</h2>
					<div className="flex flex-row items-center mb-12">
						<Author author={author} />
						<span className="text-neutral-500 font-bold">
							,&nbsp;
						</span>
						<PublishedAt publishedAt={publishedAt} />
					</div>
				</div>
				<div className="flex flex-wrap gap-4 mt-4">
					{categories && <Categories categories={categories} />}
				</div>
			</motion.article>
		</Link>
	)
}
