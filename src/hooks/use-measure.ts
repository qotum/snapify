import React from "react";

type UseMeasureRect = {
  width: number;
  height: number;
};

export type UseMeasureReturn = [React.LegacyRef<
  HTMLDivElement
  >, UseMeasureRect];

/**
 * Measure the size of an element by a ref.
 * 
 * @returns {UseMeasureReturn} The size of the element as a Tuple.
 */
export const useMeasure = (): UseMeasureReturn => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = React.useState<UseMeasureRect>({
    width: 0,
    height: 0,
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    if (ref.current) {
      console.log("ref.current", ref.current.getBoundingClientRect());
      setRect(ref.current.getBoundingClientRect());
    }
  }, [ref.current]);

  return [ref, rect];
};