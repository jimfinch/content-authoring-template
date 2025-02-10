"use client"

import { ReactLenis, useLenis } from "lenis/react"
import { PropsWithChildren } from "react"

export function Lenis({ children }: PropsWithChildren) {
	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	})
	return (
		<ReactLenis root options={{ duration: 1 }}>
			{children}
		</ReactLenis>
	)
}
