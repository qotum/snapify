import "@app/styles/globals.css";

import localFont from "next/font/local";
import { Figtree } from "next/font/google";
import type React from "react";

import { css } from "@styled-system/css";
import Footer from "@/components/layout/footer";
import Hero from "@/components/hero";
import Layout from "@/components/layout";

export const figtree = Figtree({
	subsets: ["latin"],
	variable: "--font-figtree-sans",
});
export const cal = localFont({
	src: "./fonts/CalSans-SemiBold.woff2",
	display: "swap",
	variable: "--font-cal-sans",
});

const RootLayout = async ({ children }: React.PropsWithChildren) => {
	return (
		<html lang={"fr"} className={`${figtree.variable} ${cal.variable}`}>
			<body
				className={css({
					textStyle: "body",
				})}
			>
				<Layout>
					<Hero
						className={css({
							marginTop: "60px",
						})}
					/>

					{children}

					<Footer />
				</Layout>
			</body>
		</html>
	);
};

export default RootLayout;
