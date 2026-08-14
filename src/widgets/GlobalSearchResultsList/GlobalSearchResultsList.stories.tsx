import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState, type ComponentProps } from 'react'
import { Pagination } from '@components/Pagination'
import type { ResourceItem } from '@components/ResourceCardItem'

import { GlobalSearchResultsList } from './index'

type StoryProps = ComponentProps<typeof GlobalSearchResultsList>

const meta: Meta<typeof GlobalSearchResultsList> = {
  title: 'Widgets/GlobalSearchResultsList',
  component: GlobalSearchResultsList,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<StoryProps>

const items: ResourceItem[] = [
  {
    date: '01 Feb 2020',
    href: '#',
    title: 'Extending Office Hours & Availability for TAB',
    bodyText: 'Extending Office Hours & Availability',
    type: 'pdf',
    id: '',
  },
  {
    date: '28 Jan 2020',
    href: '#',
    title: 'Extend Office Hours and Insert Doctor Features',
    bodyText:
      "Learn more about this admin feature that can create temporary online hours. This feature is used most often during holiday's or busy times.",
    type: 'externalLink',
    id: '',
  },
]

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1)

    const SEARCH_TEXT = 'Extend'

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
      <GlobalSearchResultsList items={pageItems}>
        <GlobalSearchResultsList.Search>
          {pageItems && pageItems.length > 0
            ? `Search results for “${SEARCH_TEXT}”:`
            : `No search results for “${SEARCH_TEXT}”`}
        </GlobalSearchResultsList.Search>

        <GlobalSearchResultsList.Pagination>
          <Pagination
            hasNumber
            currentPage={page}
            totalPages={getTotalPages(items.length as number)}
            onPageChange={setPage}
          />
        </GlobalSearchResultsList.Pagination>
      </GlobalSearchResultsList>
    )
  },
}
