import { FooterList } from "./FooterList"

export default function Footer({
	children,
	className,
	...props
}: {
	className?: string
	children: React.ReactNode
}) {
	return (
		<footer className={className} {...props}>
			<FooterList />
		</footer>
	)
}
