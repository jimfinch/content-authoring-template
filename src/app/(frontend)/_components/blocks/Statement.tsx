"use client"

import { PAGE_QUERYResult } from "@/sanity/types"
import { motion } from "motion/react"

type Statment = Extract<
	NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
	{ _type: "statement" }
>

export function Statement({ title }: Statment) {
	const slideFadeFromBottom = {
		initial: { x: "-48px", opacity: 0 },
		animate: { x: "0px", opacity: 1 },
		exit: { x: "-48px", opacity: 0 },
	}

	return (
		<section className="container mx-auto flex gap-8 px-6 py-24">
			<motion.div
				variants={slideFadeFromBottom}
				transition={{ duration: 1 }}
				initial="initial"
				whileInView="animate"
				exit="exit"
				className="lg:w-2/3 flex items-center"
			>
				{title ? (
					<h2 className="text-4xl leading-normal sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-tight text-left mb-12">
						{title}
					</h2>
				) : null}
			</motion.div>
		</section>
	)
}
