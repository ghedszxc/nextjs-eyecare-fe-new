import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { EventList } from './EventList'

type StoryProps = ComponentProps<typeof EventList>

const meta: Meta<typeof EventList> = {
  title: 'Widgets/[Module 15] EventList',
  component: EventList,
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
    title: 'Upcoming Events',
    items: [
      {
        // cta: {
        //   label: 'Register',
        //   url: '#',
        //   icon: 'rightBlack',
        // },
        image: {
          alt: 'essilorluxottica live!',
          src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1952370/data/bcd4b5b4003d533b6f0eaf44452e3698',
        },
        date: 'WED ⋅ June 17, 2026 ⋅ 8:00 PM',
        title: 'EssilorLuxottica Live!',
        location: 'Phoenix, Arizona',
        description:
          'Experience the event that consistently defines the student experience at AOA. EssilorLuxottica Live! combines premier education with an exclusive evening celebration.',
      },
      {
        image: {
          alt: 'sale for sight',
          src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1117026/data/e7c9be4edd6dc468be2ea0fcaabee63b/eventlist2-image.png',
        },
        date: 'THU ⋅ June 9, 2026 ⋅ 9:00 AM',
        title: 'Sale for Sight',
        location: 'Washington, DC',
        description:
          'EssilorLuxottica Eye Care partners with OneSight to host Sale for Sight, a charity sale offering discounted prices on EssilorLuxottica brand frames (sun and optical) and apparel.',
      },
      {
        image: {
          alt: 'academy student reception',
          src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1117028/data/e7eefd272eda01baaa0a59422864708b/eventlist3-desktop-image.png',
        },
        date: 'THU ⋅ August 21, 2026 ⋅ 6:00 PM',
        title: 'Academy Student Reception',
        location: 'Los Angeles, California',
        description:
          "Join us for a high-energy reception designed to start your conference on the right note. Whether it's a runway fashion show or a live talent competition, this is your moment to connect with peers and celebrate the student community before the sessions begin.",
      },
    ],
    // cta: {
    //   label: 'View all',
    //   url: '#',
    //   icon: 'rightWhite',
    // },
  },
}

export const EventsList: Story = {
  name: 'internalEventList',

  args: {
    variant: 'internalEventList',
    backgroundColor: '#F3F3F3',
    title: 'Upcoming Events',
    items: [
      {
        image: {
          alt: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
        },
        date: 'WED ⋅ June 17, 2026 ⋅ 8:00 PM',
        title: 'Academy 2024 Indianapolis',
        location: 'Phoenix, Arizona',
        description:
          'Academy offers a wide selection of clinically relevant CE courses and progressive research in the clinical and vision sciences.',
        cta: {
          label: 'Register',
          url: '#',
        },
      },
      {
        image: {
          alt: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
        },
        date: 'WED ⋅ October 24, 2026 ⋅ 9:00 AM',
        title: 'LIVE Connect to Grow',
        location: 'Washington, DC',
        description: 'Chicago, Illinois',
        cta: {
          label: 'Register',
          url: '#',
        },
      },
      {
        image: {
          alt: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
        },
        date: 'FRI ⋅ December 3, 2026 ⋅ 9:00 to 10:00 PM EST',
        title: 'Medical Billing: Credentialing is Complete Now What',
        location: 'Los Angeles, California',
        description:
          'This course will teach doctors and staff how to benefit from correct billing and coding with medical and vision plans.',
        cta: {
          label: 'Register',
          url: '#',
        },
      },
    ],
    cta: {
      label: 'View all',
      url: '#',
      icon: 'rightBlack',
    },
  },
}
