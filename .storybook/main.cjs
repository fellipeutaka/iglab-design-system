const { mergeConfig } = require("vite");

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
            replacement: "../stitches.config.ts",
          },
          {
            find: "@iglab-design-system/components",
            replacement: "../src/components",
          },
          {
            find: "@iglab-design-system/screens",
            replacement: "../src/screens",
          },
        ],
      },
    });
  },
};
