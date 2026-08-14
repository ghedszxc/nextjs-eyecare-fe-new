import type { Meta, StoryObj } from '@storybook/react-vite'

import { TimelineCards } from '.'

const meta: Meta<typeof TimelineCards> = {
  title: 'Widgets/[Module 14] timelineCards',
  component: TimelineCards,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof TimelineCards>

export const Default: Story = {
  args: {
    cards: [
      {
        text: 'Highly qualified tech completes all of the pre-testing onsite.',
        logo: {
          src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983286/data/5a48cc340b21709dab9844378b7da7ce/clipboard.svg',
          alt: 'clipboard-icon',
        },
      },
      {
        text: 'Doctor completes refraction & consultation remotely via digital screen in office.',
        logo: {
          src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983288/data/193c4675ea52637a1a9689b837d5439e/workhome.svg',
          alt: 'workhome-icon',
        },
      },
      {
        text: 'Patient receives an advanced, uncompromising patient experience at a convenient time for them.',
        logo: {
          src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983290/data/3a6b153fc17631bf632f75ccfbbd19e9',
          alt: 'smile-icon',
        },
      },
    ],
    captionText:
      'Our remote-optometry solution is NOT just a method to update eyeglasses and contact lens prescriptions. It is NOT an online refraction solution only.',
  },
}
