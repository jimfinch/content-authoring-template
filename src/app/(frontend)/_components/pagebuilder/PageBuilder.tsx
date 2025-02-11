import { Hero } from "@/app/(frontend)/_components/blocks/Hero"
import { SplitImage } from "@/app/(frontend)/_components/blocks/SplitImage"
import { Statement } from "@/app/(frontend)/_components/blocks/Statement"
import { Featured } from "@/app/(frontend)/_components/blocks/Featured"
import { AnimatedText } from "../blocks/AnimatedText"
import { PAGE_QUERYResult } from "@/sanity/types"

type PageBuilderProps = {
	content: NonNullable<PAGE_QUERYResult>["content"]
}

export function PageBuilder({ content }: PageBuilderProps) {
	if (!Array.isArray(content)) {
		return null
	}

	return (
		<main>
			{content.map((block) => {
				switch (block._type) {
					case "hero":
						return <Hero key={block._key} {...block} />
					case "splitImage":
						return <SplitImage key={block._key} {...block} />
					case "statement":
						return <Statement key={block._key} {...block} />
					case "featured":
						return <Featured key={block._key} {...block} />
					case "animatedText":
						return <AnimatedText key={block._key} {...block} />
					default:
						// This is a fallback for when we don't have a block type
						return (
							<div key={block._key}>
								Block not found: {block._type}
							</div>
						)
				}
			})}
		</main>
	)
}
