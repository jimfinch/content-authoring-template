import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/sanity/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["PP Neue Montreal", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config
