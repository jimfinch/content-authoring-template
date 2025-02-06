"use client"

import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { PAGE_QUERYResult } from "@/sanity/types"
import { stegaClean } from "next-sanity"
import { motion } from "motion/react"

type SplitImageProps = Extract<
	NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
	{ _type: "splitImage" }
>

export function SplitImage({ title, image, orientation }: SplitImageProps) {
	const fadeIn = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	}

	const slideFadeIn = {
		initial: { y: "48px", opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: "48px", opacity: 0 },
	}

	return (
		<section
			className="container mx-auto flex gap-20 py-24 data-[orientation='imageRight']:flex-row-reverse"
			data-orientation={stegaClean(orientation) || "imageLeft"}
		>
			{image ? (
				<motion.div
					variants={fadeIn}
					transition={{ duration: 0.75 }}
					initial="initial"
					whileInView="animate"
					exit="exit"
					className="w-2/3 h-auto"
				>
					<Image
						className="rounded-md w-full h-auto"
						src={urlFor(image).width(800).height(500).url()}
						width={800}
						height={500}
						alt={image.alt || title || ""}
					/>
				</motion.div>
			) : null}
			<motion.div
				variants={slideFadeIn}
				transition={{ duration: 0.75 }}
				initial="initial"
				whileInView="animate"
				exit="exit"
				className="w-1/3 flex items-start"
			>
				{title ? (
					<h2 className="sticky top-20 text-2xl leading-normal sm:text-3xl sm:leading-snug lg:text-4xl lg:leading-tight text-pretty">
						{title}
					</h2>
				) : null}
			</motion.div>
		</section>
	)
}
