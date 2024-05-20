import type { HTMLComponent } from "@/types/html-component";
import React from "react";
import { motion } from "framer-motion";
import type { Toast, ToastLayout } from "@/hooks/use-toast";

type Props = {
	toast: Toast;
	layout: Required<ToastLayout>;
};

export type ToastItemProps = HTMLComponent<Props>;

const ToastItemContainer: React.FC<ToastItemProps> = ({
	toast,
	layout,
	className,
	...props
}: ToastItemProps) => {
	const [renderable, setRenderable] = React.useState<boolean>(toast.visible);
	const isReactNode = typeof toast.text !== "string";

	React.useEffect(() => {
		if (toast.visible && !renderable) {
			setRenderable(true);
		}
	}, [renderable, toast.visible]);

	if (!renderable) return null;

	return (
		// @ts-ignore
		<motion.div
			className={className}
			role={"alert"}
			aria-live={"polite"}
			layout
			initial={{ opacity: 0, y: 50, scale: 0.3 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: 20, scale: 0.5 }}
			key={toast.id}
			{...props}
		>
			{isReactNode ? (
				toast.text
			) : (
				<div className={"flex flex-row justify-between w-full"}>
					<p>{toast.text}</p>
				</div>
			)}
		</motion.div>
	);
};

const ToastItem = React.memo(ToastItemContainer);
export default ToastItem;
