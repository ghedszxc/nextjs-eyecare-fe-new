import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@components/Button'
import { svgs } from '@components/Icon'

import { ButtonVariants } from './Button.types'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ButtonVariants,
    },
    icon: {
      control: 'select',
      options: Object.keys(svgs),
      // mapping: svgs,
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    fullWidth: false,
    icon: 'rightWhite',
  },
}

export const Icon: Story = {
  argTypes: {
    logo: {
      if: { arg: 'icon', exists: false },
    },
  },
  args: {
    ...Default.args,
  },
}

export const Picture: Story = {
  argTypes: {
    icon: {
      if: { arg: 'logo', exists: false },
    },
  },
  args: {
    logo: {
      src: 'https://img.icons8.com/?size=48&id=QEjCtdXzfP6B&format=png&color=ffffff',
      alt: 'Logo',
    },
    ...Default.args,
  },
}

export const TabButton: Story = {
  args: {
    children: 'Button',
    variant: 'tabbutton',
    fullWidth: false,
  },
}

export const Palette: Story = {
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
    logo: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
      }}
    >
      <Button variant="primary" icon="rightWhite">
        Primary
      </Button>

      <Button variant="secondary" icon="rightBlack">
        Secondary
      </Button>

      <Button variant="ghost" icon="rightBlack">
        Ghost
      </Button>

      <Button variant="nofill" icon="rightWhite">
        No Fill
      </Button>

      <Button variant="grey" icon="rightWhite">
        Grey
      </Button>

      <Button variant="nofillblack" icon="rightBlack">
        No Fill Black
      </Button>

      <Button variant="shiny">Shiny</Button>

      <Button variant="textmenu" icon="chevronRight" className="subheading">
        Text Menu
      </Button>
    </div>
  ),
}
