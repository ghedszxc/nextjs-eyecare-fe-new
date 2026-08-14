import type { Meta, StoryObj } from '@storybook/react-vite'

import { CountingCard } from '.'

const meta: Meta<typeof CountingCard> = {
  title: 'Components/CountingCard',
  component: CountingCard,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof CountingCard>

export const Default: Story = {
  args: {
    title: 'Locations',
    count: 1500,
    image: {
      src: 'https://media.essilorluxottica.com/cms/caas/v1/media/105268/data/8c589ed14823e38e9304d62cd7767744/targetoptical-bt.png',
      alt: 'Optical',
    },
  },
}
