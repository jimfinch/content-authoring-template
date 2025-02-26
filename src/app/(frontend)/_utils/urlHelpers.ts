export function generateUrl(params: {
	documentType?: string
	slug?: string
	internalUrl?: string
}) {
	const { documentType, slug, internalUrl } = params

	if (!documentType) return "/"

	const path = slug || internalUrl || ""
	return documentType === "pages" ? `/${path}` : `/${documentType}/${path}`
}
