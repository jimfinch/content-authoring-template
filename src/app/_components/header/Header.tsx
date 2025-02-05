export default function Header({
	children,
	className,
	...props
}: {
	className?: string
	children: React.ReactNode
}) {
	return (
		<header className={className} {...props}>
			{children}
		</header>
	)
}
