import type { ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "@stitches/core";

import * as Styled from "./styles";

type StyledHeadingVariants = VariantProps<typeof Styled.Heading>;

export interface HeadingProps extends StyledHeadingVariants {
  asChild?: boolean;
  children: ReactNode;
}

export function Heading({ size, asChild, children }: HeadingProps) {
  const Component = asChild ? Slot : "h2";

  return <Component className={Styled.Heading({ size })}>{children}</Component>;
}
