import { SanityLive } from "@/sanity/lib/live"
import type { Metadata } from "next"
import "@/app/globals.css"
import Footer from "@/app/(frontend)/_components/footer/Footer"
import Header from "@/app/(frontend)/_components/header/Header"
import { Menu } from "./_components/menu/Menu"

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
			<Header className="py-3 px-4">
				<Menu>{children}</Menu>
			</Header>
			{children}
			<Footer>{children}</Footer>

			<SanityLive />
		</>
	)
}
