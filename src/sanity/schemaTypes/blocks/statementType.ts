import { BlockContentIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const statementType = defineType({
	name: "statement",
	type: "object",
	icon: BlockContentIcon,
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
	],
	preview: {
		select: {
			title: "title",
		},
		prepare({ title }) {
			return {
				title,
				subtitle: "Statement",
			}
		},
	},
})
