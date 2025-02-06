export function Title({
	children,
	className,
	...props
}: {
	className?: string
	children: React.ReactNode
}) {
	return (
		<h1
			className={`${className} text-4xl sm:text-6xl lg:text-8xl text-left font-bold`}
			{...props}
		>
			{children}
		</h1>
	)
}
