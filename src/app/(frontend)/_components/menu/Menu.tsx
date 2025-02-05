import Link from "next/link"
import { PRIMARYNAVIGATION_QUERY } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/live"
import { NavLinks } from "./NavLinks"

export async function Menu() {
	const { data: nav } = await sanityFetch({
		query: PRIMARYNAVIGATION_QUERY,
	})

	const items = nav.primaryNav.items

	return (
		<nav className="flex w-full justify-between items-center">
			<div className="flex overflow-hidden h-max">
				<Link
					href="/"
					className="px-5 py-2 transition-opacity duration-300 ease-in-out font-bold group-[.down]:opacity-0"
				>
					Brand Name
				</Link>
			</div>

			<NavLinks items={items} />

			<div className="flex overflow-hidden h-max">
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
