import { PropsWithChildren } from "react"

export function Title(props: PropsWithChildren) {
	return (
		<h1 className="text-4xl sm:text-6xl lg:text-8xl text-left font-bold">
			{props.children}
		</h1>
	)
}
