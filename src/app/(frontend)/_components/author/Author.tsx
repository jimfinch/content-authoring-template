import { PROJECT_QUERYResult } from "@/sanity/types"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

type AuthorProps = {
	author: NonNullable<PROJECT_QUERYResult>["author"]
}

export function Author({ author }: AuthorProps) {
	return author?.image || author?.name ? (
		<div className="flex gap-3 items-center my-6">
			{author?.image ? (
				<Image
					src={urlFor(author.image).width(30).height(30).url()}
					width={30}
					height={30}
					alt={author.name || ""}
					className="rounded-full border-2 border-neutral-700"
				/>
			) : null}
			{author?.name ? (
				<p className="text-neutral-400 font-bold">{author.name}</p>
			) : null}
		</div>
	) : null
}
