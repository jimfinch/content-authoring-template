import { PROJECT_QUERYResult } from "@/sanity/types"

type CategoriesProps = {
	categories: NonNullable<PROJECT_QUERYResult>["categories"]
}

export function Categories({ categories }: CategoriesProps) {
	return categories.map((category) => (
		<span
			key={category._id}
			className="inline-flex text-neutral-400 text-sm font-bold rounded-full py-1 px-3 bg-neutral-800"
		>
			{category.title}
		</span>
	))
}
