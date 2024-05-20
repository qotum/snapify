"use client";

import { motion } from "framer-motion";
import type React from "react";

import _LinkAsButton from "./link-as-button";
import Spinner from "../spinner";
import * as styles from "./button.recipe";

import type { HTMLComponent } from "@/types/html-component";
import { cx } from "@styled-system/css";

type Props = styles.ButtonVariants & {
	href?: string;
	loading?: boolean;
	disabled?: boolean;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	active?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type ButtonProps = HTMLComponent<
	Props,
	React.ButtonHTMLAttributes<HTMLButtonElement>
>;

const Button: React.FC<ButtonProps> = ({
	as: Component = motion.button,
	href,
	loading,
	disabled = loading,
	prefix,
	suffix,
	active = false,
	withoutBorder,
	color,
	variant,
	rounded,
	onClick,
	className,
	children,
	...rest
}: ButtonProps) => {
	disabled = disabled || loading;

	const classes = styles.button({
		color,
		variant,
		withoutBorder,
		rounded,
		hasChildren: !!children,
	});

	if (href && !disabled) {
		return (
			<_LinkAsButton className={cx(classes.root, className)} href={href}>
				{children}
			</_LinkAsButton>
		);
	}

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onClick?.(e);
	};

	return (
		<Component
			onClick={handleClick}
			className={cx(classes.root, className)}
			disabled={disabled}
			{...rest}
		>
			{(prefix || loading) && (
				<div className={classes.prefix}>
					{loading ? <Spinner size={"small"} color={color} /> : prefix}
				</div>
			)}
			{children}
			{suffix && <div className={classes.suffix}>{suffix}</div>}
		</Component>
	);
};

export default Button;
