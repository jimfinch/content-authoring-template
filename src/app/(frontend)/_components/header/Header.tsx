"use client"

import { useEffect, useState } from "react"

export default function Header({
	children,
	className,
	...props
}: {
	className?: string
	children: React.ReactNode
}) {
	const [show, setShow] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	const scrollDirection = () => {
		if (window.scrollY > lastScrollY) {
			// If scroll down add down class
			setShow(false)
		} else {
			// If scroll up add up class
			setShow(true)
		}

		// Remember current page scroll position to compare with new scroll position
		setLastScrollY(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener("scroll", scrollDirection)

		// Cleanup function
		return () => {
			window.removeEventListener("scroll", scrollDirection)
		}
	}, [lastScrollY])

	const scrollClass = show ? "up" : "down"

	return (
		<header className={`group ${scrollClass} ${className}`} {...props}>
			{children}
		</header>
	)
}
