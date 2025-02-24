import { SanityLive } from "@/sanity/lib/live"
import type { Metadata } from "next"
import "@/app/globals.css"
import Footer from "@/app/(frontend)/_components/footer/Footer"
import Header from "@/app/(frontend)/_components/header/Header"
import { Nav } from "./_components/nav/Nav"
import Template from "./template"
import { Lenis } from "./_components/_utils/Lenis"

export const metadata: Metadata = {
	title: {
		template: "%s — Content Authoring Boilerplate",
		default: "Content Authoring Boilerplate", // a default is required when creating a template
	},
	description: "Next.js and Sanity.io content authoring boilerplate", // a default is required when creating a template
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Lenis>
				<Header className="fixed min-h-[82px] top-0 z-10 flex w-full items-center justify-between px-5 py-4 lg:px-8 lg:py-5">
					<Nav />
				</Header>
				<Template>{children}</Template>
				<Footer className="px-6 py-24">{children}</Footer>
			</Lenis>

			<SanityLive />
		</>
	)
}
