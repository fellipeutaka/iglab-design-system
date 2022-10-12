import type { ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "@stitches/react";
import { CSS } from "@stitches/react/types/css-util";

import { css } from "../../../stitches.config";

const cssText = css({
  fontFamily: "Inter, sans-serif",
  variants: {
    size: {
      sm: {
        fontSize: "$xs",
      },
      md: {
        fontSize: "$sm",
      },
      lg: {
        fontSize: "$md",
      },
    },
    color: {
      "gray-100": {
        color: "$gray-100",
      },
      "gray-400": {
        color: "$gray-400",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "gray-100",
  },
});

type StyledTextVariants = VariantProps<typeof cssText>;

export interface TextProps extends StyledTextVariants {
  asChild?: boolean;
  children: ReactNode;
  css?: CSS;
}

export function Text({ asChild, children, ...rest }: TextProps) {
  const Component = asChild ? Slot : "span";

  return <Component className={cssText({ ...rest })}>{children}</Component>;
}
