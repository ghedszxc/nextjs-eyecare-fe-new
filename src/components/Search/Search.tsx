import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { Icon } from '@components/Icon'

import styles from './Search.module.scss'
import type { SearchProps } from './Search.types'

export const Search = ({
  placeholder = 'Search',
  searchCta,
  onSearch,
  variant = 'expandable',
  className,
}: SearchProps) => {
  const isPill = variant === 'pill'
  const [isOpen, setIsOpen] = useState(isPill)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && !isPill) inputRef.current?.focus()
  }, [isOpen, isPill])

  const submit = () => {
    const value = query.trim()
    if (!value) return
    onSearch?.(value)
    if (searchCta?.url) {
      const separator = searchCta.url.includes('?') ? '&' : '?'
      window.location.href = `${searchCta.url}${separator}q=${encodeURIComponent(value)}`
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      submit()
    } else if (e.key === 'Escape' && !isPill) {
      setIsOpen(false)
    }
  }

  // Collapsed expandable state: just the icon button.
  if (!isOpen) {
    return (
      <div className={clsx(styles.search, className)}>
        <button
          type="button"
          className={styles.searchButton}
          aria-label={searchCta?.label || 'Search'}
          aria-expanded={false}
          onClick={() => setIsOpen(true)}
        >
          <Icon type="search" size={32} aria-hidden="true" />
        </button>
      </div>
    )
  }

  return (
    <div className={clsx(styles.search, className)}>
      <div
        className={clsx(
          styles.searchField,
          isPill ? styles.searchFieldPill : styles.searchFieldLine
        )}
      >
        {isPill && (
          <button
            type="button"
            className={styles.searchSubmit}
            aria-label={searchCta?.label || 'Search'}
            onClick={submit}
          >
            <Icon type="search" size={24} aria-hidden="true" />
          </button>
        )}
        <input
          ref={inputRef}
          type="search"
          className={styles.searchInput}
          placeholder={placeholder}
          value={query}
          aria-label={placeholder}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => !isPill && !query && setIsOpen(false)}
        />
        {!isPill ? (
          <button
            type="button"
            className={styles.searchSubmit}
            aria-label={searchCta?.label || 'Search'}
            onClick={submit}
          >
            <Icon type="search" size={24} aria-hidden="true" />
          </button>
        ) : (
          query && (
            <button
              type="button"
              className={styles.searchSubmit}
              aria-label="Submit search"
              onClick={submit}
            >
              <Icon type="rightBlack" size={24} aria-hidden="true" />
            </button>
          )
        )}
      </div>
    </div>
  )
}
