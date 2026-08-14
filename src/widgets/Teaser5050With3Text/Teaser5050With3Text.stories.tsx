import type { Meta, StoryObj } from '@storybook/react-vite'

import { Teaser5050With3Text } from '.'

const meta: Meta<typeof Teaser5050With3Text> = {
  title: 'Widgets/[Module 9] 5050with3Text',
  component: Teaser5050With3Text,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Teaser5050With3Text>

export const LeftSideText: Story = {
  args: {
    variant: 'left',
    title: 'Flexibility & Fullfilment',
    cards: [
      {
        badge: '1',
        title: 'Flexible Career Paths',
        subtitle:
          'Choose the professional journey that fits your goals, whether it’s remote practice, franchise ownership, or employment.',
      },
      {
        badge: '2',
        title: 'Supportive Community',
        subtitle:
          'Connect with a vast network of over 2,000 optometrists for mentorship, knowledge sharing, and peer support.',
      },
      {
        badge: '3',
        title: 'Global Impact',
        subtitle:
          'Share your expertise and passion by providing essential eye care to underserved communities worldwide through our OneSight partnership.',
      },
    ],
    image: {
      desktop: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112912/data/54f4a6cefa9833de607237f5bbed367b/picture1.jpg',
        alt: 'Eye doctor with patient',
      },
      mobile: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112912/data/54f4a6cefa9833de607237f5bbed367b/picture1.jpg',
        alt: 'Eye doctor with patient',
      },
    },
  },
}

export const RightSideText: Story = {
  args: {
    variant: 'right',
    title: 'Flexibility & Fullfilment',
    cards: [
      {
        badge: '1',
        title: 'Flexible Career Paths',
        subtitle:
          'Choose the professional journey that fits your goals, whether it’s remote practice, franchise ownership, or employment.',
      },
      {
        badge: '2',
        title: 'Supportive Community',
        subtitle:
          'Connect with a vast network of over 2,000 optometrists for mentorship, knowledge sharing, and peer support.',
      },
      {
        badge: '3',
        title: 'Global Impact',
        subtitle:
          'Share your expertise and passion by providing essential eye care to underserved communities worldwide through our OneSight partnership.',
      },
    ],
    image: {
      desktop: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112912/data/54f4a6cefa9833de607237f5bbed367b/picture1.jpg',
        alt: 'Eye doctor with patient',
      },
      mobile: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112912/data/54f4a6cefa9833de607237f5bbed367b/picture1.jpg',
        alt: 'Eye doctor with patient',
      },
    },
  },
}
