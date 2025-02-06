export default function HandleSlug(document: {
	_type: string
	slug: { current: string }
}) {
	return document._type == "page"
		? "/" + document.slug.current
		: "/" + document._type + "/" + document.slug.current
}
