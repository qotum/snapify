import React from "react";

import type { HTMLComponent } from "@/types/html-component";

import * as styles from "./input.styles";
import { cx } from "@styled-system/css";

type Props = {
	label?: string;
	error?: string;
};

type InputProps = HTMLComponent<
	Props,
	React.InputHTMLAttributes<HTMLInputElement>
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, label, error, ...props }: InputProps, ref) => {
		const classes = styles.input({ className, label, error });

		return (
			<div className={cx(classes.root, className)}>
				{label && <span className={classes.label}>{label}</span>}

				<input className={cx(classes.input)} {...props} ref={ref} />

				{error && <span className={classes.error}>{error}</span>}
			</div>
		);
	},
);

Input.displayName = "Input";

export default Input;
