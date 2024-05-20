import type React from "react";
import type { IconType } from "react-icons";
import { RiDiscordFill, RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

import Link from "../../ui/link";

import { ROUTES } from "@/constants/routes";
import type { HTMLComponent } from "@/types/html-component";
import { css } from "@styled-system/css";
import Icon from "@/components/ui/icon";

type Props = HTMLComponent<object>;

const socialLinks: {
	title: string;
	href: string;
	icon: IconType;
}[] = [
	{
		title: "Github",
		href: ROUTES.EXTERNAL.GITHUB,
		icon: RiGithubFill,
	},
	{
		title: "LinkedIn",
		href: ROUTES.EXTERNAL.LINKEDIN,
		icon: RiLinkedinBoxFill,
	},
	{
		title: "Discord",
		href: ROUTES.EXTERNAL.DISCORD,
		icon: RiDiscordFill,
	},
];

const Footer: React.FC<Props> = () => {
	return (
		<footer
			className={css({
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				color: "pure.grey",
				marginTop: "20px",
			})}
		>
			<div
				className={css({
					display: "flex",
					gap: "10px",
				})}
			>
				{socialLinks.map(({ title, href, icon }) => (
					<Link key={title} href={href}>
						<Icon icon={icon} size={20} />
					</Link>
				))}
			</div>

			<h2
				className={css({
					fontFamily: "figtree",
					fontWeight: "500",
					marginTop: "5px",
				})}
			>
				Outil 100% gratuit. Développé par{" "}
				<Link href={ROUTES.EXTERNAL.QOTUM}>Qotum</Link>, challengé par{" "}
				<Link href={ROUTES.EXTERNAL.BASTI_UI}>Basti Ui</Link> et{" "}
				<Link href={ROUTES.EXTERNAL.BENJAMIN_CODE}>Benjamin Code</Link>.
			</h2>
		</footer>
	);
};

export default Footer;
