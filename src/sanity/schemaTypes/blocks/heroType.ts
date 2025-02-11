import { BlockContentIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const heroType = defineType({
	name: "hero",
	type: "object",
	icon: BlockContentIcon,
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
			name: "linkText",
			type: "string",
			title: "Link Text",
		}),
		defineField({
			name: "url",
			type: "link",
			title: "Link Item URL",
		}),
		defineField({
			name: "image",
			type: "image",
			fields: [
				defineField({
					name: "alt",
					type: "string",
					title: "Alternative text",
					validation: (rule) =>
						rule.custom((value, context) => {
							const parent = context?.parent as {
								asset?: { _ref?: string }
							}

							return !value && parent?.asset?._ref
								? "Alt text is required when an image is present"
								: true
						}),
				}),
			],
		}),
		defineField({
			name: "video",
			type: "file",
		}),
	],
	preview: {
		select: {
			title: "title",
			media: "image",
		},
		prepare({ title, media }) {
			return {
				title,
				subtitle: "Hero",
				media,
			}
		},
	},
})
