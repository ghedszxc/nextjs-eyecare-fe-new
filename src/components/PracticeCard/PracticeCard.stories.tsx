import type { Meta, StoryObj } from '@storybook/react-vite'

import { PracticeCard } from '.'

const meta: Meta<typeof PracticeCard> = {
  title: 'Components/PracticeCard',
  component: PracticeCard,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof PracticeCard>

export const Default: Story = {
  args: {
    title: 'Be Employed',
    cta: {
      label: '',
      url: '#',
    },
    image: {
      src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112182/data/107cd76835fec615383f6c9a3ac9eb32/headerimagedesk.jpg',
      alt: 'Background',
    },
  },
}
