import { css } from "@iglab-design-system/stitches";

export const Text = css({
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
      "gray-200": {
        color: "$gray-200",
      },
      "gray-400": {
        color: "$gray-400",
      },
    },
  },
  compoundVariants: [
    {
      color: "gray-400",
      size: "sm",
      css: {
        outline: "none",
        transition: "color 0.3s ease",
        fontWeight: "600",
        "&:hover, &:focus": { color: "$gray-100" },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    color: "gray-100",
  },
});
