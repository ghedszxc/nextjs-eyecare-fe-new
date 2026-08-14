import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ResourceView } from '@components/ResourceCardItem'

import { FilterBar } from '.'
import type { FilterOption, SortOption } from '.'

const meta: Meta<typeof FilterBar> = {
  title: 'Components/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
  argTypes: {
    onViewChange: { action: 'viewChange' },
    onFilterChange: { action: 'filterChange' },
    onSortChange: { action: 'sortChange' },
    onSearchChange: { action: 'searchChange' },
  },
}

export default meta
type Story = StoryObj<typeof FilterBar>

/**
 * Interactive wrapper — FilterBar is fully controlled, so the story holds the
 * view / filter / sort / search state locally.
 */
const StatefulFilterBar = ({ isMobile }: { isMobile: boolean }) => {
  const [view, setView] = useState<ResourceView>('grid')
  const [filterValue, setFilterValue] = useState<FilterOption>('all')
  const [sortValue, setSortValue] = useState<SortOption>('latest')
  const [searchValue, setSearchValue] = useState('')

  return (
    <FilterBar
      isMobile={isMobile}
      view={view}
      onViewChange={setView}
      filterValue={filterValue}
      onFilterChange={setFilterValue}
      sortValue={sortValue}
      onSortChange={setSortValue}
      searchValue={searchValue}
      onSearchChange={setSearchValue}
    />
  )
}

export const Desktop: Story = {
  render: () => <StatefulFilterBar isMobile={false} />,
}

export const Mobile: Story = {
  render: () => <StatefulFilterBar isMobile />,
}
