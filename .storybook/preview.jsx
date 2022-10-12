import { themes } from "@storybook/theming";
import { globalCSS } from "../stitches.config";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};

export const decorators = [
  (Story) => (
    <>
      {globalCSS()}
      <Story />
    </>
  ),
];
