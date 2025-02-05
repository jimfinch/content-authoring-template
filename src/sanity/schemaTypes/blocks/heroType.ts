import { defineField, defineType } from "sanity"

export const heroType = defineType({
	name: "hero",
	type: "object",
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
		defineField({
			name: "text",
			type: "blockContent",
		}),
		defineField({
			name: "image",
			type: "image",
		}),
	],
})
