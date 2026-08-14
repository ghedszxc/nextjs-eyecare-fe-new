import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { NewsCard } from './NewsCard'

type StoryProps = ComponentProps<typeof NewsCard>

const meta: Meta<typeof NewsCard> = {
  title: 'Components/NewsCard ',
  component: NewsCard,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
  argTypes: {
    direction: {
      control: {
        type: 'radio',
      },
      options: ['horizontal', 'vertical'],
    },
  },
  render: args => {
    const { direction } = args

    return (
      <div style={{ padding: 5 }}>
        <NewsCard
          image={{
            alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
            src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
          }}
          date={{
            label: '5 Dec 2025',
            value: '2025-12-05',
          }}
          title="Target Optical December Offers"
          tag="feature"
          description="The below offers will be present to support Target Optical locations through the end of the year!"
          direction={direction}
          cta={{
            label: 'Read more',
            url: '#',
            icon: 'tiltedRightBlack',
          }}
        />
      </div>
    )
  },
}
