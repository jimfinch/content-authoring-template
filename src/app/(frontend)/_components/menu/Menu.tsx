import Link from "next/link"
import { PropsWithChildren } from "react"

export function Menu(props: PropsWithChildren) {
	return (
		<nav>
			<Link href="/">Brand Name</Link>
		</nav>
	)
}
