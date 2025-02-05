import { DocumentTextIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const statementType = defineType({
	name: "statement",
	type: "object",
	icon: DocumentTextIcon,
	fields: [
		defineField({
			name: "text",
			type: "string",
		}),
	],
})
