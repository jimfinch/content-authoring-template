import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},
	async redirects() {
		return [
			// Basic redirect
			{
				source: "/homepage",
				destination: "/",
				permanent: true,
			},
		]
	},
}

export default nextConfig
