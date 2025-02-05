import { defineType, defineField } from "sanity"

export const linkType = defineType({
	title: "Link",
	name: "link",
	type: "object",
	fields: [
		defineField({
			title: "Select Internal Link",
			name: "internalUrl",
			description: "Select pages for navigation",
			type: "reference",
			to: [{ type: "project" }, { type: "page" }, { type: "article" }],
		}),
		defineField({
			title: "Enter Internal Link",
			name: "manualUrl",
			description:
				"Use relative URLS (forward slash then the slug string) for typed internal links",
			type: "string",
		}),
		defineField({
			title: "Enter External URL",
			name: "externalUrl",
			description: "Use fully qualified URLS for external link",
			type: "url",
		}),
	],
})
