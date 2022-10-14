import { css } from "@iglab-design-system/stitches";

export const Root = css({
  backgroundColor: "$gray-800",
  borderRadius: "4px",
  height: "48px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "$3",
  py: "$3",
  px: "$4",
  transition: "box-shadow 0.2s ease",
  "&:focus-within": {
    $$shadowColor: "$colors$cyan-500",
    boxShadow: "$$shadowColor 0px 0px 0px 2px",
  },
});

export const Icon = css({
  height: "24px",
  width: "24px",
  color: "$gray-400",
});

export const Input = css({
  background: "transparent",
  color: "$gray-100",
  flex: "1",
  maxWidth: "100%",
  border: "none",
  outline: "none",
  fontFamily: "Inter, sans-serif",
  fontSize: "$xs",
  "&:placeholder": {
    color: "$gray-400",
  },
});
