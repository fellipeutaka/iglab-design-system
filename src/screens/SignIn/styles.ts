import { css } from "@iglab-design-system/stitches";

export const Container = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  px: "$4",
});

export const Header = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$3",
  marginBottom: "$10",
});

export const Form = css({
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  marginBottom: "$7",
  maxWidth: "400px",
  width: "100%",
});

export const FormField = css({
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});

export const EyeButton = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
  transition: "box-shadow 0.2s ease, opacity 0.2s ease",
  "&:focus-visible": {
    $$shadowColor: "$colors$cyan-500",
    boxShadow: "$$shadowColor 0px 0px 0px 2px",
  },
  "&[aria-pressed='false']": {
    opacity: 0.3,
  },
  "& svg": {
    height: "20px",
    width: "20px",
  },
});

export const CheckboxContainer = css({
  display: "flex",
  alignItems: "center",
  gap: "$2",
  marginBottom: "$4",
});

export const Footer = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$4",
});
