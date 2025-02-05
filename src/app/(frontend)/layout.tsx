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
			<Header className="fixed top-0 z-10 flex w-full items-center justify-between px-10 py-6">
				<Menu>{children}</Menu>
			</Header>
			{children}
			<Footer>{children}</Footer>

			<SanityLive />
		</>
	)
}
