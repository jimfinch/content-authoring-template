"use client"

import Link from "next/link"
import { PROJECT_QUERYResult } from "@/sanity/types"

type CategoriesProps = {
	categories: NonNullable<PROJECT_QUERYResult>["categories"]
	className?: string
}

export function Categories({ categories, className = "" }: CategoriesProps) {
	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	return (
		<div className={`flex flex-wrap gap-4 ${className}`}>
			{categories.map((category) => (
				<Link
					key={category._id}
					href={`/category/${category.slug.current}`}
					className="inline-flex text-neutral-400 text-sm font-bold rounded-full py-1 px-3 bg-neutral-800 hover:bg-neutral-700 transition-colors no-underline"
					onClick={handleClick}
				>
					{category.title}
				</Link>
			))}
		</div>
	)
}
