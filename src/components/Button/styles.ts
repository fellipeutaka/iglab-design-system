import { css } from "@iglab-design-system/stitches";

export const Button = css({
  all: "unset",
  boxSizing: "border-box",
  backgroundColor: "$cyan-500",
  color: "black",
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
  "&:hover": {
    backgroundColor: "$cyan-400",
  },
  "&:focus-visible": {
    $$bg: "$colors$gray-900",
    $$color: "$colors$cyan-400",
    boxShadow: "$$bg 0px 0px 0px 2px, $$color 0px 0px 0px 4px",
  },
});
