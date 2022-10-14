import { themes } from "@storybook/theming";
import { globalCSS } from "../stitches.config";
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize({
  onUnhandledRequest: "bypass",
});

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
  mswDecorator,
  (Story) => (
    <>
      {globalCSS()}
      <Story />
    </>
  ),
];
