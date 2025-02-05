interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
	src: string
}

export default function Video({ src, ...props }: VideoProps) {
	return (
		<video width="320" height="240" preload="none" {...props}>
			<source src={src} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	)
}
