const { loadConfigFromFile, mergeConfig } = require("vite");
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
  staticDirs: ["../public"],
  async viteFinal(config, { configType }) {
    if (configType === "PRODUCTION") {
      config.base = "/iglab-design-system/";
    }

    const { config: userConfig } = await loadConfigFromFile(
      resolve(__dirname, "../vite.config.ts")
    );

    return mergeConfig(config, {
      ...userConfig,
      plugins: [],
    });
  },
};
