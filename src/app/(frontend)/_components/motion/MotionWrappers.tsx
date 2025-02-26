"use client"

import { motion } from "motion/react"
import { animations } from "@/app/(frontend)/_utils/animations"
import { PropsWithChildren } from "react"

export function FadeScaleUpWrapper({ children }: PropsWithChildren) {
	return (
		<motion.div
			variants={animations.fadeScaleUp}
			transition={{ duration: 0.75 }}
			initial="initial"
			whileInView="animate"
			exit="exit"
			viewport={{ amount: 0.1 }}
		>
			{children}
		</motion.div>
	)
}

export function SlideFromLeftWrapper({ children }: PropsWithChildren) {
	return (
		<motion.div
			variants={animations.slideFromLeft}
			transition={{ duration: 0.75 }}
			initial="initial"
			whileInView="animate"
			exit="exit"
		>
			{children}
		</motion.div>
	)
}
