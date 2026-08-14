/* eslint-disable */
// @ts-nocheck

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { BrandCard } from './BrandCard'
import lenscraftersIcon from '@assets/logo/brands/lenscrafters.png'

type StoryProps = ComponentProps<typeof BrandCard>

const meta: Meta<typeof BrandCard> = {
  title: 'Components/BrandCard ',
  component: BrandCard,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
  args: {
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
}
