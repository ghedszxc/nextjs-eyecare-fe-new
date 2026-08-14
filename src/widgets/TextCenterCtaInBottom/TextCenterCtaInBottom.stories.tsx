import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextCenterCtaInBottom } from '.'

const meta: Meta<typeof TextCenterCtaInBottom> = {
  title: 'Widgets/[Module 13] TextCenterCtaInBottom',
  component: TextCenterCtaInBottom,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof TextCenterCtaInBottom>

export const Default: Story = {
  args: {
    title: 'Find an eye doctor near you',
    subtitle:
      'Schedule an eye exam with an independent doctor of optometry at your nearest LensCrafters store.',
    ctas: [
      {
        url: '#',
        label: 'Schedule an exam',
      },
    ],
  },
}

export const MultipleCtas: Story = {
  args: {
    title: 'Find an eye doctor near you',
    subtitle:
      'Schedule an eye exam with an independent doctor of optometry at your nearest LensCrafters store.',
    ctas: [
      {
        url: '#',
        label: 'Schedule an exam',
      },
      {
        url: '#',
        label: 'Find a store',
      },
    ],
  },
}

export const CtaWithIcon: Story = {
  args: {
    title: 'Find an eye doctor near you',
    subtitle:
      'Schedule an eye exam with an independent doctor of optometry at your nearest LensCrafters store.',
    ctas: [
      {
        url: '#',
        label: 'Schedule an exam',
        logo: {
          src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118832/data/245d3378a07597e7d0a047a866fa2d40/arrow-right-alt-dark-icon.svg',
          alt: 'icon',
        },
      },
    ],
  },
}

export const IconOnlyCta: Story = {
  args: {
    title: 'Find an eye doctor near you',
    subtitle:
      'Schedule an eye exam with an independent doctor of optometry at your nearest LensCrafters store.',
    ctas: [
      {
        url: '#',
        label: '',
        logo: {
          src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118832/data/245d3378a07597e7d0a047a866fa2d40/arrow-right-alt-dark-icon.svg',
          alt: 'icon',
        },
      },
    ],
  },
}

export const MultipleIconOnlyCta: Story = {
  args: {
    title: 'Find an eye doctor near you',
    subtitle:
      'Schedule an eye exam with an independent doctor of optometry at your nearest LensCrafters store.',
    ctas: [
      {
        url: '#',
        label: '',
        logo: {
          src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118832/data/245d3378a07597e7d0a047a866fa2d40/arrow-right-alt-dark-icon.svg',
          alt: 'icon',
        },
      },
      {
        url: '#',
        label: '',
        logo: {
          src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118832/data/245d3378a07597e7d0a047a866fa2d40/arrow-right-alt-dark-icon.svg',
          alt: 'icon',
        },
      },
      {
        url: '#',
        label: '',
        logo: {
          src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118832/data/245d3378a07597e7d0a047a866fa2d40/arrow-right-alt-dark-icon.svg',
          alt: 'icon',
        },
      },
    ],
  },
}

export const WithoutCta: Story = {
  args: {
    title: 'Find an eye doctor near you',
    subtitle:
      'Schedule an eye exam with an independent doctor of optometry at your nearest LensCrafters store.',
    ctas: [],
  },
}
