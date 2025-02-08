import { PROJECT_QUERYResult } from "@/sanity/types"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

type AuthorProps = {
	author: NonNullable<PROJECT_QUERYResult>["author"]
}

export function Author({ author }: AuthorProps) {
	return author?.image || author?.name ? (
		<div className="flex gap-3 items-center mt-4 mb-4">
			{author?.image ? (
				<Image
					src={urlFor(author.image).width(30).height(30).url()}
					width={30}
					height={30}
					alt={author.name || ""}
					className="rounded-full"
				/>
			) : null}
			{author?.name ? (
				<p className="text-neutral-500 font-bold">{author.name}</p>
			) : null}
		</div>
	) : null
}
