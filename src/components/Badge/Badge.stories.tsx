import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { Badge } from './Badge'

type StoryProps = ComponentProps<typeof Badge>

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge ',
  component: Badge,
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
    variant: 'default',
    children: 'Book',
    size: 'md',
    icon: {
      type: 'watchBlack',
    },
  },
}

export const WithIcon: Story = {
  args: {
    variant: 'default',
    children: 'feature',
    size: 'md',
    icon: {
      type: 'tiltedRightBlack',
    },
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'default',
    children: 'feature',
    size: 'md',
    icon: {
      type: 'checkedBox',
    },
    iconOnly: true,
  },
}

export const Small: Story = {
  args: {
    variant: 'default',
    children: 'feature',
    size: 'sm',
  },
}

export const Clickable: Story = {
  args: {
    variant: 'default',
    children: 'feature',
    size: 'sm',
    clickable: true,
    disabled: false,
  },
}

export const DisabledClickable: Story = {
  args: {
    variant: 'default',
    children: 'feature',
    size: 'sm',
    clickable: true,
    disabled: true,
  },
}
