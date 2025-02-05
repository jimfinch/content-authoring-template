import { SanityLive } from "@/sanity/lib/live"
import type { Metadata } from "next"
import "@/app/globals.css"
import Footer from "@/app/_components/footer/Footer"
import Header from "@/app/_components/header/Header"

export const metadata: Metadata = {
	title: "Portfolio Template",
	description: "Next.js and Sanity.io portfolio template",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header>
				<p>Header</p>
			</Header>
			{children}
			<Footer>
				<p>Footer Content</p>
			</Footer>

			<SanityLive />
		</>
	)
}
