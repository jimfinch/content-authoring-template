import { defineLocations, PresentationPluginOptions } from "sanity/presentation"

export const resolve: PresentationPluginOptions["resolve"] = {
	locations: {
		// Add more locations for other post types
		articles: defineLocations({
			select: {
				title: "title",
				slug: "slug.current",
			},
			resolve: (doc) => ({
				locations: [
					{
						title: doc?.title || "Untitled",
						href: `/articles/${doc?.slug}`,
					},
					{ title: "Articles index", href: `/articles` },
				],
			}),
		}),
		projects: defineLocations({
			select: {
				title: "title",
				slug: "slug.current",
			},
			resolve: (doc) => ({
				locations: [
					{
						title: doc?.title || "Untitled",
						href: `/projects/${doc?.slug}`,
					},
					{ title: "Projects index", href: `/projects` },
				],
			}),
		}),
		pages: defineLocations({
			select: {
				title: "title",
				slug: "slug.current",
			},
			resolve: (doc) => ({
				locations: [
					{
						title: doc?.title || "Untitled",
						href: `/${doc?.slug}`,
					},
					{ title: "Pages", href: `/` },
				],
			}),
		}),
	},
}
