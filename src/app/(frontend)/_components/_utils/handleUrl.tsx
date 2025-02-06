export default function HandleUrl(url) {
	return url.documentType == "page"
		? "/" + url.internalUrl
		: "/" + url.documentType + "/" + url.internalUrl
}
