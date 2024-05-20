import type { HTMLComponent } from "@/types/html-component";
import React from "react";

export const InternalIcon = {
	union: React.lazy(() => import("./internal/union.svg")),
	external: React.lazy(() => import("./internal/external.svg")),
	download: React.lazy(() => import("./internal/download.svg")),
	copy: React.lazy(() => import("./internal/copy.svg")),
};

type Props = {
	icon:
		| React.ComponentType<React.SVGProps<SVGSVGElement>>
		| React.LazyExoticComponent<
				React.ComponentType<React.SVGProps<SVGSVGElement>>
		  >
		| keyof typeof InternalIcon;
	size?: number | string;
	color?: string;
	align?: "top" | "middle" | "bottom";
};

export type IconProps = HTMLComponent<Props, React.SVGProps<SVGSVGElement>>;

const Icon: React.FC<IconProps> = ({
	icon: Component,
	size = "24px",
	...props
}: IconProps) => {
	if (typeof Component === "string") {
		const IconComponent = InternalIcon[Component] as React.ComponentType<
			React.SVGProps<SVGSVGElement>
		>;

		return <IconComponent role={"img"} width={size} height={size} {...props} />;
	}

	return (
		<Component
			role={"img"}
			// @ts-ignore
			size={size}
			width={size}
			height={size}
			{...props}
		/>
	);
};

export default Icon;
