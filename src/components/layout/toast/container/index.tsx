import { useToastsContext } from "@/contexts/toasts-context";
import { useCurrentState } from "@/hooks/use-current-state";
import { usePortal } from "@/hooks/use-portal";
import type { HTMLComponent } from "@/types/html-component";
import React from "react";
import { createPortal } from "react-dom";
import ToastItem from "../item";
import { AnimatePresence } from "framer-motion";

export type ToastContainerProps = HTMLComponent<object>;

const ToastContainer: React.FC<ToastContainerProps> = ({
	className,
	...props
}: ToastContainerProps) => {
	const portal = usePortal("toast");

	const [, setHovering, hoveringRef] = useCurrentState<boolean>(false);

	const { toasts, updateToasts, toastLayout, lastUpdateToastId } =
		useToastsContext();
	const memoizedLayout = React.useMemo(() => toastLayout, [toastLayout]);
	const toastElements = React.useMemo(
		() =>
			toasts.map((toast) => (
				<ToastItem
					toast={toast}
					layout={memoizedLayout}
					key={toast._internalIdent}
				/>
			)),
		[toasts, memoizedLayout],
	);

	const hoverHandler = (isHovering: boolean) => {
		setHovering(isHovering);
		if (isHovering) {
			return updateToasts((last) =>
				last.map((toast) => {
					if (!toast.visible) return toast;
					toast._timeout && window.clearTimeout(toast._timeout);
					return {
						...toast,
						timeout: null,
					};
				}),
			);
		}

		updateToasts((last) =>
			last.map((toast, index) => {
				if (!toast.visible) return toast;
				toast._timeout && window.clearTimeout(toast._timeout);
				return {
					...toast,
					_timeout: (() => {
						const timer = window.setTimeout(
							() => {
								toast.cancel();
								window.clearTimeout(timer);
							},
							toast.delay + index * 100,
						);
						return timer;
					})(),
				};
			}),
		);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	React.useEffect(() => {
		const index = toasts.findIndex(
			(r) => r._internalIdent === lastUpdateToastId,
		);
		const toast = toasts[index];
		if (!toast || toast.visible || !hoveringRef.current) return;
		const hasVisible = toasts.find((r, i) => i < index && r.visible);
		if (hasVisible || !hoveringRef.current) return;
		hoverHandler(false);
	}, [toasts, lastUpdateToastId]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	React.useEffect(() => {
		let timeout: null | number = null;
		const timer = window.setInterval(() => {
			if (toasts.length === 0) return;
			timeout = window.setTimeout(() => {
				const allInvisible = !toasts.find((r) => r.visible);
				allInvisible && updateToasts(() => []);
				timeout && clearTimeout(timeout);
			}, 350);
		}, 5000);

		return () => {
			timer && clearInterval(timer);
			timeout && clearTimeout(timeout);
		};
	}, [toasts]);

	if (!portal) return null;
	if (!toasts || toasts.length === 0) return null;

	return createPortal(
		<AnimatePresence>
			<div
				onMouseEnter={() => hoverHandler(true)}
				onMouseLeave={() => hoverHandler(false)}
				className={className}
				{...props}
			>
				{toastElements}
			</div>
		</AnimatePresence>,
		portal,
	);
};

export default ToastContainer;
