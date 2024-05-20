"use client";

import { ModalProvider } from "@/contexts/modal-context";
import type React from "react";

const Template = ({ children }: React.PropsWithChildren) => (
	<ModalProvider>{children}</ModalProvider>
);

export default Template;
