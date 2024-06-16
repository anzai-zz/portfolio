import path from "node:path";

import { mergeConfig } from 'vite'
import wyw from '@wyw-in-js/vite';

import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: (config) => {
    // パスエイリアスの設定
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@src': path.resolve(__dirname, '../src'),
        '@_': path.resolve(__dirname, '../src/app/_'),
        '@public': path.resolve(__dirname, '../public'),
      };
    }

    return mergeConfig(config, {
      plugins: [wyw()],
    })
  },
};
export default config;
