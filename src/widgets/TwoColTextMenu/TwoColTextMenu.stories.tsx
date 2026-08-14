import type { Meta, StoryObj } from '@storybook/react-vite'

import type { ITwoColTextMenuSection } from './TwoColTextMenu.types'

import { TwoColTextMenu } from '.'

const meta: Meta<typeof TwoColTextMenu> = {
  title: 'Widgets/TwoColTextMenu',
  component: TwoColTextMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof TwoColTextMenu>

const sections: ITwoColTextMenuSection[] = [
  {
    title: 'Practice Management',
    items: [
      { label: 'Business Planning Tools', url: '#' },
      { label: 'Sublease Administration', url: '#' },
      { label: 'Insurance', url: '#' },
      { label: 'The Appointment Book (TAB)', url: '#' },
      { label: 'Environmental Health & Safety', url: '#' },
    ],
  },
  {
    title: 'Clinical Resources',
    items: [
      { label: 'Myopia Management', url: '#' },
      { label: 'Contact Lenses', url: '#' },
      { label: 'Lenses', url: '#' },
      { label: 'Technology', url: '#' },
      { label: 'Nuance Audio Glasses', url: '#' },
      { label: 'Education', url: '#' },
      { label: 'Giving Back', url: '#' },
    ],
  },
  {
    title: 'Newsroom',
    items: [
      { label: 'News', url: '#' },
      { label: 'Events', url: '#' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'OD Marketing 101', url: '#' },
      { label: 'Support', url: '#' },
      { label: 'Alerts', url: '#' },
    ],
  },
  {
    title: 'Other links',
    items: [
      { label: 'OD Marketing Hub', url: '#' },
      { label: 'External Eye Care Site', url: 'https://example.com', isExternal: true },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Terms of Use', url: '#' },
      { label: 'Privacy Policy', url: '#' },
      { label: 'Canada Privacy Policy', url: '#' },
    ],
  },
]

export const Default: Story = {
  args: {
    sections,
  },
}
