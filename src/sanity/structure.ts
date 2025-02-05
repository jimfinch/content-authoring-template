import type { StructureResolver } from "sanity/structure"

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title("Site")
		.items([
			S.documentTypeListItem("project").title("Projects"),
			S.documentTypeListItem("article").title("Articles"),
			S.documentTypeListItem("category").title("Categories"),
			S.documentTypeListItem("author").title("Authors"),
			S.divider(),
			...S.documentTypeListItems().filter(
				(item) =>
					item.getId() &&
					!["project", "article", "category", "author"].includes(
						item.getId()!
					)
			),
		])
