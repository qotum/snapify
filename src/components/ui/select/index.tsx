import React from "react";

import type { HTMLComponent } from "@/types/html-component";
import { css, cx } from "@styled-system/css";
import { button } from "../button/button.recipe";

type Props = {
	label?: string;
	error?: string;
	children?: React.ReactNode;
};

type SelectProps = HTMLComponent<
	Props,
	React.SelectHTMLAttributes<HTMLSelectElement>
>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
	({ className = "", label, error, ...props }: SelectProps, ref) => {
		const classes = button({
			color: "primary",
		});

		return (
			<div
				className={cx(
					css({
						width: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
					}),
					className,
				)}
			>
				{label && <span>{label}</span>}
				<select
					className={cx(
						classes.root,
						error &&
							css({
								color: "red",
								border: "1px solid red",
							}),
						css({
							py: "8px",
							pr: 0,
							textOverflow: "",
						}),
					)}
					{...props}
					ref={ref}
				>
					{props.children}
				</select>
				{error && <span>{error}</span>}
			</div>
		);
	},
);

Select.displayName = "Select";

export default Select;
