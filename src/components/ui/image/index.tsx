import NextImage from "next/image";
import type React from "react";

import Link from "../link";

import type { HTMLComponent } from "@/types/html-component";
import { RiArrowRightUpLine } from "react-icons/ri";
import { css, cx } from "@styled-system/css";

type Props = {
	src?: string | null;
	alt: string;
	copyright?: {
		name: string;
		url: string;
	};
	relative?: boolean;
};

export type ImageProps = HTMLComponent<
	Props,
	React.ImgHTMLAttributes<HTMLImageElement>
>;

const Image: React.FC<ImageProps> = ({
	as: Component = NextImage,
	src = "",
	alt,
	height,
	width,
	copyright,
	relative = true,
	className,
	...props
}) => {
	return (
		<div
			className={css({
				position: relative ? "relative" : "static",
			})}
		>
			<Component
				src={src as string}
				alt={alt}
				draggable={false}
				height={height}
				width={width}
				className={cx(
					css({
						objectFit: "cover",
						objectPosition: "center",
					}),
					className,
				)}
				{...props}
			/>

			{copyright && (
				<Link
					href={copyright.url}
					className={
						"absolute bottom-2 right-2 bg-background bg-opacity-80 text-white px-2 py-1 text-sm rounded flex items-center gap-x-[5px]"
					}
				>
					{copyright.name}
					<RiArrowRightUpLine />
				</Link>
			)}
		</div>
	);
};

export default Image;
