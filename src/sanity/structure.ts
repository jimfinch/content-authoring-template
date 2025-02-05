import type { StructureResolver } from "sanity/structure"

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title("Site")
		.items([
			S.documentTypeListItem("project").title("Projects"),
			S.documentTypeListItem("article").title("Articles"),
			S.documentTypeListItem("page").title("Pages"),
			S.divider(),
			S.documentTypeListItem("category").title("Categories"),
			S.documentTypeListItem("author").title("Authors"),
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
						"project",
						"article",
						"page",
						"category",
						"author",
						"siteSettings",
					].includes(item.getId()!)
			),
		])
