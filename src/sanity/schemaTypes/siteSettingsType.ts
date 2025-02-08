import { defineField, defineType } from "sanity"
import { ControlsIcon } from "@sanity/icons"

export const siteSettingsType = defineType({
	name: "siteSettings",
	title: "Site Settings",
	type: "document",
	icon: ControlsIcon,
	fields: [
		defineField({
			title: "Add a site title",
			name: "title",
			type: "string",
		}),
		defineField({
			title: "Add a site description",
			name: "description",
			type: "string",
		}),
		defineField({
			title: "Add a logo",
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
			title: "Set a homepage",
			name: "homePage",
			type: "reference",
			to: [{ type: "page" }],
		}),
		defineField({
			title: "Primary navigation",
			name: "primaryNav",
			description: "Select a menu for primary navigation",
			type: "reference",
			to: { type: "navigation" },
		}),
		defineField({
			title: "Footer navigation",
			name: "footerNav",
			description: "Select a menu for footer navigation",
			type: "reference",
			to: { type: "navigation" },
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Site Settings",
			}
		},
	},
})
