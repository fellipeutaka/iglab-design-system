import type { ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "@stitches/core";
import { CSS } from "@stitches/core/types/css-util";

import * as Styled from "./styles";

type StyledTextVariants = VariantProps<typeof Styled.Text>;

export interface TextProps extends StyledTextVariants {
  asChild?: boolean;
  children: ReactNode;
  css?: CSS;
}

export function Text({ asChild, children, ...rest }: TextProps) {
  const Component = asChild ? Slot : "span";

  return <Component className={Styled.Text({ ...rest })}>{children}</Component>;
}
