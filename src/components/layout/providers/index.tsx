"use client";

import React from "react";

import {
	ToastsContent,
	type ToastsContextParams,
	type UpdateToastsFunction,
	type UpdateToastsIDFunction,
	type UpdateToastsLayoutFunction,
	defaultToastLayout,
} from "@/contexts/toasts-context";
import { useCurrentState } from "@/hooks/use-current-state";
import ToastContainer from "../toast/container";
import { SWRConfig } from "swr";

type ProvidersProps = React.PropsWithChildren<object>;

const Providers: React.FC<ProvidersProps> = ({ children }: ProvidersProps) => {
	const [lastUpdateToastId, setLastUpdateToastId] =
		React.useState<ToastsContextParams["lastUpdateToastId"]>(null);
	const [toasts, setToasts, toastsRef] = useCurrentState<
		ToastsContextParams["toasts"]
	>([]);
	const [toastLayout, setToastLayout, toastLayoutRef] =
		useCurrentState<ToastsContextParams["toastLayout"]>(defaultToastLayout);
	const updateToasts: UpdateToastsFunction = (fn) => {
		const nextToasts = fn(toastsRef.current);
		setToasts(nextToasts);
	};
	const updateToastLayout: UpdateToastsLayoutFunction = (fn) => {
		const nextLayout = fn(toastLayoutRef.current);
		setToastLayout(nextLayout);
	};
	const updateLastToastId: UpdateToastsIDFunction = (fn) => {
		setLastUpdateToastId(fn());
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const initialValue = React.useMemo<ToastsContextParams>(
		() => ({
			toasts,
			toastLayout,
			updateToasts,
			lastUpdateToastId,
			updateToastLayout,
			updateLastToastId,
		}),
		[toasts, toastLayout, lastUpdateToastId],
	);

	return (
		<SWRConfig
			value={{
				errorRetryCount: 0,
			}}
		>
			<ToastsContent.Provider value={initialValue}>
				{children}
				<ToastContainer />
			</ToastsContent.Provider>
		</SWRConfig>
	);
};

export default Providers;
