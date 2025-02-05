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
	],
	preview: {
		prepare() {
			return {
				title: "Site Settings",
			}
		},
	},
})
