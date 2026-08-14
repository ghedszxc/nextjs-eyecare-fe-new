import clsx from 'clsx'
import { Button } from '@components/Button'
import { Container } from '@components/primitives'
import { FeaturedNewsHighlights } from '@widgets/FeaturedNewsHighlights'
import { Input } from '@components/Input'
import { Icon } from '@components/Icon'
import { BlogCardGrid } from '@widgets/BlogCardGrid'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import React from 'react'

import styles from './NewsCardList.module.scss'
import type { NewsCardListProps } from './NewsCardList.types'
import { NewsCardListPagination } from './NewsCardList.Pagination'

export const NewsCardList = ({
  items,
  backgroundColor,
  className,
  currentPage,
  searchValue,
  onSearchChange,
  onSearchSubmit,
  searchInputProps,
  renderLink,
  children,
}: NewsCardListProps) => {
  const featuredCards = items.slice(0, 4)
  const cards = currentPage !== 1 ? items : items.slice(4)

  const slots = resolveCompoundSlots(children, {
    pagination: NewsCardListPagination,
  })

  const paginationNode = slots.pagination

  return (
    <div
      className={clsx('news-card-list', styles['news-card-list'], className)}
      style={{
        backgroundColor,
      }}
    >
      <Container className={clsx('container', styles['container'])}>
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
                  onClick={onSearchSubmit ? () => onSearchSubmit(searchValue || '') : undefined}
                >
                  <Icon type="rightBlack" />
                </Button>
              ) : null
            }
            value={searchValue}
            onChange={
              onSearchChange
                ? e => {
                    onSearchChange(e.target.value)
                  }
                : undefined
            }
            {...searchInputProps}
          />

          <div className={clsx('card-wrapper', styles['card-wrapper'])}>
            {currentPage === 1 && (
              <FeaturedNewsHighlights
                items={featuredCards}
                backgroundColor="#fff"
                hasContainer={false}
                renderLink={renderLink}
              />
            )}

            <BlogCardGrid items={cards} hasContainer={false} renderLink={renderLink} />
          </div>
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
