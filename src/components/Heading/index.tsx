import type { ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "@stitches/react";

import { css } from "../../../stitches.config";

const cssHeading = css({
  color: "$gray-100",
  fontFamily: "Inter, sans-serif",
  fontWeight: "bold",
  variants: {
    size: {
      sm: {
        fontSize: "$lg",
      },
      md: {
        fontSize: "$xl",
      },
      lg: {
        fontSize: "$2xl",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type StyledHeadingVariants = VariantProps<typeof cssHeading>;

export interface HeadingProps extends StyledHeadingVariants {
  asChild?: boolean;
  children: ReactNode;
}

export function Heading({ size, asChild, children }: HeadingProps) {
  const Component = asChild ? Slot : "h2";

  return <Component className={cssHeading({ size })}>{children}</Component>;
}
