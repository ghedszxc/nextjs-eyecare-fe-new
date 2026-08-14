import type { Preview } from '@storybook/react-vite'
import '../src/styles/index.scss'
import '../src/styles/base/storybook.scss'

const CUSTOM_VIEWPORTS = {
  mobileS: {
    name: 'Mobile - Small',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  mobileM: {
    name: 'Mobile - Medium',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  mobileL: {
    name: 'Mobile - Large',
    styles: {
      width: '425px',
      height: '736px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  desktopL: {
    name: 'Desktop - Large',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
  desktopXL: {
    name: 'Desktop - Extra Large',
    styles: {
      width: '2560px',
      height: '1440px',
    },
  },
}

const preview: Preview = {
  parameters: {
    viewport: {
      options: CUSTOM_VIEWPORTS,
    },
    backgrounds: {
      options: {
        light: { name: 'Light', value: '#FFFFFF' },
        dark: { name: 'Dark', value: '#C0C0C0' },
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'error',
    },
  },
}

export default preview
