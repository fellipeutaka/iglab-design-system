import type { ButtonHTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "@stitches/core";
import { CSS } from "@stitches/core/types/css-util";

import * as Styled from "./styles";

type StyledButtonVariants = VariantProps<typeof Styled.Button>;

export type ButtonProps = StyledButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    children: ReactNode;
    css?: CSS;
  };

export function Button({ asChild, css, children, ...rest }: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component className={Styled.Button({ css })} {...rest}>
      {children}
    </Component>
  );
}
