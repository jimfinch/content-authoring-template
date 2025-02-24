import type { StructureResolver } from "sanity/structure"

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title("Site")
		.items([
			S.documentTypeListItem("projects").title("Projects"),
			S.documentTypeListItem("articles").title("Articles"),
			S.documentTypeListItem("pages").title("Pages"),
			S.divider(),
			S.documentTypeListItem("category").title("Categories"),
			S.documentTypeListItem("author").title("Authors"),
			S.documentTypeListItem("navigation").title("Menus"),
			S.divider(),
			S.listItem()
				.id("siteSettings")
				.schemaType("siteSettings")
				.title("Site Settings")
				.child(
					S.editor()
						.id("siteSettings")
						.schemaType("siteSettings")
						.documentId("siteSettings")
				),
			...S.documentTypeListItems().filter(
				(item) =>
					item.getId() &&
					![
						"projects",
						"articles",
						"pages",
						"category",
						"author",
						"siteSettings",
						"navigation",
					].includes(item.getId()!)
			),
		])
