"use client"

import { useRef } from "react"
import { PortableText } from "next-sanity"
import Image from "next/image"
import { Title } from "@/app/(frontend)/_components/title/Title"
import { urlFor } from "@/sanity/lib/image"
import { PAGE_QUERYResult } from "@/sanity/types"
import Video from "../video/Video"
import { motion, useScroll, useTransform } from "motion/react"
import Link from "next/link"
import HandleUrl from "../_utils/handleUrl"

type HeroProps = Extract<
	NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
	{
		_type: "hero"
	}
>

export function Hero({ title, text, image, video, linkText, url }: HeroProps) {
	// Motion config
	const scrollRef = useRef(null)

	const { scrollYProgress } = useScroll({
		target: scrollRef,
		offset: ["start start", "end start"],
	})

	const opacity = useTransform(scrollYProgress, [1, 0], [0, 1])

	const slideFromLeft = {
		initial: { marginLeft: "-60px" },
		animate: { marginLeft: "0px" },
		exit: { marginLeft: "-60px" },
	}

	return (
		<section
			ref={scrollRef}
			className="isolate w-full h-screen py-16 relative overflow-hidden px-6 mb-20"
		>
			{/* Text content */}
			<div className="relative container mx-auto flex justify-start items-center gap-8 h-full z-20">
				<div>
					{title ? (
						<motion.div
							variants={slideFromLeft}
							transition={{ duration: 0.8 }}
							initial="initial"
							whileInView="animate"
							exit="exit"
						>
							<Title className="text-4xl sm:text-6xl lg:text-8xl text-left font-bold">
								{title}
							</Title>
						</motion.div>
					) : null}
					{text ? (
						<motion.div
							variants={slideFromLeft}
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
							variants={slideFromLeft}
							transition={{ duration: 1 }}
							initial="initial"
							whileInView="animate"
							exit="exit"
							className="prose-lg lg:prose-xl prose-invert flex items-center mt-7"
						>
							<Link
								href={HandleUrl(url)}
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
