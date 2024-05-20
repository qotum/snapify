import React from "react";

import { useSSR } from "./use-ssr";
import { generateId } from "@/utils/generate-id";

export const createElement = (id: string): HTMLElement => {
  const el = document.createElement(id);
  return el;
};

export const usePortal = (
  selectId: string = generateId(),
  getContainer?: () => HTMLElement | null,
): HTMLElement | null => {
  const id = `portal-${selectId}`;
  const { isBrowser } = useSSR();

  const [elSnapshot, setElSnapshot] = React.useState<HTMLElement | null>(
    isBrowser ? createElement(id) : null,
  );

  React.useEffect(() => {
    const customContainer = getContainer ? getContainer() : null;
    const parentElement = customContainer || document.body;
    const hasElement = parentElement.querySelector<HTMLElement>(id);
    const el = hasElement || createElement(id);

    if (!hasElement) {
      parentElement.appendChild(el);
    }
    setElSnapshot(el);
  }, [getContainer, id]);

  return elSnapshot;
};