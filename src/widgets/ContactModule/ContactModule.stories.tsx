import type { Meta, StoryObj } from '@storybook/react-vite'

import { ContactModule } from '.'

const meta: Meta<typeof ContactModule> = {
  title: 'Widgets/[Module 5] contactModule',
  component: ContactModule,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ContactModule>

export const Default: Story = {
  args: {
    title: 'Feeling blurry about your future?',
    subtitle: `Let's clear things up. We'll help you find a role with impact and a community to support your growth.`,
    ctas: [
      {
        url: '#',
        label: 'See Practice Opportunities',
      },
      {
        url: '#',
        label: 'Connect With Us',
      },
    ],
    image: {
      src: 'https://i.imgur.com/TO7dHSB.png',
      alt: 'Patient',
    },
    blurred: true,
    animateBlur: false,
  },
}

export const Unblurred: Story = {
  args: {
    title: 'Feeling blurry about your future?',
    subtitle: `Let's clear things up. We'll help you find a role with impact and a community to support your growth.`,
    ctas: [
      {
        url: '#',
        label: 'See Practice Opportunities',
      },
      {
        url: '#',
        label: 'Connect With Us',
      },
    ],
    image: {
      src: 'https://i.imgur.com/TO7dHSB.png',
      alt: 'Patient',
    },
    blurred: false,
  },
}

export const AnimatedBlur: Story = {
  args: {
    title: 'Feeling blurry about your future?',
    subtitle: `Let's clear things up. We'll help you find a role with impact and a community to support your growth.`,
    ctas: [
      {
        url: '#',
        label: 'See Practice Opportunities',
      },
      {
        url: '#',
        label: 'Connect With Us',
      },
    ],
    image: {
      src: 'https://i.imgur.com/TO7dHSB.png',
      alt: 'Patient',
    },
    blurred: true,
    animateBlur: true,
  },
}
