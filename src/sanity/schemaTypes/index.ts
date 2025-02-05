import { type SchemaTypeDefinition } from "sanity"

import { blockContentType } from "./blockContentType"
import { categoryType } from "./categoryType"
import { articleType } from "./articleType"
import { projectType } from "./projectType"
import { authorType } from "./authorType"
import { pageType } from "./pageType"
import { pageBuilderType } from "./pageBuilderType"
import { heroType } from "./blocks/heroType"
import { splitImageType } from "./blocks/splitImageType"
import { statementType } from "./blocks/statementType"
import { siteSettingsType } from "./siteSettingsType"

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		blockContentType,
		categoryType,
		articleType,
		projectType,
		authorType,
		pageType,
		pageBuilderType,
		heroType,
		splitImageType,
		statementType,
		siteSettingsType,
	],
}
