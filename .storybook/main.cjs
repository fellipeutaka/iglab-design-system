const { mergeConfig } = require("vite");
const { resolve } = require("node:path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    if (configType === "PRODUCTION") {
      config.base = "/iglab-design-system/";
    }

    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: "@iglab-design-system/stitches",
            replacement: resolve(__dirname, "stitches.config.ts"),
          },
        ],
      },
    });
  },
};
