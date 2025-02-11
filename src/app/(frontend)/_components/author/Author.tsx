import { PROJECT_QUERYResult } from "@/sanity/types"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

type AuthorProps = {
	author: NonNullable<PROJECT_QUERYResult>["author"]
	className?: string
}

export function Author({ author, className }: AuthorProps) {
	return author?.image || author?.name ? (
		<div className={`${className} flex gap-3 items-center`}>
			{author?.image ? (
				<Image
					src={urlFor(author.image).width(100).height(100).url()}
					width={100}
					height={100}
					alt={author.name || ""}
					className="rounded-full w-8 h-8"
				/>
			) : null}
			{author?.name ? (
				<p className="text-neutral-500 font-bold">{author.name}</p>
			) : null}
		</div>
	) : null
}
