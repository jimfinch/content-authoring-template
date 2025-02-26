"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { disableDraftMode } from "@/app/actions"
import { useState, useEffect } from "react"
import { AccessDeniedIcon } from "@sanity/icons"

export function DisableDraftMode() {
	const router = useRouter()
	const [pending, startTransition] = useTransition()
	const [shouldShow, setShouldShow] = useState(true)

	useEffect(() => {
		if (window !== window.parent || !!window.opener) {
			setShouldShow(false)
		}
	}, [])

	if (!shouldShow) {
		return null
	}

	const disable = () =>
		startTransition(async () => {
			await disableDraftMode()
			router.refresh()
		})

	return (
		<div className="fixed bottom-0 p-6 flex justify-end w-full">
			{pending ? (
				"Disabling draft mode..."
			) : (
				<button
					type="button"
					onClick={disable}
					className="flex items-center gap-1 rounded-md bg-green-400 px-4 py-2 text-black font-bold"
				>
					<AccessDeniedIcon className="w-6 h-6" />
					Stop draft mode
				</button>
			)}
		</div>
	)
}
