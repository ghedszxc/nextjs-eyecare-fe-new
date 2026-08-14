import type { Meta, StoryObj } from '@storybook/react-vite'

import { InfoCard } from '.'

const meta: Meta<typeof InfoCard> = {
  title: 'Components/InfoCard',
  component: InfoCard,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof InfoCard>

export const Icon: Story = {
  args: {
    icon: 'watchBlack',
    title: 'Heading',
    subtitle: 'Description',
  },
}

export const Badge: Story = {
  args: {
    badge: '1',
    title: 'Heading',
    subtitle: 'Description',
  },
}
