import { MenuIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export const navigationType = defineType({
	name: "navigation",
	title: "Navigation",
	type: "document",
	icon: MenuIcon,
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
		}),
		defineField({
			name: "navId",
			type: "slug",
			title: "Navigation Id",
		}),
		defineField({
			name: "items",
			type: "array",
			title: "Navigation items",
			of: [{ type: "navigationItem" }],
		}),
	],
})
