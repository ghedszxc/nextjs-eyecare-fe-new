import type { Meta, StoryObj } from '@storybook/react-vite'

import { ResourceCardItem } from '.'

const meta: Meta<typeof ResourceCardItem> = {
  title: 'Components/ResourceCardItem',
  component: ResourceCardItem,
  tags: ['autodocs'],
  argTypes: {
    view: {
      control: 'inline-radio',
      options: ['grid', 'list'],
    },
  },
}

export default meta
type Story = StoryObj<typeof ResourceCardItem>

const PDF_HREF =
  'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1119398/data/4078a8843c3db9d41c7629c1668e46aa'

const sampleItem = {
  title: 'EssilorLuxottica 2026 Product Catalog',
  date: 'Jan 15, 2026',
  type: 'externalLink' as const,
  href: PDF_HREF,
  hasNotification: true,
  category: 'Clinical Education',
  id: '1',
  bodyText: 'sample text',
}

export const Grid: Story = {
  args: {
    view: 'grid',
    item: sampleItem,
  },
}

export const List: Story = {
  args: {
    view: 'list',
    item: sampleItem,
  },
}

export const NoNotification: Story = {
  args: {
    view: 'grid',
    item: { ...sampleItem, hasNotification: false },
  },
}

export const GlobalSearchVariant: Story = {
  name: 'Global Search Variant - Restricted',
  args: {
    view: 'grid',
    variant: 'global-search',
    item: {
      title: 'Restricted',
      bodyText: 'Contact support for access',
      date: '',
      href: '',
      id: '1',
      hasNotification: false,
      type: 'restricted',
    },
  },
}
