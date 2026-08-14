import type { StorybookConfig } from '@storybook/react-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  viteFinal: async (config: any) => {
    config.plugins = [
      ...(config.plugins || []),
      tsconfigPaths(),
      svgr({
        svgrOptions: { exportType: 'default', ref: true },
        include: '**/*.svg',
      }),
    ]

    config.esbuild = {
      ...config.esbuild,
      jsx: 'automatic',
    }

    return config
  },
}
export default config
