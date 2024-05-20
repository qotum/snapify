"use client";

import { default as NextLink } from "next/link";
import React from "react";
import type { UrlObject } from "node:url";

import type { HTMLComponent } from "@/types/html-component";
import isString from "@/utils/is-string";
import { css, cx } from "@styled-system/css";

export type Props = {
	/**
	 * The link's href.
	 */
	href?: string | UrlObject;

	/**
	 * The link's classname.
	 */
	className?: string;

	/**
	 * The link's onClick.
	 */
	onClick?: (_event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;

	/**
	 * The link's status (if it's disabled or not).
	 */
	disabled?: boolean;

	/**
	 * The link's type.
	 */
	type?: "highlight" | "primary" | "secondary" | "blend";

	noEffect?: boolean;
};

export type LinkProps = HTMLComponent<
	Props,
	React.AnchorHTMLAttributes<HTMLAnchorElement>
>;

const Link = React.forwardRef<HTMLInputElement, LinkProps>(
	(
		{
			as: Component = NextLink,
			href,
			className = "",
			disabled,
			onClick,
			type,
			children,
			...props
		}: LinkProps,
		ref,
	) => {
		disabled = disabled || (!onClick && !href);

		className = cx(
			css({
				fontWeight: "bold",
			}),
			className,
		);

		if (disabled) {
			href = {};
		}

		const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
			if (disabled) return event.preventDefault();
			if (onClick) onClick(event);
		};

		if (isString(href)) {
			href = href as string;
			// regex to check if the href is internal or external
			const internal = href.match(/^(\/(?!\/)[A-z:0-9/#-]*)$/gi);

			if (!internal) {
				return (
					<Component
						className={className}
						onClick={handleClick}
						href={href}
						type={type}
						aria-disabled={disabled}
						target={"_blank"}
						rel={"noopener noreferrer"}
						ref={ref}
						{...props}
					>
						{children}
					</Component>
				);
			}
		}

		return (
			<Component
				className={className}
				onClick={handleClick}
				href={href}
				type={type}
				aria-disabled={disabled}
				ref={ref}
				{...props}
			>
				{children}
			</Component>
		);
	},
);

Link.displayName = "Link";

export default Link;
