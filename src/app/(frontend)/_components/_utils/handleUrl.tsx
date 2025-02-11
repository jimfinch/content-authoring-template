export default function HandleUrl(url: {
	documentType: string
	internalUrl: string
}) {
	return url.documentType == "page"
		? "/" + url.internalUrl
		: "/" + url.documentType + "/" + url.internalUrl
}
