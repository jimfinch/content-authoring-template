"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { urlFor } from "@/sanity/lib/image"
import { animations } from "@/app/(frontend)/_utils/animations"
import { BaseDocument } from "@/app/(frontend)/_types/shared"

interface BaseCardProps extends BaseDocument {
	href: string
	children?: React.ReactNode
	className?: string
}

export function BaseCard({
	href,
	title,
	mainImage,
	children,
	className = "",
}: BaseCardProps) {
	return (
		<motion.article
			variants={animations.fadeScaleUp}
			transition={{ duration: 0.75 }}
			initial="initial"
			whileInView="animate"
			exit="exit"
			viewport={{ amount: 0.1 }}
			className={`group w-full ${className}`}
		>
			<Link href={href} className="block">
				{mainImage && (
					<div className="rounded-md overflow-hidden">
						<Image
							src={urlFor(mainImage).width(500).height(600).url()}
							width={500}
							height={600}
							alt={mainImage.alt || title || ""}
							className="rounded-md w-full h-auto transition-all duration-500 group-hover:scale-110"
						/>
					</div>
				)}
				<h2 className="text-2xl mt-3">{title}</h2>
			</Link>
			<div className="mt-3">{children}</div>
		</motion.article>
	)
}
