import type { Meta, StoryObj } from '@storybook/react-vite'
import { BrandsStrip } from '@components/BrandsStrip'

const DEFAULT_LOGOS = [
  {
    src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112856/data/fb6eea1f972c52e6ca1f8886d84e3661/1ctalogobrandstab.png',
    alt: 'LensCrafters logo',
  },
  {
    src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112866/data/b3ac6090d78951a963c46f7b55aca7ec/2ctalogobrandstab.png',
    alt: 'For Eyes logo',
  },
  {
    src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112878/data/d98bfae3feaf914a6c3e8ab7a9209fa1/3ctalogobrandstab.png',
    alt: 'Optical logo',
  },
  {
    src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112890/data/1d6ee32659402e7105315f43f6b0c3ad/4ctalogobrandstab.png',
    alt: 'Pearle Vision logo',
  },
]

const DEFAULT_CTA = { url: '#', label: 'Meet our brands' }

const meta: Meta<typeof BrandsStrip> = {
  title: 'Components/BrandsStrip',
  component: BrandsStrip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'The color theme of the strip',
    },
    size: {
      control: 'select',
      options: ['small'],
      description: 'Sets the padding and logo scaling',
    },
    logos: {
      control: 'object',
      description: 'Array of logo objects {src, alt}',
    },
  },
  args: {
    variant: 'light',
    logos: DEFAULT_LOGOS,
    cta: DEFAULT_CTA,
  },
}

export default meta
type Story = StoryObj<typeof BrandsStrip>

export const Light: Story = {
  args: { variant: 'light' },
}

export const LightSmall: Story = {
  args: { ...Light.args, size: 'small' },
}

export const LightWithText: Story = {
  args: {
    ...Light.args,
    title: 'POWERED BY',
    logos: [DEFAULT_LOGOS[3]],
  },
}

export const Dark: Story = {
  args: { variant: 'dark' },
}

export const DarkSmall: Story = {
  args: { ...Dark.args, size: 'small' },
}

export const DarkWithText: Story = {
  args: {
    ...Dark.args,
    title: 'POWERED BY',
    logos: [DEFAULT_LOGOS[3]],
  },
}
