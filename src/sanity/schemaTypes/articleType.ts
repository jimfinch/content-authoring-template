import { DocumentTextIcon } from "@sanity/icons"
import { defineArrayMember, defineField, defineType } from "sanity"

export const articleType = defineType({
	name: "articles",
	title: "Article",
	type: "document",
	icon: DocumentTextIcon,
	fields: [
		defineField({
			title: "Article Title",
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
					title: "Alternative text",
					name: "alt",
					type: "string",
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
			name: "relatedArticles",
			type: "array",
			of: [{ type: "reference", to: { type: "articles" } }],
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
