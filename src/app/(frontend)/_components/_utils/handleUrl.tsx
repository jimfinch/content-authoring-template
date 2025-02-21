export default function HandleUrl(url: {
	documentType: string
	internalUrl: string
}) {
	return url.documentType == "pages"
		? "/" + url.internalUrl
		: "/" + url.documentType + "/" + url.internalUrl
}
