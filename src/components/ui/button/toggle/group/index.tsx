import type React from "react";
import Button from "../..";
import { css, cx } from "@styled-system/css";

export type ToggleButton = {
	value: string;
	label: string;
};

type ToggleButtonGroupProps = {
	label?: string;
	multiple?: boolean;
	value: string | string[];
	onChange: (value: string | string[]) => void;
	buttons: ToggleButton[];
	disabled?: boolean;
	className?: string;
};

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
	label,
	multiple = false,
	value,
	onChange,
	buttons,
	disabled,
	className,
}: ToggleButtonGroupProps) => {
	const handleChange = (button: ToggleButton) => {
		if (multiple) {
			if (Array.isArray(value)) {
				if (value.includes(button.value)) {
					onChange(value.filter((v) => v !== button.value));
				} else {
					onChange([...value, button.value]);
				}
			} else {
				onChange([button.value]);
			}
		} else {
			onChange(button.value);
		}
	};

	return (
		<div className={className}>
			{label && <span>{label}</span>}

			<ul
				className={css({
					display: "flex",
					flexWrap: "wrap",
					gap: "5px",
					marginTop: "10px",
				})}
			>
				{buttons.map((button) => {
					const active = Array.isArray(value)
						? value.includes(button.value)
						: value === button.value;

					return (
						<li key={button.value}>
							<Button
								onClick={() => handleChange(button)}
								{...(active && {
									color: "secondary",
									variant: "outline",
								})}
								disabled={disabled}
							>
								{button.label}
							</Button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ToggleButtonGroup;
