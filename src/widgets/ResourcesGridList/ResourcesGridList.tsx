'use client'
import { useState, useRef, useSyncExternalStore } from 'react'
import clsx from 'clsx'
import useViewPort from '@hooks/useViewPort'
import { Icon } from '@components/Icon'
import { FilterBar, type FilterOption, type SortOption } from '@components/FilterBar'
import { Sidebar, type SidebarCategory } from '@components/Sidebar'
import { ResourceCardItem, type ResourceView } from '@components/ResourceCardItem'
import { Pagination } from '@components/Pagination'

import styles from './ResourcesGridList.module.scss'
import type { ResourcesGridListProps } from './ResourcesGridList.types'

// ---------------------------------------------------------------------------
// Main widget
// ---------------------------------------------------------------------------

const ITEMS_PER_PAGE = 12

// Slug a category maps to in the URL hash. Must stay in sync with the hash
// written in handleSelectCategory so a hash can be resolved back to a category.
const getCategorySlug = (cat?: SidebarCategory) =>
  cat?.extension || cat?.label?.replaceAll(' ', '-').toLocaleLowerCase()

// useSyncExternalStore wiring so the selected category can derive from the URL
// hash. getServerSnapshot returns '' so SSR + hydration render the default
// (no window access), then the client re-syncs to the real hash after mount —
// avoiding a hydration mismatch without a setState-in-effect.
const subscribeHash = (onStoreChange: () => void) => {
  window.addEventListener('hashchange', onStoreChange)
  return () => window.removeEventListener('hashchange', onStoreChange)
}
const getHashSnapshot = () => window.location.hash
const getServerHashSnapshot = () => ''

export const ResourcesGridList = ({
  className,
  items = [],
  categories = [],
  defaultView = 'grid',
  defaultFilter = 'all',
  defaultSort = 'latest',
}: ResourcesGridListProps) => {
  const [view, setView] = useState<ResourceView>(defaultView)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [filterValue, setFilterValue] = useState<FilterOption>(defaultFilter)
  const [sortValue, setSortValue] = useState<SortOption>(defaultSort)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const widgetRef = useRef<HTMLDivElement>(null)
  const { is } = useViewPort()
  const isMobile = is('tablet', 'below')

  // The selected category is derived from the URL hash (single source of truth).
  // Clicking a category updates the hash + dispatches 'hashchange', which drives
  // this re-computation, and deep links select the matching category on load.
  const currentHash = useSyncExternalStore(subscribeHash, getHashSnapshot, getServerHashSnapshot)
  const selectedCategory = (() => {
    const hash = decodeURIComponent(currentHash.replace(/^#/, ''))
    if (hash) {
      const hashIndex = categories.findIndex(cat => getCategorySlug(cat) === hash)
      if (hashIndex !== -1) return hashIndex
    }
    // No hash (or no match): fall back to the active category, else the first.
    const activeIndex = categories.findIndex(cat => cat.active)
    return activeIndex === -1 ? 0 : activeIndex
  })()

  const selectedValue = categories[selectedCategory]?.value

  const handleSelectCategory = (index: number) => {
    setCurrentPage(1)

    // Reflect the chosen category in the URL, e.g. selecting "item abc"
    // updates the address to "/?item abc".
    const categoryText = categories[index]?.label?.replaceAll(' ', '-')
    const slug = getCategorySlug(categories[index])
    if (typeof window !== 'undefined' && categoryText) {
      const base_url = window.location.pathname.endsWith('/')
        ? window.location.pathname.slice(0, -1)
        : window.location.pathname

      const url = categoryText !== 'All-Resources' ? `${base_url}/#${slug}` : `${base_url}`

      window.history.replaceState(null, '', url)
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    }

    // Auto-hide the overlay on mobile once a category is chosen
    if (isMobile) setIsSidebarOpen(false)

    setTimeout(() => {
      widgetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 200)
  }

  const handleFilterChange = (value: FilterOption) => {
    setFilterValue(value)
    setCurrentPage(1)
  }

  const handleSortChange = (value: SortOption) => {
    if (value === sortValue) return

    setSortValue(value)
    setCurrentPage(1)
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  const displayedItems = [...items]
    .filter(item => filterValue === 'all' || item.type === filterValue)
    .filter(item => selectedValue == null || item.category === selectedValue)
    .filter(item => {
      const q = searchQuery.trim().toLowerCase()
      return q === '' || item.title.toLowerCase().includes(q)
    })
    .sort((a, b) => {
      if (sortValue === 'latest') return new Date(b.date).getTime() - new Date(a.date).getTime()
      if (sortValue === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime()
      if (sortValue === 'az') return a.title.localeCompare(b.title)
      if (sortValue === 'za') return b.title.localeCompare(a.title)
      return 0
    })

  const totalPages = Math.max(1, Math.ceil(displayedItems.length / ITEMS_PER_PAGE))

  // Clamp during render so the page stays valid if the filtered set shrinks.
  const safeCurrentPage = Math.min(currentPage, totalPages)
  const pageStart = (safeCurrentPage - 1) * ITEMS_PER_PAGE
  const paginatedItems = displayedItems.slice(pageStart, pageStart + ITEMS_PER_PAGE)

  return (
    <div ref={widgetRef} className={clsx(styles.widget, className)}>
      <FilterBar
        view={view}
        onViewChange={setView}
        isMobile={isMobile}
        filterValue={filterValue}
        onFilterChange={handleFilterChange}
        sortValue={sortValue}
        onSortChange={handleSortChange}
        searchValue={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <div className={styles.content}>
        {isMobile && (
          <div
            className={clsx(
              styles.mobileSidebarOverlay,
              isSidebarOpen && styles.mobileSidebarOverlayOpen
            )}
            aria-hidden={!isSidebarOpen}
          >
            <nav className={styles.mobileCategoriesPanel} aria-label="Resource categories">
              <ul className={styles.mobileCategoriesList}>
                {categories.map((cat, i) => (
                  <li
                    key={cat.label ?? i}
                    className={clsx(
                      styles.mobileSidebarItem,
                      i === selectedCategory && styles.active
                    )}
                    role="button"
                    tabIndex={0}
                    aria-pressed={i === selectedCategory}
                    onClick={() => handleSelectCategory(i)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        handleSelectCategory(i)
                      }
                    }}
                  >
                    <span className={styles.label}>{cat.label}</span>
                    {cat.hasNotification && (
                      <span className={styles.notificationDot} aria-label="New" />
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.mobileSidebarCloseColumn}>
              <button
                type="button"
                className={styles.hamburger}
                aria-label="Close categories"
                onClick={() => setIsSidebarOpen(false)}
              >
                <Icon type="xBlack" size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
        <Sidebar
          categories={categories}
          isMobile={isMobile}
          onToggle={() => setIsSidebarOpen(true)}
          selectedIndex={selectedCategory}
          onSelect={handleSelectCategory}
        />
        <div className={clsx(styles.cardsArea, styles[view])}>
          {paginatedItems.map(item => (
            <ResourceCardItem key={item.id} item={item} view={view} />
          ))}
        </div>
      </div>
      {totalPages > 1 && (
        <Pagination
          key={`${selectedCategory}-${filterValue}-${sortValue}-${searchQuery}`}
          currentPage={safeCurrentPage}
          totalPages={totalPages}
          loop={false}
          onPageChange={page => {
            setCurrentPage(page)

            setTimeout(() => {
              widgetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 200)
          }}
        />
      )}
    </div>
  )
}
