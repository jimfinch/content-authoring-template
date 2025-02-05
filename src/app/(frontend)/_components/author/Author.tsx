import { PROJECT_QUERYResult } from "@/sanity/types"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

type AuthorProps = {
	author: NonNullable<PROJECT_QUERYResult>["author"]
}

export function Author({ author }: AuthorProps) {
	return author?.image || author?.name ? (
		<div>
			{author?.image ? (
				<Image
					src={urlFor(author.image).width(80).height(80).url()}
					width={80}
					height={80}
					alt={author.name || ""}
				/>
			) : null}
			{author?.name ? <p>{author.name}</p> : null}
		</div>
	) : null
}
