import { sva } from "@styled-system/css";
import type { RecipeVariantProps, SystemStyleObject } from '@styled-system/types'

export const buttonRootStyles: SystemStyleObject = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  border: "1px solid",
  gap: "5px",
  userSelect: "none",
  outline: "none",

  "&:disabled": {
    cursor: "not-allowed",
  }
};

export const buttonPrefixStyles: SystemStyleObject = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const buttonSuffixStyles: SystemStyleObject = {};

export const button = sva({
  slots: ["root", "prefix", "suffix"],
  base: {
    root: buttonRootStyles,
    prefix: buttonPrefixStyles,
    suffix: buttonSuffixStyles,
  },
  variants: {
    color: {
      primary: {
        root: {
          bg: "button.background.primary",
          borderColor: "button.border.primary",
          color: "button.text.primary",
        }
      },
      primaryDark: {},
      secondary: {
        root: {
          bg: "button.background.secondary",
          borderColor: "button.border.secondary",
          color: "button.text.secondary",
        }
      },
    },
    variant: {
      outline: {
        root: {
          bg: "rgba(61, 99, 221, 0.05)",
          color: "button.text.primary",
        },
      },
    },
    withoutBorder: {
      true: {
        root: {
          border: "1px solid transparent",
        }
      },
    },
    rounded: {
      true: {
        root: {
          borderRadius: "50px",
        }
      },
      false: {
        root: {
          borderRadius: "8px",
        }
      },
    },
    hasChildren: {
      true: {
        root: {
          p: "6px 12px",
        }
      },
      false: {
        root: {
          p: "8px",
        }
      }
    }
  },
  defaultVariants: {
    color: "primary",
    rounded: false,
    hasChildren: true,
  }
});

export type ButtonVariants = RecipeVariantProps<typeof button>