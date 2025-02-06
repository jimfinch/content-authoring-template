import { BlockContentIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const splitImageType = defineType({
	name: "splitImage",
	type: "object",
	icon: BlockContentIcon,
	fields: [
		defineField({
			name: "orientation",
			type: "string",
			options: {
				list: [
					{ value: "imageLeft", title: "Image Left" },
					{ value: "imageRight", title: "Image Right" },
				],
			},
		}),
		defineField({
			name: "title",
			type: "string",
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
	],
	preview: {
		select: {
			title: "title",
			media: "image",
		},
		prepare({ title, media }) {
			return {
				title,
				subtitle: "Text and Image",
				media,
			}
		},
	},
})
