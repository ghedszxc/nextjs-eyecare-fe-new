import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion } from './Accordion'
import type { AccordionItem } from './Accordion.types'

const DEFAULT_ITEMS: AccordionItem[] = [
  {
    id: 'ratings-reviews',
    title: 'Ratings & Reviews',
    content: (
      <div>
        <a href="/reviews/summary">Review Summary</a>
        <br />
        <a href="/reviews/all">All Reviews</a>
        <br />
        <a href="/reviews/analytics">Analytics Dashboard</a>
      </div>
    ),
  },
  {
    id: 'pages-listings',
    title: 'Pages & Listings',
    content: (
      <div>
        <a href="/pages/dashboard">Page Dashboard</a>
        <br />
        <a href="/pages/manage">Manage Listings</a>
        <br />
        <a href="/pages/categories">Categories</a>
        <br />
        <a href="/pages/seo">SEO Settings</a>
      </div>
    ),
  },
  {
    id: 'od-marketing',
    title: 'OD Marketing Hub',
    content: (
      <div>
        <a href="/marketing/campaigns">Campaigns</a>
        <br />
        <a href="/marketing/analytics">Analytics</a>
        <br />
        <a href="/marketing/audience">Audience</a>
        <br />
        <button
          style={{
            marginTop: '8px',
            padding: '6px 12px',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
          onClick={() => alert('Create campaign clicked')}
        >
          Create Campaign
        </button>
      </div>
    ),
  },
  {
    id: 'hyper-local-media',
    title: 'Hyper Local Media Program',
    content: (
      <div>
        <p style={{ marginBottom: '8px' }}>Manage your local media presence</p>
        <a href="/media/programs">Active Programs</a>
        <br />
        <a href="/media/insights">Local Insights</a>
      </div>
    ),
  },
]

const SIMPLE_ITEMS: AccordionItem[] = [
  {
    id: 'section-1',
    title: 'What is Lorem Ipsum?',
    content: <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>,
  },
  {
    id: 'section-2',
    title: 'Why do we use it?',
    content: (
      <div>
        It is a long established fact that a reader will be distracted by the readable content.
      </div>
    ),
  },
  {
    id: 'section-3',
    title: 'Where does it come from?',
    content: <div>Contrary to popular belief, Lorem Ipsum is not simply random text.</div>,
  },
]

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple items to be open simultaneously',
    },
    defaultOpenIds: {
      control: 'object',
      description: 'Array of item IDs to open by default',
    },
    items: {
      control: 'object',
      description: 'Array of accordion items',
    },
  },
  args: {
    allowMultiple: false,
    items: DEFAULT_ITEMS,
    defaultOpenIds: ['pages-listings'],
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    items: DEFAULT_ITEMS,
  },
}

export const MultipleOpen: Story = {
  args: {
    allowMultiple: true,
    defaultOpenIds: ['ratings-reviews', 'pages-listings'],
    items: DEFAULT_ITEMS,
  },
}

export const SingleItemOnly: Story = {
  args: {
    items: [SIMPLE_ITEMS[0]],
    defaultOpenIds: ['section-1'],
  },
}
