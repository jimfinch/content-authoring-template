import { BlockContentIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const animatedTextType = defineType({
	name: "animatedText",
	type: "object",
	icon: BlockContentIcon,
	fields: [
		defineField({
			name: "title",
			type: "string",
		}),
	],
})
