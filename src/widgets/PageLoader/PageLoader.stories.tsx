import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'
// @ts-expect-error logo
import Logo from '@assets/logo/EL-EyeCare-Logo.png'

import { PageLoader } from '.'

type StoryProps = ComponentProps<typeof PageLoader>

const meta: Meta<typeof PageLoader> = {
  title: 'Widgets/PageLoader',
  component: PageLoader,
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
    children: (
      <PageLoader.Logo>
        <img src={Logo} alt="el eyecare icon" />
      </PageLoader.Logo>
    ),
  },
}
