import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'
import { Icon } from '@components/Icon'
import { Button } from '@components/Button'
import clsx from 'clsx'

import { Input } from './Input'
import styles from './Input.module.scss'

type StoryProps = ComponentProps<typeof Input>

const meta: Meta<typeof Input> = {
  title: 'Components/Input ',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
  render: () => (
    <div style={{ padding: 10 }}>
      <Input label="Search News" placeholder="Search News" required hideLabel />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div style={{ padding: 10 }}>
      <Input label="Search" placeholder="Search News" />
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div style={{ padding: 10 }}>
      <Input label="Search" placeholder="Search News" required />
    </div>
  ),
}

export const WithAdornments: Story = {
  render: () => (
    <div style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: 5 }}>
      <Input
        label="Search"
        placeholder="Search News"
        hideLabel
        startAdornment={<Icon type="search" />}
      />

      <Input
        label="Search"
        placeholder="Search News"
        hideLabel
        endAdornment={<Icon type="search" />}
      />

      <Input
        label="Search"
        placeholder="Search News"
        hideLabel
        startAdornment={<Icon type="search" />}
        endAdornment={<Icon type="search" />}
      />
    </div>
  ),
}

export const WithEndButton: Story = {
  render: () => (
    <div style={{ padding: 10 }}>
      <Input
        aria-label="search"
        placeholder="Search News"
        endAction={
          <Button
            variant="nofillblack"
            className={clsx(styles['end-action-button'])}
            aria-label="Search"
          >
            <Icon type="search" />
          </Button>
        }
      />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div style={{ padding: 10 }}>
      <Input
        disabled
        aria-label="search"
        placeholder="Search News"
        endAction={
          <Button
            variant="nofillblack"
            className={clsx(styles['end-action-button'])}
            aria-label="Search"
            disabled
          >
            <Icon type="search" />
          </Button>
        }
      />
    </div>
  ),
}
