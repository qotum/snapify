// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type HTMLComponent<P = object, N = React.HTMLAttributes<any>> = {
  /**
   * The root element.
   */
  as?: React.ElementType;

  /**
   * The content, duh.
   */
  children?: React.ReactNode;

  /**
   * The class name.
   */
  className?: string;
} & P &
  Partial<Omit<N, keyof P>>;
