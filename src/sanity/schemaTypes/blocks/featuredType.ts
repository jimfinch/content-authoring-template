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
						{ type: "project" },
						{ type: "article" },
						{ type: "page" },
					],
				},
			],
		}),
	],
})
