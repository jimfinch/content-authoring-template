"use client"

import { PAGE_QUERYResult } from "@/sanity/types"
import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type Statement = Extract<
	NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
	{
		_type: "animatedText"
	}
>

export function AnimatedText({ title }: Statement) {
	const slider = useRef(null)
	const firstText = useRef(null)
	const secondText = useRef(null)
	let xPercent = 0
	let direction = -1

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				start: 0,
				end: window.innerHeight,
				scrub: 0.25,
				onUpdate: (e) => {
					direction = e.direction * -1
				},
			},
			x: "-=300px",
		})

		slider.current = requestAnimationFrame(animation)
		return () => {
			cancelAnimationFrame(slider.current)
		}
	}, [slider])

	const animation = () => {
		if (xPercent <= -100) {
			xPercent = 0
		}
		if (xPercent > 0) {
			xPercent = -100
		}
		gsap.set(firstText.current, { xPercent: xPercent })
		gsap.set(secondText.current, { xPercent: xPercent })
		xPercent += 0.1 * direction
		slider.current = requestAnimationFrame(animation)
	}

	return (
		<section className="relative flex h-28 lg:h-40 w-full overflow-hidden">
			<div
				ref={slider}
				className="absolute h-28 lg:h-40 whitespace-nowrap overflow-hidden"
			>
				<p
					ref={firstText}
					className="relative text-6xl lg:text-9xl leading-tight pr-6"
				>
					{title}
				</p>
				<p
					ref={secondText}
					className="absolute top-0 text-6xl lg:text-9xl leading-tight pr-6 left-[100%]"
				>
					{title}
				</p>
			</div>
		</section>
	)
}
