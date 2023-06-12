/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [{
    directory: "../../design-system/src/**",
    stories: "*.stories.*",
    titlePrefix: "Design System"
  }],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  features: {
    emotionAlias: false,
  }
};
export default config;
