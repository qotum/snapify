import type React from "react";

import Providers from "./providers";
import { css } from "@styled-system/css";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
	<main
		className={css({
			maxWidth: "1400px",
			margin: "0 auto",
		})}
	>
		<Providers>{children}</Providers>
	</main>
);

export default Layout;
