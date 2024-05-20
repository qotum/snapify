import { css } from "@styled-system/css";
import React from "react";

type ModalContextProps = {
	activeModal: React.ReactNode | undefined;
	setActiveModal: React.Dispatch<
		React.SetStateAction<React.ReactNode | undefined>
	>;

	isModalActive: boolean;
};

const defaultValue: ModalContextProps = {
	activeModal: undefined,
	setActiveModal: (
		_newModal: React.SetStateAction<React.ReactNode | undefined>,
	) => {},
	isModalActive: false,
};

const ModalContext: React.Context<ModalContextProps> =
	React.createContext<ModalContextProps>(defaultValue);

const ModalProvider: React.FC<React.PropsWithChildren> = ({
	children,
	...props
}: React.PropsWithChildren) => {
	const [activeModal, setActiveModal] = React.useState<
		React.ReactNode | undefined
	>(undefined);

	const isModalActive = activeModal !== undefined;

	return (
		<ModalContext.Provider
			value={{ activeModal, setActiveModal, isModalActive }}
			{...props}
		>
			{isModalActive && (
				<div
					className={
						"fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-10"
					}
				>
					<div className={css({})} onKeyUp={() => setActiveModal(undefined)} />
					<div className={"z-[11] h-full tablet:h-auto"}>{activeModal}</div>
				</div>
			)}
			{children}
		</ModalContext.Provider>
	);
};

export { ModalContext, ModalProvider };
