import { PROJECT_QUERYResult } from "@/sanity/types"
import dayjs from "dayjs"

type PublishedAtProps = {
	publishedAt: NonNullable<PROJECT_QUERYResult>["publishedAt"]
}

export function PublishedAt({ publishedAt }: PublishedAtProps) {
	return publishedAt ? (
		<p className="text-neutral-500 font-bold">
			{dayjs(publishedAt).format("D MMMM YYYY")}
		</p>
	) : null
}
