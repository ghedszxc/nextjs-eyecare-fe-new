import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { UpcomingEventCard } from './UpcomingEventCard'

type StoryProps = ComponentProps<typeof UpcomingEventCard>

const meta: Meta<typeof UpcomingEventCard> = {
  title: 'Components/UpcomingEventCard ',
  component: UpcomingEventCard,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
  args: {
    image: {
      alt: 'essilorlucottica live!',
      src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
    },

    date: 'WED ⋅ June 17, 2026 ⋅ 8:00 PM',
    title: 'EssilorLuxottica Live!',
    location: 'Phoenix, Arizona',

    description:
      'Experience the event that consistently defines the student experience at AOA. EssilorLuxottica Live! combines premier education with an exclusive evening celebration.',

    direction: 'vertical',

    cta: {
      label: 'Register',
      url: '#',
      icon: 'rightBlack',
    },
  },
}
