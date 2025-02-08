"use client"

import { Categories } from "@/app/(frontend)/_components/categories/Categories"
import { PROJECT_QUERYResult } from "@/sanity/types"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

export function ProjectCard(props: PROJECT_QUERYResult[0]) {
	const { title, mainImage, categories } = props

	const fadeInUp = {
		initial: { y: "48px", opacity: 0 },
		animate: { y: "0", opacity: 1 },
		exit: { y: "48px", opacity: 0 },
	}

	return (
		<Link href={`/project/${props.slug!.current}`}>
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
				<h2 className="text-2xl mt-3">{title}</h2>
				<div className="flex gap-4 mt-4">
					{categories && <Categories categories={categories} />}
				</div>
			</motion.article>
		</Link>
	)
}
