import type { InputHTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

import { css } from "../../../stitches.config";

const CSSRoot = css({
  backgroundColor: "$gray-800",
  borderRadius: "4px",
  height: "48px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "$3",
  py: "$3",
  px: "$4",
  transition: "box-shadow 0.2s ease",
  "&:focus-within": {
    $$shadowColor: "$colors$cyan-500",
    boxShadow: "$$shadowColor 0px 0px 0px 2px",
  },
});

export interface IRootProps {
  children: ReactNode;
}

export function Root({ children }: IRootProps) {
  return <div className={CSSRoot({})}>{children}</div>;
}

Root.displayName = "TextField.Root";

const CSSIcon = css({
  height: "24px",
  width: "24px",
  color: "$gray-400",
});

export interface IIconProps {
  children: ReactNode;
}

export function Icon({ children }: IIconProps) {
  return <Slot className={CSSIcon({})}>{children}</Slot>;
}

Icon.displayName = "TextField.Icon";

const CSSInput = css({
  background: "transparent",
  color: "$gray-100",
  flex: "1",
  maxWidth: "100%",
  border: "none",
  outline: "none",
  fontFamily: "Inter, sans-serif",
  fontSize: "$xs",
  "&:placeholder": {
    color: "$gray-400",
  },
});

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: TextInputInputProps) {
  return <input className={CSSInput({})} {...props} />;
}

Input.displayName = "TextField.Input";
