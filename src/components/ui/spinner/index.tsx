import type React from "react";

import type { HTMLComponent } from "@/types/html-component";

type Props = {
	size?: "small" | "medium" | "large";
};

export type SpinnerProps = HTMLComponent<Props>;

const Spinner: React.FC<SpinnerProps> = ({
	size = "medium",
	className,
	...props
}: SpinnerProps) => {
	return <span {...props} className={className} />;
};

export default Spinner;
