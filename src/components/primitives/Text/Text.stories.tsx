import type { Meta, StoryObj } from '@storybook/react-vite'

import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span'],
      description: 'The HTML element to render.',
    },
    promoteToH1: {
      control: 'boolean',
      description: 'Forces the component to render as an h1 regardless of the tag prop.',
    },
    children: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'This is a default paragraph text.',
    tag: 'p',
  },
}

export const PromotedToH1: Story = {
  args: {
    tag: 'p',
    promoteToH1: true,
    children: 'I am technically an H1 tag now.',
  },
}

export const Styling: Story = {
  args: {
    tag: 'span',
    className: 'body',
    children: 'Text with custom className applied.',
    style: { color: 'red', fontWeight: 'bold' },
  },
}
