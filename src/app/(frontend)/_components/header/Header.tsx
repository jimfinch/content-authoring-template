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
	const [position, setPosition] = useState(0)
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		if (typeof window !== "undefined") {
			setPosition(window.pageYOffset)

			const handleScroll = () => {
				let moving = window.pageYOffset
				setVisible(position > moving)
				setPosition(moving)
			}

			window.addEventListener("scroll", handleScroll)
			return () => window.removeEventListener("scroll", handleScroll)
		}
	}, [position])

	const cls = visible ? "up" : "down"
	return (
		<header className={`group ${cls} ${className}`} {...props}>
			{children}
		</header>
	)
}
