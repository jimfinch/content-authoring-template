export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="font-sans text-base leading-relaxed antialiased">
				{children}
			</body>
		</html>
	)
}
