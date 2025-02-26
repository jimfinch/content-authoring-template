interface ContainerProps {
	children: React.ReactNode
	className?: string
}

export function Container({ children, className = "" }: ContainerProps) {
	return (
		<div className={`container mx-auto px-6 lg:px-10 ${className}`}>
			{children}
		</div>
	)
}
