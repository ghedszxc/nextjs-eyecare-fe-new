import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { Icon } from '@components/Icon'

import styles from './FilterBar.module.scss'
import type { FilterBarProps, FilterOption, SortOption } from './FilterBar.types'

const FILTER_OPTIONS: { value: FilterOption; label: string; icon: 'externalLink' | 'pdf' }[] = [
  { value: 'externalLink', label: 'Link', icon: 'externalLink' },
  { value: 'pdf', label: 'PDF', icon: 'pdf' },
]

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'az', label: 'A → Z' },
  { value: 'za', label: 'Z → A' },
]

export function FilterBar({
  view,
  onViewChange,
  isMobile,
  filterValue,
  onFilterChange,
  sortValue,
  onSortChange,
  searchValue,
  onSearchChange,
}: FilterBarProps) {
  const [openDropdown, setOpenDropdown] = useState<'filter' | 'sort' | 'search' | null>(null)
  const [searchState, setSearchState] = useState<'closed' | 'open' | 'closing'>('closed')
  const filterRef = useRef<HTMLDivElement>(null)
  const sortRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const closeSearch = () => {
    setSearchState('closing')
    onSearchChange('')
  }

  const clearSearch = () => {
    onSearchChange('')
    searchInputRef.current?.focus()
  }

  // Close dropdowns on outside click
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as Node
      if (filterRef.current?.contains(target) || sortRef.current?.contains(target)) return
      setOpenDropdown(null)
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [])

  // Auto-focus search input on open (desktop inline expand)
  useEffect(() => {
    if (searchState === 'open') searchInputRef.current?.focus()
  }, [searchState])

  return (
    <div className={styles.filterBar}>
      {/* View toggle — Grid / List */}
      <div className={styles.viewToggle}>
        <button
          type="button"
          className={clsx(styles.chip, view === 'grid' && styles.active)}
          onClick={() => onViewChange('grid')}
          aria-pressed={view === 'grid'}
        >
          <Icon type="grid" size={20} aria-hidden="true" />
          <span className={styles.chipLabel}>Grid</span>
        </button>
        <button
          type="button"
          className={clsx(styles.chip, view === 'list' && styles.active)}
          onClick={() => onViewChange('list')}
          aria-pressed={view === 'list'}
        >
          <Icon type="list" size={20} aria-hidden="true" />
          <span className={styles.chipLabel}>List</span>
        </button>
      </div>

      {/* Filter / Sort / Search */}
      <div className={styles.filterActions}>
        {/* Filter dropdown */}
        <div
          className={clsx(
            styles.dropdownWrapper,
            isMobile && searchState === 'open' && styles.filterFaded,
            isMobile && searchState === 'closing' && styles.filterFading
          )}
          ref={filterRef}
        >
          <button
            type="button"
            className={clsx(styles.chip, filterValue !== 'all' && styles.active)}
            onClick={() => setOpenDropdown(openDropdown === 'filter' ? null : 'filter')}
            aria-expanded={openDropdown === 'filter'}
          >
            <Icon type="filter" size={20} aria-hidden="true" />
            {!isMobile && <span className={styles.chipLabel}>Filter</span>}
          </button>
          {openDropdown === 'filter' && (
            <div className={styles.dropdownPanel} role="listbox" aria-label="Filter by type">
              {FILTER_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={filterValue === opt.value}
                  className={clsx(
                    styles.dropdownOption,
                    filterValue === opt.value && styles.selected
                  )}
                  onClick={() => {
                    onFilterChange(filterValue === opt.value ? 'all' : opt.value)
                    setOpenDropdown(null)
                  }}
                >
                  <Icon type={opt.icon} size={20} aria-hidden="true" />
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Sort dropdown */}
        <div
          className={clsx(
            styles.dropdownWrapper,
            isMobile && searchState === 'open' && styles.filterFaded,
            isMobile && searchState === 'closing' && styles.filterFading
          )}
          ref={sortRef}
        >
          <button
            type="button"
            className={styles.chip}
            onClick={() => setOpenDropdown(openDropdown === 'sort' ? null : 'sort')}
            aria-expanded={openDropdown === 'sort'}
          >
            <Icon type="internalFilter" size={20} aria-hidden="true" />
            {!isMobile && <span className={styles.chipLabel}>Sort</span>}
          </button>
          {openDropdown === 'sort' && (
            <div className={styles.dropdownPanel} role="listbox" aria-label="Sort by">
              {SORT_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={sortValue === opt.value}
                  className={clsx(
                    styles.dropdownOption,
                    sortValue === opt.value && styles.selected
                  )}
                  onClick={() => {
                    onSortChange(opt.value)
                    setOpenDropdown(null)
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search — unified inline expand/collapse for both mobile and desktop */}
        {searchState !== 'closed' ? (
          <div
            className={clsx(
              styles.searchExpanded,
              searchState === 'closing' && styles.searchCollapsing
            )}
            onAnimationEnd={() => {
              if (searchState === 'closing') setSearchState('closed')
            }}
          >
            <span className={styles.searchIconInner}>
              <Icon type="search" size={20} aria-hidden="true" />
            </span>
            <input
              ref={searchInputRef}
              type="text"
              className={styles.searchInput}
              placeholder="Search…"
              value={searchValue}
              onChange={e => onSearchChange(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Escape') {
                  if (searchValue) clearSearch()
                  else closeSearch()
                }
              }}
              onBlur={() => {
                if (!searchValue) closeSearch()
              }}
            />
            {searchValue && (
              <button
                type="button"
                className={styles.searchClear}
                aria-label="Clear search"
                onMouseDown={e => e.preventDefault()}
                onClick={clearSearch}
              >
                <Icon type="xBlack" size={16} aria-hidden="true" />
              </button>
            )}
          </div>
        ) : (
          <button
            type="button"
            className={styles.chip}
            onClick={() => {
              setOpenDropdown(null)
              setSearchState('open')
            }}
          >
            <Icon type="search" size={20} aria-hidden="true" />
            {!isMobile && <span className={styles.chipLabel}>Search</span>}
          </button>
        )}
      </div>
    </div>
  )
}
