"use client";

import { motion } from "framer-motion";
import type React from "react";

import Link from "@/components/ui/link";
import type { HTMLComponent } from "@/types/html-component";

type Props = object;

type LinkAsButtonProps = HTMLComponent<
	Props,
	React.AnchorHTMLAttributes<HTMLAnchorElement>
>;

const _LinkAsButton: React.FC<LinkAsButtonProps> = ({
	as: Component = motion(Link),
	href,
	className,
	children,
}: LinkAsButtonProps) => {
	return (
		<Component
			href={href}
			className={className}
			whileTap={{ opacity: 0.8, outlineOffset: "2px" }}
			whileHover={{
				outlineOffset: "3px",
			}}
			transition={{
				duration: 0.1,
			}}
			active={true}
		>
			<span className={""}>{children}</span>
		</Component>
	);
};

export default _LinkAsButton;
