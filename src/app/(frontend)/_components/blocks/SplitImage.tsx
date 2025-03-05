"use client"

import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { PAGE_QUERYResult } from "@/sanity/types"
import { stegaClean } from "next-sanity"
import { motion } from "motion/react"
import { animations } from "@/app/(frontend)/_utils/animations"
type SplitImageProps = Extract<
	NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
	{
		_type: "splitImage"
	}
>

export function SplitImage({ title, image, orientation }: SplitImageProps) {
	return (
		<section
			className="container mx-auto flex flex-col lg:flex-row gap-12 md:gap-20 px-6 lg:px-10 py-6 md:py-24 lg:data-[orientation='imageRight']:flex-row-reverse"
			data-orientation={stegaClean(orientation) || "imageLeft"}
		>
			{image ? (
				<motion.div
					variants={animations.scaleFadeIn}
					transition={{ duration: 0.75 }}
					initial="initial"
					whileInView="animate"
					exit="exit"
					viewport={{ amount: 0.1 }}
					className="w-full lg:w-2/3 h-auto"
				>
					<Image
						className="rounded-md w-full h-auto"
						src={urlFor(image).width(1024).height(768).url()}
						width={1024}
						height={768}
						alt={image.alt || title || ""}
					/>
				</motion.div>
			) : null}
			<motion.div
				variants={animations.slideFadeIn}
				transition={{ duration: 0.75 }}
				initial="initial"
				whileInView="animate"
				exit="exit"
				className="w-full lg:w-1/3 flex items-start"
			>
				{title ? (
					<h2 className="sticky top-20 prose-lg leading-normal sm:text-3xl sm:leading-snug lg:text-3xl xl:text-4xl xl:leading-tight text-pretty">
						{title}
					</h2>
				) : null}
			</motion.div>
		</section>
	)
}
