import Link from "next/link"
import { PRIMARYNAVIGATION_QUERY } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/live"
import { NavLinks } from "./NavLinks"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

export async function Menu() {
	const { data: nav } = await sanityFetch({
		query: PRIMARYNAVIGATION_QUERY,
	})

	const items = nav.primaryNav.items
	const logo = nav.image
	const title = nav.title

	return (
		<nav className="flex w-full justify-between items-center">
			<div className="flex overflow-hidden h-max w-fit">
				<Link
					href="/"
					className="px-5 py-2 transition-opacity duration-300 ease-in-out font-bold group-[.down]:opacity-0"
				>
					{logo ? (
						<Image
							src={urlFor(logo).url()}
							width={100}
							height={42}
							alt={logo.alt || title}
						/>
					) : (
						<h2>{title}</h2>
					)}
				</Link>
			</div>

			<NavLinks items={items} />

			<div className="flex overflow-hidden h-max w-fit justify-end">
				<Link
					href="/"
					className="px-5 py-2 transition-opacity duration-300 ease-in-out font-bold group-[.down]:opacity-0"
				>
					Get in touch
				</Link>
			</div>
		</nav>
	)
}
