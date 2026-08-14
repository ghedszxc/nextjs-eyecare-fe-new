import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState, type ComponentProps } from 'react'
import type { NewsCardProps } from '@components/NewsCard'
import { Pagination } from '@components/Pagination'

import { BlogSearchResultsList } from './index'

type StoryProps = ComponentProps<typeof BlogSearchResultsList>

const meta: Meta<typeof BlogSearchResultsList> = {
  title: 'Widgets/BlogSearchResultsList',
  component: BlogSearchResultsList,
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
]

export const Default: Story = {
  render: () => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    const SEARCH_TEXT = 'News'

    function getTotalPages(totalItems: number) {
      if (totalItems <= 10) return 1

      return 1 + Math.ceil((totalItems - 10) / 9)
    }

    function getPageRange(page: number) {
      if (page === 1) {
        return { start: 0, end: 10 }
      }

      const start = 10 + (page - 2) * 9
      const end = start + 9

      return { start, end }
    }

    const { start, end } = getPageRange(page)
    const pageItems = items.slice(start, end)

    return (
      <BlogSearchResultsList
        items={pageItems}
        searchValue={search}
        onSearchChange={setSearch}
        onSearchSubmit={search => {
          alert(`search value: ${search}`)
          setSearch('')
        }}
      >
        <BlogSearchResultsList.Search>
          {pageItems && pageItems.length > 0
            ? `Search results for “${SEARCH_TEXT}”:`
            : `No search results for “${SEARCH_TEXT}”`}
        </BlogSearchResultsList.Search>

        <BlogSearchResultsList.Pagination>
          <Pagination
            hasNumber
            currentPage={page}
            totalPages={getTotalPages(items.length as number)}
            onPageChange={setPage}
          />
        </BlogSearchResultsList.Pagination>
      </BlogSearchResultsList>
    )
  },
}
