import type { Meta, StoryObj } from '@storybook/react-vite'

import { ColTextMenu } from '.'

const meta: Meta<typeof ColTextMenu> = {
  title: 'Components/ColTextMenu',
  component: ColTextMenu,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    url: { control: 'text' },
    isExternal: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A single column-menu link built on the Button component: a label followed by a chevron. Resting state is plain; the label underlines on hover / tap and the item shows a focus outline when focused via keyboard.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ColTextMenu>

export const Default: Story = {
  args: {
    label: 'Business Planning Tools',
    url: '#',
  },
}

export const External: Story = {
  args: {
    label: 'External Eye Care Site',
    url: 'https://example.com',
    isExternal: true,
  },
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <p style={{ marginBottom: 8, color: '#4d4d4d' }}>Resting</p>
        <ColTextMenu label="Business Planning Tools" url="#" />
      </div>
      <div>
        <p style={{ marginBottom: 8, color: '#4d4d4d' }}>Hover / Tapped (hover me)</p>
        <ColTextMenu label="Business Planning Tools" url="#" />
      </div>
      <div>
        <p style={{ marginBottom: 8, color: '#4d4d4d' }}>Focused (tab to me)</p>
        <ColTextMenu label="Business Planning Tools" url="#" />
      </div>
    </div>
  ),
}
