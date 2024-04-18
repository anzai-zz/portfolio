import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";
import { mergeConfig } from 'vite'
import linaria from '@linaria/vite'

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [],
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
      plugins: [linaria({
        include: ['**/*.{ts,tsx}'],
        babelOptions: {
          presets: ['@babel/preset-typescript', '@babel/preset-react'],
        },
      })],
    })
  },
};
export default config;
