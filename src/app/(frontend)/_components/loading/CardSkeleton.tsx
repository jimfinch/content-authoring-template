export function CardSkeleton() {
	return (
		<div className="animate-pulse">
			<div className="rounded-md bg-neutral-800 h-[300px] w-full mb-4" />
			<div className="h-6 bg-neutral-800 rounded w-3/4 mb-4" />
			<div className="h-4 bg-neutral-800 rounded w-1/2" />
		</div>
	)
}
