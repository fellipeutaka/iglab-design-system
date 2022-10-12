import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      "gray-900": "#121214",
      "gray-800": "#202024",
      "gray-400": "#7C7C8A",
      "gray-200": "#C4C4CC",
      "gray-100": "#E1E1E6",
      "cyan-500": "#61DAFB",
      "cyan-400": "#81D8F7",
    },
    fontSizes: {
      xs: "14px",
      sm: "16px",
      md: "18px",
      lg: "20px",
      xl: "24px",
      "2xl": "32px",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "32px",
      8: "36px",
      9: "40px",
      10: "48px",
    },
  },
  utils: {
    mx: (value: Stitches.ScaleValue<"space">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    px: (value: Stitches.ScaleValue<"space">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    my: (value: Stitches.ScaleValue<"space">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    py: (value: Stitches.ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const globalCSS = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    backgroundColor: "$gray-900",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
  },
});
