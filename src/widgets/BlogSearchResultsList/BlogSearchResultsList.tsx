import clsx from 'clsx'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import { Container } from '@components/primitives'
import { Input } from '@components/Input'
import { Icon } from '@components/Icon'
import { Button } from '@components/Button'
import { BlogCardGrid } from '@widgets/BlogCardGrid'
import React from 'react'

import { BlogSearchResultsListSearch } from './BlogSearchResultsList.Search'
import type { BlogSearchResultsListProps } from './BlogSearchResultsList.types'
import styles from './BlogSearchResultsList.module.scss'
import { BlogSearchResultsListPagination } from './BlogSearchResultsList.Pagination'

export const BlogSearchResultsList = ({
  items,
  searchResult,
  onSearchChange,
  onSearchSubmit,
  searchValue,
  searchInputProps,
  className,
  renderLink,
  children,
}: BlogSearchResultsListProps) => {
  const slots = resolveCompoundSlots(children, {
    search: BlogSearchResultsListSearch,
    pagination: BlogSearchResultsListPagination,
  })

  const searchNode = slots.search ?? searchResult
  const paginationNode = slots.pagination

  return (
    <div className={clsx('search-results-list', styles['search-results-list'], className)}>
      <Container className={clsx('container', styles['container'])}>
        {typeof searchNode === 'string' ? (
          <span className={clsx('search-result', styles['search-result'])}>{searchNode}</span>
        ) : React.isValidElement(searchNode) ? (
          React.cloneElement(searchNode as React.ReactElement<any>, {
            className: clsx('search-result', styles['search-result']),
          })
        ) : null}

        <div className={clsx('wrapper', styles['wrapper'])}>
          <Input
            className={clsx('search-input', styles['search-input'])}
            startAdornment={<Icon type="search" />}
            placeholder="Search News"
            aria-label="Search News"
            endAction={
              searchValue ? (
                <Button
                  variant="nofillblack"
                  className={clsx(styles['end-action-button'])}
                  aria-label="Search"
                  onClick={() => onSearchSubmit(searchValue)}
                >
                  <Icon type="rightBlack" />
                </Button>
              ) : null
            }
            value={searchValue}
            onChange={e => {
              onSearchChange(e.target.value)
            }}
            {...searchInputProps}
          />

          <BlogCardGrid items={items} hasContainer={false} renderLink={renderLink} />
        </div>
        {paginationNode
          ? React.cloneElement(paginationNode as React.ReactElement<any>, {
              className: clsx('pagination', styles['pagination']),
            })
          : null}
      </Container>
    </div>
  )
}
