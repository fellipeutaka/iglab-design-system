import { css } from "@iglab-design-system/stitches";

export const Root = css({
  all: "unset",
  backgroundColor: "$gray-800",
  borderRadius: "4px",
  height: "24px",
  width: "24px",
  padding: "2px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    opacity: "0.6",
  },
  "&:focus-visible": {
    $$color: "$colors$cyan-400",
    boxShadow: "$$color 0px 0px 0px 2px",
  },
});

export const Indicator = css({
  color: "$cyan-500",
  height: "20px",
  width: "20px",
});
