import { PropsWithChildren } from "react"

export function Title(props: PropsWithChildren) {
	return <h1 className="text-4xl font-bold">{props.children}</h1>
}
