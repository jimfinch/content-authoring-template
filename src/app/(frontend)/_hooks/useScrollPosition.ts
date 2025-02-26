"use client"

import { useScroll, useTransform } from "motion/react"
import { RefObject } from "react"

export function useScrollPosition(ref: RefObject<HTMLElement>) {
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	})

	const opacity = useTransform(scrollYProgress, [1, 0], [0, 1])

	return { opacity }
}
