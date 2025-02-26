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
			return <p className="text-white leading-loose">{children}</p>
		},
		h1: ({ children }) => {
			// Check prose css as this class is being overwritten
			return <h1 className="text-white">{children}</h1>
		},
		h2: ({ children }) => {
			// Check prose css as this class is being overwritten
			return <h2 className="text-white">{children}</h2>
		},
		h3: ({ children }) => {
			// Check prose css as this class is being overwritten
			return <h3 className="text-white">{children}</h3>
		},
	},
	list: {
		bullet: ({ children }) => (
			<ul className="text-white list-disc marker:text-[#F3FF70]">
				{children}
			</ul>
		),
		number: ({ children }) => (
			<ol className="text-white list-decimal marker:text-[#F3FF70]">
				{children}
			</ol>
		),
	},
	listItem: {
		bullet: ({ children }) => <li className="">{children}</li>,
	},
}
