export const projectRead = process.env.SANITY_API_READ_TOKEN

if (!projectRead) {
	throw new Error("Missing SANITY_API_READ_TOKEN")
}
