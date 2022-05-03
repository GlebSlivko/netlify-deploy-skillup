const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      }
    },
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    'storybook-addon-mock/register',
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve:{
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react")
        },
      },
    }
  },
}