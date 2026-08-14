import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'
import { UpcomingEventCard } from '@components/UpcomingEventCard'

import { Carousel } from './Carousel'

type StoryProps = ComponentProps<typeof Carousel>

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel ',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<StoryProps>

const slides = [
  {
    image: {
      alt: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
      src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
    },
    date: 'WED ⋅ June 17, 2026 ⋅ 8:00 PM',
    title: 'EssilorLuxottica Live!',
    location: 'Phoenix, Arizona',
    description:
      'Experience the event that consistently defines the student experience at AOA. EssilorLuxottica Live! combines premier education with an exclusive evening celebration.',
  },
  {
    image: {
      alt: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
      src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
    },
    date: 'THU ⋅ June 9, 2026 ⋅ 9:00 AM',
    title: 'Sale for Sight',
    location: 'Washington, DC',
    description:
      'EssilorLuxottica Eye Care partners with OneSight to host Sale for Sight, a charity sale offering discounted prices on EssilorLuxottica brand frames (sun and optical) and apparel.',
  },
  {
    image: {
      alt: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
      src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
    },
    date: 'THU ⋅ August 21, 2026 ⋅ 6:00 PM',
    title: 'Academy Student Reception',
    location: 'Los Angeles, California',
    description:
      "Join us for a high-energy reception designed to start your conference on the right note. Whether it's a runway fashion show or a live talent competition, this is your moment to connect with peers and celebrate the student community before the sessions begin.",
  },
]

export const Default: Story = {
  args: {
    slides: slides.map(slide => <UpcomingEventCard key={slide.title} {...slide} />),
    spaceBetween: 10,
    slidesPerView: 1,
  },
}
