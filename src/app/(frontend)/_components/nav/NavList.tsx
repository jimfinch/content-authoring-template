"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { useRef, useState } from "react"
import { generateUrl } from "@/app/(frontend)/_utils/urlHelpers"

interface NavItem {
	_key: string
	text: string | null
	url: {
		documentType: "article" | "page" | "project" | null
		internalUrl?: string | null
		manualUrl?: string | null
		externalUrl?: string | null
	} | null
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
			className="hidden md:flex absolute h-[34px] lg:h-[42px] rounded-full bg-white"
		/>
	)
}

export function NavList({ items }: NavLinksProps) {
	const ref = useRef<HTMLLIElement>(null)

	const [position, setPosition] = useState({
		left: 0,
		width: 0,
		opacity: 0,
	})

	const [isOpen, setIsOpen] = useState(false)
	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<motion.div
			layout
			transition={{
				duration: 0.1,
			}}
			className={`flex gap-2 rounded-full bg-neutral-700 bg-opacity-40 backdrop-blur-xl ${isOpen ? "flex-col-reverse fixed top-4 right-4 bottom-4 left-4 rounded-lg py-8 px-6 justify-end" : "py-2 px-3"}`}
		>
			<motion.ul
				layout
				onMouseLeave={() =>
					setPosition((pv) => ({
						...pv,
						opacity: 0,
					}))
				}
				className={`relative md:flex w-fit gap-2 ${isOpen ? "w-full flex flex-col" : "hidden w-fit"}`}
			>
				{items?.map((item) => (
					<NavListItem
						setPosition={setPosition}
						key={item._key}
						className={`relative z-10 flex cursor-pointer items-center text-white mix-blend-difference ${isOpen ? "w-full" : null}`}
					>
						{item.url?.internalUrl && (
							<Link
								onClick={() => setIsOpen(false)}
								href={generateUrl({
									documentType: item.url.documentType,
									internalUrl: item.url.internalUrl,
								})}
								className={`rounded-full bg-opacity-50 px-3 py-1 lg:px-5 lg:py-2 transition duration-300 ease-in-out font-bold ${isOpen ? "w-full text-5xl mb-3 font-normal" : null}`}
							>
								{item.text}
							</Link>
						)}

						{item.url?.manualUrl && (
							<Link
								onClick={() => setIsOpen(false)}
								href={item.url.manualUrl}
								className={`rounded-full bg-opacity-50 px-3 py-1 lg:px-5 lg:py-2 transition duration-300 ease-in-out font-bold ${isOpen ? "w-full text-5xl mb-3 font-normal" : null}`}
							>
								{item.text}
							</Link>
						)}

						{item.url?.externalUrl && (
							<Link
								onClick={() => setIsOpen(false)}
								href={item.url.externalUrl}
								rel="noopener noreferrer"
								target="_blank"
								className={`rounded-full bg-opacity-50 px-3 py-1 lg:px-5 lg:py-2 transition duration-300 ease-in-out font-bold ${isOpen ? "w-full text-5xl mb-3 font-normal" : null}`}
							>
								{item.text}
							</Link>
						)}
					</NavListItem>
				))}

				<Cursor position={position} />
			</motion.ul>
			<span
				onClick={toggleMenu}
				className={`cursor-pointer h-[32px] px-3 py-1 transition font-bold md:hidden ${isOpen ? "w-full text-5xl font-normal mb-24" : "text-base"}`}
			>
				{isOpen ? "Close" : "Menu"}
			</span>
		</motion.div>
	)
}
