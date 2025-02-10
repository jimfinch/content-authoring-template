import Image from "next/image"
import { PortableTextComponents } from "next-sanity"
import { urlFor } from "@/sanity/lib/image"

export const components: PortableTextComponents = {
	types: {
		image: (props) =>
			props.value ? (
				<Image
					className="rounded-lg not-prose w-full h-auto my-12"
					src={urlFor(props.value)
						.width(600)
						.height(400)
						.quality(80)
						.auto("format")
						.url()}
					alt={props?.value?.alt || ""}
					width="600"
					height="400"
				/>
			) : null,
	},
	block: {
		normal: ({ children }) => {
			// Check prose css as this class is being overwritten
			return <p className="mb-10">{children}</p>
		},
	},
}
