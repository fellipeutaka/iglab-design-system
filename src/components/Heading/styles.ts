import { css } from "@iglab-design-system/stitches";

export const Heading = css({
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
