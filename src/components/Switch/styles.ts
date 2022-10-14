import { css } from "@iglab-design-system/stitches";

export const Root = css({
  all: "unset",
  backgroundColor: "$gray-800",
  borderRadius: "96px",
  height: "24px",
  width: "48px",
  position: "relative",
  transition: "background-color 150ms ease-out, box-shadow 150ms ease-out",
  "&:focus-visible": {
    $$bg: "$colors$gray-900",
    $$color: "$colors$cyan-500",
    boxShadow: "$$bg 0px 0px 0px 2px, $$color 0px 0px 0px 4px",
  },
  "&[data-state='checked']": {
    backgroundColor: "$cyan-500",
  },
});

export const Thumb = css({
  display: "block",
  height: "20px",
  width: "20px",
  borderRadius: "10px",
  backgroundColor: "$gray-100",
  transform: "translateX(2px)",
  transition: "transform 150ms ease-out",
  "&[data-state='checked']": {
    transform: "translateX(24px)",
  },
});
