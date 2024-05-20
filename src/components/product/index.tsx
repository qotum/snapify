"use client";

import { css, cx } from "@styled-system/css";
import type React from "react";
import ProductSettingsForm from "./settings-form";
import ProductPrevisualization from "./previsualization";
import { useForm } from "react-hook-form";
import { WIDGETS } from "@/constants/widgets";

export type Widget = {
	label: string;
	id: string;
};

export const isActiveWidgets = (
	activeWidget: Widget[],
	...widgetId: string[]
) => {
	return activeWidget?.some((widget) => widgetId.includes(widget.id));
};

export type Display = "block" | "row";

export type FormData = {
	url: string;
	theme: "light" | "dark";
	widgets: Widget[];
	style: {
		textSize: number;
		cornerRadius: number;
		spacing: number;
	};
	display: Display;
};

const defaultWidgets: Widget[] = [
	WIDGETS.CHANNEL_NAME,
	WIDGETS.CHANNEL_LOGO,
	WIDGETS.VIDEO_DURATION,
	WIDGETS.VIDEO_VIEWS,
	WIDGETS.VIDEO_PUBLISHED_AT,
];

const Product: React.FC = () => {
	const { register, setValue, watch } = useForm<FormData>({
		defaultValues: {
			widgets: defaultWidgets,
		},
	});

	const watchWidgets = watch("widgets");

	const onUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// make request to get video data
	};

	return (
		<div
			className={css({
				display: "flex",
				justifyContent: "center",
				gap: "20px",
				marginTop: "40px",
			})}
		>
			<ProductSettingsForm
				isValidVideo={true}
				register={register}
				setValue={setValue}
				options={{
					defaultWidgets,
					defaultDisplay: "block",
				}}
				className={css({
					flex: 0.4,
				})}
			/>

			<ProductPrevisualization
				className={css({
					flex: 0.7,
				})}
				activeWidgets={watchWidgets}
			/>
		</div>
	);
};

export default Product;
