/* eslint-disable */
// @ts-nocheck

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'
import type { BrandCardProps } from '@components/BrandCard'

import lenscraftersIcon from '@assets/logo/brands/lenscrafters.png'
import foreyesIcon from '@assets/logo/brands/for-eyes.png'
import opticalIcon from '@assets/logo/brands/optical.png'
import pearlevisionIcon from '@assets/logo/brands/pearle-vision.png'

import { LocationsBrandCards } from './LocationsBrandCards'

type StoryProps = ComponentProps<typeof LocationsBrandCards>

const meta: Meta<typeof LocationsBrandCards> = {
  title: 'Widgets/[Module 7] LocationsBrandCards',
  component: LocationsBrandCards,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<StoryProps>

const items: BrandCardProps[] = [
  {
    title: 'Locations',
    subtitle: '0+',
    image: {
      src: lenscraftersIcon,
      alt: 'brand-lens',
    },
    animationSettings: {
      to: 1000,
      suffix: '+',
    },
  },
  {
    title: 'Locations',
    subtitle: '0+',
    image: {
      src: foreyesIcon,
      alt: 'brand-for-eyes',
    },
    animationSettings: {
      to: 1000,
      suffix: '+',
    },
  },
  {
    title: 'Locations',
    subtitle: '0+',
    image: {
      src: opticalIcon,
    },
    animationSettings: {
      to: 550,
      suffix: '+',
    },
  },
  {
    title: 'Locations',
    subtitle: '0+',
    image: {
      src: pearlevisionIcon,
      alt: 'brand-pearle-vision',
    },
    animationSettings: {
      to: 550,
      suffix: '+',
    },
  },
]
export const Default: Story = {
  args: {
    title: 'Our Locations',
    subtitle:
      'With locations across the United States and Canada, chances are there’s an EssilorLuxottica opportunity near you. ',
    cards: items,

    image: {
      src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1116648/data/5682b8cfe364ba2650ae07ccde973c35/location-brands-image.png',
      alt: 'location brands image',
    },
  },
}
