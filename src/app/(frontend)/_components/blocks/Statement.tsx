import { PAGE_QUERYResult } from "@/sanity/types"
import { stegaClean } from "next-sanity"

type Statment = Extract<
	NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
	{ _type: "statement" }
>

export function Statement({ text }: Statment) {
	return (
		<section className="container mx-auto flex gap-8 py-16">
			<div className="w-1/3 flex items-center">
				{text ? <h2 className="text-3xl">{text}</h2> : null}
			</div>
		</section>
	)
}
