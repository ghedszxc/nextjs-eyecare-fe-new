import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Sidebar } from '.'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    onToggle: { action: 'toggle' },
    onSelect: { action: 'select' },
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

const sampleCategories = [
  { label: 'All Resources', active: true, hasNotification: true },
  { label: 'Clinical Education', value: 'Clinical Education', hasNotification: false },
  { label: 'Practice Management', value: 'Practice Management', hasNotification: false },
  { label: 'Marketing & Promotions', value: 'Marketing & Promotions', hasNotification: false },
  { label: 'Product Guides', value: 'Product Guides', hasNotification: false },
  { label: 'Billing & Coding', value: 'Billing & Coding', hasNotification: false },
  { label: 'Technology & Tools', value: 'Technology & Tools', hasNotification: false },
]

/** Desktop category list. Selecting an item is wired to local state. */
export const Desktop: Story = {
  args: {
    categories: sampleCategories,
    isMobile: false,
    selectedIndex: 0,
  },
  render: args => {
    const [selectedIndex, setSelectedIndex] = useState(args.selectedIndex)
    return <Sidebar {...args} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
  },
}

/** Mobile — collapses to a hamburger button that opens the categories drawer. */
export const Mobile: Story = {
  args: {
    categories: sampleCategories,
    isMobile: true,
    selectedIndex: 0,
  },
}
