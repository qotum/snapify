import { sva } from "@styled-system/css";
import type { SystemStyleObject } from '@styled-system/types'

export const inputRootStyles: SystemStyleObject = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

export const inputLabelStyles: SystemStyleObject = {};

export const inputInputStyles: SystemStyleObject = {
  colorScheme: "dark",
  bgColor: "card.background",
  border: "1px solid",
  borderColor: "card.border",
  borderRadius: "8px",
  px: "10px",
  py: "5px",
  
  _placeholder: {
    color: "pure.grey",
    fontWeight: "medium",
  },
  _focus: {
    outline: "none",
  },
};

export const inputErrorStyles: SystemStyleObject = {};

export const input = sva({
  slots: ["root", "label", "input", "error"],
  base: {
    root: inputRootStyles,
    label: inputLabelStyles,
    input: inputInputStyles,
    error: inputErrorStyles,
  }
});