import { css, keyframes } from "@iglab-design-system/stitches";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const Button = css({
  all: "unset",
  boxSizing: "border-box",
  borderRadius: "4px",
  height: "56px",
  width: "100%",
  padding: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  fontFamily: "Inter, sans-serif",
  fontWeight: "600",
  fontSize: "$sm",
  transition: "all 0.3s ease",
  "&:disabled": {
    opacity: 0.3,
    cursor: "not-allowed",
  },
  "&[aria-busy='true'] svg": {
    animation: `${rotate} 1s linear infinite`,
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "$cyan-500",
        color: "black",
        "&:hover": {
          backgroundColor: "$cyan-400",
        },
        "&:focus-visible": {
          $$bg: "$colors$gray-900",
          $$color: "$colors$cyan-400",
          boxShadow: "$$bg 0px 0px 0px 2px, $$color 0px 0px 0px 4px",
        },
      },
    },
    outlined: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      outlined: true,
      css: {
        border: "2px solid $cyan-500",
        color: "$gray-100",
        backgroundColor: "transparent",
        "&:hover": {
          color: "black",
        },
      },
    },
  ],
  defaultVariants: {
    variant: "primary",
    outlined: false,
  },
});
