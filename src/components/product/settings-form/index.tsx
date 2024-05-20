import ToggleButtonGroup from "@/components/ui/button/toggle/group";
import Input from "@/components/ui/input";
import { css, cx } from "@styled-system/css";
import type { Display, FormData, Widget } from "..";
import React from "react";
import {
	set,
	type UseFormRegister,
	type UseFormSetValue,
} from "react-hook-form";
import { WIDGETS } from "@/constants/widgets";

const widgetsList = Object.values(WIDGETS).map((widget) => ({
	label: widget.label,
	id: widget.id,
}));

const displaysList: {
	label: string;
	value: Display;
}[] = [
	{
		label: "Bloc",
		value: "block",
	},
	{
		label: "Ligne",
		value: "row",
	},
];

type ProductSettingsFormProps = {
	isValidVideo?: boolean;
	register: UseFormRegister<FormData>;
	setValue: UseFormSetValue<FormData>;
	options?: {
		defaultWidgets?: Widget[];
		defaultDisplay?: Display;
	};
	className?: string;
};

const ProductSettingsForm: React.FC<ProductSettingsFormProps> = ({
	isValidVideo = false,
	register,
	setValue,
	options = {
		defaultWidgets: [],
		defaultDisplay: "block",
	},
	className,
}: ProductSettingsFormProps) => {
	const [widgets, setWidgets] = React.useState<string[]>(
		options.defaultWidgets?.map((widget) => widget.id) || [],
	);
	const [display, setDisplay] = React.useState<Display>("block");

	const handleSetWidgets = (widgetIds: string[]) => {
		const selectedWidgets: Widget[] = widgetsList.filter((widget) =>
			widgetIds.includes(widget.id),
		);

		setWidgets(widgetIds);
		setValue("widgets", selectedWidgets);
	};

	return (
		<div
			className={cx(
				css({
					backgroundColor: "card.background",
					padding: "15px 20px 20px 20px",
					borderRadius: "8px",
					border: "1px solid",
					borderColor: "card.border",
				}),
				className,
			)}
		>
			<h3
				className={css({
					fontSize: "22px",
					fontWeight: "semibold",
				})}
			>
				Paramètres
			</h3>

			<Input
				{...register("url")}
				className={css({
					w: "100%",
					marginTop: "15px",
				})}
				label={"URL de la vidéo"}
				type="url"
				placeholder="https://youtube.com/vidéoduchallenge"
			/>

			<ToggleButtonGroup
				className={css({
					marginTop: "15px",
				})}
				label={"Widgets"}
				buttons={widgetsList.map((widget) => ({
					value: widget.id,
					label: widget.label,
				}))}
				value={widgets}
				onChange={(value) => handleSetWidgets([...value])}
				disabled={!isValidVideo}
				multiple
			/>

			<ToggleButtonGroup
				className={css({
					marginTop: "15px",
				})}
				label={"Affichage"}
				buttons={displaysList}
				value={display}
				onChange={(value) => {
					console.log(value);
				}}
				disabled={!isValidVideo}
			/>
		</div>
	);
};

export default ProductSettingsForm;
