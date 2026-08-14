import type { Meta, StoryObj } from '@storybook/react-vite'

import { Picture } from '.'

const meta: Meta<typeof Picture> = {
  title: 'Components/Picture',
  component: Picture,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Picture>

export const Default: Story = {
  args: {
    src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112030/data/3893cb7350df2d0478eb9adcc8aa2285/lrdimage.jpg',
    alt: 'Eye doctor with patient',
  },
}

export const Responsive: Story = {
  args: {
    desktop: {
      src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112030/data/3893cb7350df2d0478eb9adcc8aa2285/lrdimage.jpg',
      alt: 'Eye doctor with patient',
    },
    mobile: {
      src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112030/data/3893cb7350df2d0478eb9adcc8aa2285/lrdimage.jpg',
      alt: 'Eye doctor with patient',
    },
  },
}
