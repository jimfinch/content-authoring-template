import { LinkIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const navigationItemType = defineType({
	title: "Navigation Item",
	name: "navigationItem",
	type: "object",
	icon: LinkIcon,
	fields: [
		defineField({
			name: "text",
			type: "string",
			title: "Navigation Text",
		}),
		defineField({
			name: "url",
			type: "link",
			title: "Navigation Item URL",
		}),
	],
})
