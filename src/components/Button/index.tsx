import type { ButtonHTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "@stitches/core";
import { CSS } from "@stitches/core/types/css-util";
import { SpinnerGap } from "phosphor-react";

import * as Styled from "./styles";

type StyledButtonVariants = VariantProps<typeof Styled.Button>;

export type ButtonProps = StyledButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    children: ReactNode;
    css?: CSS;
    isLoading?: boolean;
  };

export function Button({
  asChild,
  css,
  variant,
  outlined,
  children,
  isLoading,
  ...rest
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  if (isLoading) {
    return (
      <Component
        className={Styled.Button({ css, variant, outlined })}
        aria-busy
        disabled
        aria-label="Loading"
        {...rest}
      >
        <SpinnerGap size={24} />
      </Component>
    );
  }

  return (
    <Component className={Styled.Button({ css, variant, outlined })} {...rest}>
      {children}
    </Component>
  );
}
