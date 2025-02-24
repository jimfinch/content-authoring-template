export default function HandleSlug(document: {
	_type: string
	slug?: { current?: string } // Make slug optional
}) {
	// Add null check and provide a fallback
	const slugPath = document.slug?.current || ""

	return document._type === "pages"
		? "/" + slugPath
		: "/" + document._type + "/" + slugPath
}
