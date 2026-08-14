import clsx from 'clsx'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import { Container } from '@components/primitives'
import React from 'react'
import { Grid } from '@components/Grid/Grid'
import { GridItem } from '@components/Grid/Grid.Item'
import { ResourceCardItem } from '@components/ResourceCardItem'

import type { GlobalSearchResultsListProps } from './GlobalSearchResultsList.types'
import styles from './GlobalSearchResultsList.module.scss'
import { GlobalSearchResultsListPagination } from './GlobalSearchResultsList.Pagination'
import { GlobalSearchResultsListSearch } from './GlobalSearchResultsList.Search'

export const GlobalSearchResultsList = ({
  items,
  searchResult,
  className,
  renderLink,
  children,
}: GlobalSearchResultsListProps) => {
  const slots = resolveCompoundSlots(children, {
    search: GlobalSearchResultsListSearch,
    pagination: GlobalSearchResultsListPagination,
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
          <Grid role="list" columns={3}>
            {items.map((item, index) => (
              <GridItem
                key={item.title ? `${item.title}-${item?.id ?? index}` : index}
                colSpan={{ md: 3 }}
                role="listitem"
              >
                <ResourceCardItem
                  item={item}
                  view="grid"
                  variant="global-search"
                  renderLink={renderLink}
                />
              </GridItem>
            ))}
          </Grid>
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
