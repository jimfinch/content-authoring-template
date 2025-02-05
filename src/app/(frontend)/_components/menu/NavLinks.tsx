"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { useRef, useState } from "react"

interface NavItem {
	_key: string
	url: {
		documentType: string
		internalUrl?: string
		manualUrl?: string
		externalUrl?: string
	}
	text: string
}

interface NavLinksProps {
	items: NavItem[]
}

const NavListItem = ({
	children,
	className,
	setPosition,
	...props
}: {
	children: React.ReactNode
	className?: string
	setPosition?: any
}) => {
	const ref = useRef<HTMLLIElement>(null)

	return (
		<li
			ref={ref}
			onMouseEnter={() => {
				if (!ref.current) return

				const { width } = ref.current.getBoundingClientRect()

				setPosition({
					width,
					opacity: 1,
					left: ref.current.offsetLeft,
				})
			}}
			className={className}
			{...props}
		>
			{children}
		</li>
	)
}

const Cursor = ({
	position,
}: {
	position: { left: number; width: number; opacity: number }
}) => {
	return (
		<motion.li
			animate={position}
			className="absolute h-[42px] rounded-full bg-white"
		/>
	)
}

export function NavLinks({ items }: NavLinksProps) {
	const ref = useRef<HTMLLIElement>(null)

	const [position, setPosition] = useState({
		left: 0,
		width: 0,
		opacity: 0,
	})

	return (
		<ul
			onMouseLeave={() =>
				setPosition((pv) => ({
					...pv,
					opacity: 0,
				}))
			}
			className="relative flex w-fit gap-2 rounded-full bg-neutral-700 bg-opacity-20 py-2 px-3 backdrop-blur-xl"
		>
			{items?.map((item) => (
				<NavListItem
					setPosition={setPosition}
					key={item._key}
					className="relative z-10 flex cursor-pointer items-center text-white mix-blend-difference"
				>
					{item.url.internalUrl && (
						<Link
							href={
								item.url.documentType == "page"
									? item.url.internalUrl
									: "/" +
										item.url.documentType +
										"/" +
										item.url.internalUrl
							}
							className="rounded-full bg-opacity-50 px-5 py-2 transition duration-300 ease-in-out font-bold"
						>
							{item.text}
						</Link>
					)}
					{item.url.manualUrl && (
						<Link
							href={item.url.manualUrl}
							className="rounded-full bg-opacity-50 px-5 py-2 transition duration-300 ease-in-out font-bold"
						>
							{item.text}
						</Link>
					)}
					{item.url.externalUrl && (
						<Link
							href={item.url.externalUrl}
							rel="noopener noreferrer"
							target="_blank"
							className="rounded-full bg-opacity-50 px-5 py-2 transition duration-300 ease-in-out font-bold"
						>
							{item.text}
						</Link>
					)}
				</NavListItem>
			))}

			<Cursor position={position} />
		</ul>
	)
}
