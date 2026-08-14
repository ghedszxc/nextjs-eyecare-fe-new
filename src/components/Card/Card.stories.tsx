import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '.'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    icon: 'location',
    title: 'Modern Locations',
    subtitle:
      'EssilorLuxottica Branded Practices are typically located in established, highly visible locations, which helps ensure a steady flow of patients.',
    cta: {
      label: 'Button',
      url: '#',
      icon: 'rightBlack',
    },
  },
}

export const Clickable: Story = {
  args: {
    icon: 'location',
    title: 'Modern Locations',
    subtitle:
      'EssilorLuxottica Branded Practices are typically located in established, highly visible locations, which helps ensure a steady flow of patients.',
    cta: {
      url: '#',
    },
  },
}
