import { PortableText } from "next-sanity"
import Image from "next/image"
import { Title } from "@/app/(frontend)/_components/title/Title"
import { urlFor } from "@/sanity/lib/image"
import { PAGE_QUERYResult } from "@/sanity/types"
import Video from "../video/Video"

type HeroProps = Extract<
	NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
	{ _type: "hero" }
>

export function Hero({ title, text, image, video }: HeroProps) {
	return (
		<section className="isolate w-full h-screen py-16 relative overflow-hidden px-6">
			<div className="relative container mx-auto flex justify-start items-center gap-8 h-full z-20">
				<div>
					{title ? (
						<Title className="text-4xl sm:text-6xl lg:text-8xl text-left font-bold">
							{title}
						</Title>
					) : null}
					{text ? (
						<div className="prose-lg lg:prose-xl prose-invert flex items-center mt-4">
							<PortableText value={text} />
						</div>
					) : null}
				</div>
			</div>
			<div className="absolute inset-0 bg-black opacity-60 z-10" />
			{video ? (
				<div className="absolute top-0 bottom-0 left-0 right-0 z-0">
					<Video
						src={video.url}
						autoPlay
						loop
						muted
						controls={false}
						className="w-full h-full min-h-full object-cover"
					/>
				</div>
			) : (
				<Image
					className="absolute inset-0 object-cover blur-sm w-full h-full"
					src={urlFor(image).width(1600).height(800).url()}
					width={1600}
					height={800}
					alt=""
				/>
			)}
		</section>
	)
}
