import type { Meta, StoryObj } from '@storybook/react-vite'
import { type ComponentProps } from 'react'
import type { NewsCardProps } from '@components/NewsCard'
import { NewsCard } from '@components/NewsCard'

import { Grid } from './Grid'
import { GridItem } from './Grid.Item'

type StoryProps = ComponentProps<typeof Grid>

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<StoryProps>

const items: NewsCardProps[] = [
  {
    image: {
      alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Target Optical December Offers',
    tag: 'feature',
    description:
      'The below offers will be present to support Target Optical locations through the end of the year!',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Vision Care Awareness Week',
    tag: 'news',
    description:
      'Join us as we promote eye health and preventive care across participating locations.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Holiday Eyewear Collection Launch',
    tag: 'feature',
    description:
      'Discover the latest frames and styles arriving just in time for the holiday season.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Employee Spotlight: Regional Excellence',
    tag: 'people',
    description: 'Meet team members making a positive impact across our retail network.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'New Store Opening Celebration',
    tag: 'event',
    description: 'Celebrate the grand opening of our newest location with special promotions.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Digital Tools Training Available',
    tag: 'training',
    description: 'New learning resources are now available to support digital platform adoption.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Customer Experience Success Story',
    tag: 'feature',
    description: 'Learn how one team improved customer satisfaction through service innovation.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Back-to-School Eye Exam Campaign',
    tag: 'campaign',
    description: 'Supporting families with accessible eye care services and educational materials.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Frame Styling Tips for Winter',
    tag: 'lifestyle',
    description: 'Explore expert recommendations for selecting eyewear this season.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Community Outreach Highlights',
    tag: 'community',
    description: 'See how local teams are giving back through vision care initiatives.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
]

export const Default: Story = {
  render: () => {
    return (
      <div style={{ padding: 10 }}>
        <Grid role="list">
          {items.map((item, index) => (
            <GridItem key={item.title ?? index} role="listitem">
              <NewsCard {...item} />
            </GridItem>
          ))}
        </Grid>
      </div>
    )
  },
}

export const CustomSpan: Story = {
  render: () => {
    return (
      <div style={{ padding: 10 }}>
        <Grid role="list" columns={12}>
          {items.map((item, index) => (
            <GridItem key={item.title ?? index} role="listitem" colSpan={{ xl: 4, lg: 6, md: 12 }}>
              <NewsCard {...item} />
            </GridItem>
          ))}
        </Grid>
      </div>
    )
  },
}
