import { FOOTERNAVIGATION_QUERY } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/live"
import Link from "next/link"
import HandleUrl from "../_utils/HandleUrl"

export async function FooterList() {
	const { data: nav } = await sanityFetch({
		query: FOOTERNAVIGATION_QUERY,
	})

	const items = nav?.footerNav?.items || []

	return (
		<nav className="flex w-full md:justify-center items-center">
			<ul className="flex flex-col gap-5 md:flex-row flex-wrap">
				{items?.map((item) => (
					<li key={item.text}>
						{item.url?.internalUrl && (
							<Link
								href={
									item.url.internalUrl &&
									item.url.documentType
										? HandleUrl({
												documentType:
													item.url.documentType,
												internalUrl:
													item.url.internalUrl,
											})
										: "#"
								}
								className="md:px-5 py-2 transition duration-300 ease-in-out font-bold hover:text-neutral-500"
							>
								{item.text}
							</Link>
						)}

						{item.url?.manualUrl && (
							<Link
								href={item.url.manualUrl}
								className="md:px-5 py-2 transition duration-300 ease-in-out font-bold hover:text-neutral-500"
							>
								{item.text}
							</Link>
						)}

						{item.url?.externalUrl && (
							<Link
								href={item.url.externalUrl}
								rel="noopener noreferrer"
								target="_blank"
								className="md:px-5 py-2 transition duration-300 ease-in-out font-bold hover:text-neutral-500"
							>
								{item.text}
							</Link>
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}
