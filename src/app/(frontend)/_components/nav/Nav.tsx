import Link from "next/link"
import { PRIMARYNAVIGATION_QUERY } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/live"
import { NavList } from "./NavList"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

export async function Nav() {
	const { data: nav } = await sanityFetch({
		query: PRIMARYNAVIGATION_QUERY,
	})

	const items = nav?.primaryNav?.items ?? []
	const logo = nav?.image
	const title = nav?.title

	return (
		<nav className="flex w-full justify-between items-center">
			<div className="flex overflow-hidden h-max w-full">
				<Link
					href="/"
					className="px-2 py-2 lg:px-4 transition-opacity duration-300 ease-in-out font-bold group-[.down]:opacity-0"
				>
					{logo ? (
						<Image
							priority
							src={urlFor(logo).url()}
							width={90}
							height={25}
							alt={logo?.alt || title}
						/>
					) : (
						<h2>{title}</h2>
					)}
				</Link>
			</div>

			<NavList items={items} />

			<div className="hidden md:flex overflow-hidden h-max w-full justify-end">
				<Link
					href="/"
					className="px-2 py-2 lg:px-4 transition-opacity duration-300 ease-in-out font-bold group-[.down]:opacity-0"
				>
					Get in touch
				</Link>
			</div>
		</nav>
	)
}
