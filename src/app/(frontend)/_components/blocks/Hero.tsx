"use client"

import { useRef } from "react"
import { PortableText } from "next-sanity"
import Image from "next/image"
import { Title } from "@/app/(frontend)/_components/title/Title"
import { urlFor } from "@/sanity/lib/image"
import { PAGE_QUERYResult } from "@/sanity/types"
import Video from "../video/Video"
import { motion } from "motion/react"
import Link from "next/link"
import { generateUrl } from "@/app/(frontend)/_utils/urlHelpers"
import { animations } from "@/app/(frontend)/_utils/animations"
import { useScrollPosition } from "@/app/(frontend)/_hooks/useScrollPosition"

type HeroProps = Extract<
	NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
	{
		_type: "hero"
	}
> & {
	title: string
	text: string
	image: object
	video: object
	linkText: string
	url: string
}

export function Hero({ title, text, image, video, linkText, url }: HeroProps) {
	const scrollRef = useRef(null)
	const { opacity } = useScrollPosition(scrollRef)

	return (
		<section
			ref={scrollRef}
			className="isolate w-full h-screen relative overflow-hidden py-16 px-6 lg:px-10 mb-20"
		>
			{/* Text content */}
			<div className="relative container mx-auto flex justify-start items-center gap-8 h-full z-20">
				<div>
					{title ? (
						<motion.div
							variants={animations.slideFromLeft}
							transition={{ duration: 0.8 }}
							initial="initial"
							whileInView="animate"
							exit="exit"
						>
							<Title className="lg:w-2/3 text-5xl leading-snug sm:text-6xl sm:leading-snug lg:text-8xl lg:leading-tight text-left font-bold">
								{title}
							</Title>
						</motion.div>
					) : null}
					{text ? (
						<motion.div
							variants={animations.slideFromLeft}
							transition={{ duration: 0.8 }}
							initial="initial"
							whileInView="animate"
							exit="exit"
							className="prose-lg lg:prose-xl prose-invert flex items-center mt-4"
						>
							<PortableText value={text} />
						</motion.div>
					) : null}
					{url && (
						<motion.div
							variants={animations.slideFromLeft}
							transition={{ duration: 1 }}
							initial="initial"
							whileInView="animate"
							exit="exit"
							className="prose-lg lg:prose-xl prose-invert flex items-center mt-7"
						>
							<Link
								href={generateUrl(url)}
								className="flex w-fit rounded-full border border-solid border-white px-5 py-2 transition duration-300 ease-in-out font-bold"
							>
								{linkText ? linkText : "Add link text"}
							</Link>
						</motion.div>
					)}
				</div>
			</div>
			{/* Video or image display */}
			<div className="absolute inset-0 bg-black opacity-60 z-10" />
			{video ? (
				<motion.div
					className="absolute top-0 bottom-0 left-0 right-0 z-0"
					style={{
						opacity: opacity,
					}}
				>
					<Video
						src={video.url}
						autoPlay
						loop
						muted
						controls={false}
						className="w-full h-full min-h-full object-cover"
					/>
				</motion.div>
			) : (
				<Image
					priority
					className="absolute inset-0 object-cover blur-sm w-full h-auto"
					src={urlFor(image).width(1600).height(800).url()}
					width={1600}
					height={800}
					alt={image.alt || title || ""}
				/>
			)}
		</section>
	)
}
