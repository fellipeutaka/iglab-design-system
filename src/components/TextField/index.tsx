import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

import * as Styled from "./styles";

export interface IRootProps {
  children: ReactNode;
}

export function Root({ children }: IRootProps) {
  return <div className={Styled.Root({})}>{children}</div>;
}

Root.displayName = "TextField.Root";

export interface IIconProps {
  children: ReactNode;
}

export function Icon({ children }: IIconProps) {
  return <Slot className={Styled.Icon({})}>{children}</Slot>;
}

Icon.displayName = "TextField.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, TextInputInputProps>(
  (props, ref) => {
    return <input className={Styled.Input({})} ref={ref} {...props} />;
  }
);

Input.displayName = "TextField.Input";
