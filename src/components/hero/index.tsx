import type React from "react";

import Icon from "../ui/icon";
import { css, cx } from "@styled-system/css";

const Accent: React.FC<React.PropsWithChildren> = ({ children }) => (
	<span
		className={css({
			color: "primary",
			display: "inline-flex",
			alignItems: "center",
		})}
	>
		{children}
	</span>
);

type HeroProps = {
	className?: string;
};

const Hero: React.FC<HeroProps> = ({ className }: HeroProps) => {
	return (
		<h1
			className={cx(
				css({
					textAlign: "center",
				}),
				className,
			)}
		>
			Créer une vignette YouTube,
			<br />
			<Accent>en quelques clics</Accent> avec{" "}
			<Accent>
				Snapify{" "}
				<Icon
					className={css({
						marginLeft: "10px",
						fill: "primary",
					})}
					icon="union"
					size={40}
				/>
			</Accent>
		</h1>
	);
};

export default Hero;
