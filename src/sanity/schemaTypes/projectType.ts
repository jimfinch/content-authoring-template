import { DocumentTextIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const projectType = defineType({
	name: "projects",
	title: "Project",
	type: "document",
	icon: DocumentTextIcon,
	fields: [
		defineField({
			title: "Project Title",
			name: "title",
			type: "string",
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: {
				source: "title",
			},
		}),
		defineField({
			title: "SEO Title",
			name: "seoTitle",
			type: "string",
		}),
		defineField({
			title: "SEO Description",
			name: "seoDescription",
			type: "string",
		}),
		defineField({
			name: "author",
			type: "reference",
			to: { type: "author" },
		}),
		defineField({
			name: "mainImage",
			type: "image",
			options: {
				hotspot: true,
			},
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
			name: "categories",
			type: "array",
			of: [
				defineArrayMember({
					type: "reference",
					to: { type: "category" },
				}),
			],
		}),
		defineField({
			name: "publishedAt",
			type: "datetime",
		}),
		defineField({
			name: "body",
			type: "blockContent",
		}),
		defineField({
			name: "relatedProjects",
			type: "array",
			of: [{ type: "reference", to: { type: "projects" } }],
		}),
	],
	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
		},
		prepare(selection) {
			const { author } = selection
			return { ...selection, subtitle: author && `by ${author}` }
		},
	},
})
