import { BlockContentIcon } from "@sanity/icons"
import { defineType, defineField, defineArrayMember } from "sanity"

export const featuredType = defineType({
	name: "featured",
	type: "object",
	icon: BlockContentIcon,
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "documents",
			type: "array",
			of: [
				{
					type: "reference",
					to: [
						{ type: "projects" },
						{ type: "articles" },
						{ type: "pages" },
					],
				},
			],
		}),
	],
	preview: {
		select: {
			title: "title",
		},
		prepare({ title }) {
			return {
				title,
				subtitle: "Featured documents",
			}
		},
	},
})
