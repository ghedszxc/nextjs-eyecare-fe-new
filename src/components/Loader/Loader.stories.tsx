import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { Loader } from './Loader'

type StoryProps = ComponentProps<typeof Loader>

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader ',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
  args: {},
}
