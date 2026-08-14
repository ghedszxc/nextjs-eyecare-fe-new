import clsx from 'clsx'
import { Icon } from '@components/Icon'
import { Fragment, useState } from 'react'
import { getPaginationRange } from '@utils/getPaginationRange'

import type { PaginationProps } from './Pagination.types'
import styles from './Pagination.module.scss'

export const Pagination = ({
  className,
  totalPages,
  currentPage = 1,
  loop = true,
  hasNumber = false,
  disableArrows = false,
  onPageChange,
  showEllipsis,
  boundaryCount,
  siblingCount,
  hidePagesBorder = false,
  renderLink,
}: PaginationProps) => {
  const [activePage, setActivePage] = useState(currentPage)

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return

    setActivePage(page)
    onPageChange?.(page)
  }

  const handlePrev = () => {
    if (activePage === 1) {
      if (loop) {
        setActivePage(totalPages)
        onPageChange?.(totalPages)
      }
      return
    }

    const page = activePage - 1
    setActivePage(page)
    onPageChange?.(page)
  }

  const handleNext = () => {
    if (activePage === totalPages) {
      if (loop) {
        setActivePage(1)
        onPageChange?.(1)
      }
      return
    }

    const page = activePage + 1
    setActivePage(page)
    onPageChange?.(page)
  }

  const prevPage = activePage === 1 ? (loop ? totalPages : 1) : activePage - 1

  const nextPage = activePage === totalPages ? (loop ? 1 : totalPages) : activePage + 1

  const pageItems = showEllipsis
    ? getPaginationRange(totalPages, activePage, siblingCount, boundaryCount)
    : Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className={clsx(styles.pagination, className)}>
      {!disableArrows &&
        (renderLink ? (
          renderLink({
            page: prevPage,
            className: styles.prev,
            'aria-label': 'Go to previous page',
            children: <Icon type="filledChevronLeft" />,
          })
        ) : (
          <button
            className={styles.prev}
            onClick={handlePrev}
            disabled={!loop && activePage === 1}
            aria-label="Go to previous page"
          >
            <Icon type="filledChevronLeft" />
          </button>
        ))}

      <div className={styles.pages}>
        {pageItems.map((item, index) => {
          if (item === '...') {
            return (
              <span key={`dots-${index}`} className={styles.dots} aria-hidden="true">
                &#8230;
              </span>
            )
          }

          const page = item
          const pageClassName = clsx(styles.page, {
            [styles.active]: activePage === page,
            [styles.number]: hasNumber,
            [styles['no-border']]: hidePagesBorder,
          })

          return renderLink ? (
            <Fragment key={page}>
              {renderLink({
                page,
                className: pageClassName,
                'aria-label': `Go to page ${page}`,
                children: hasNumber ? page : null,
              })}
            </Fragment>
          ) : (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={pageClassName}
              aria-label={`Go to page ${page}`}
            >
              {hasNumber ? page : null}
            </button>
          )
        })}
      </div>

      {!disableArrows &&
        (renderLink ? (
          renderLink({
            page: nextPage,
            className: styles.next,
            'aria-label': 'Go to next page',
            children: <Icon type="filledChevronRight" />,
          })
        ) : (
          <button
            className={styles.next}
            onClick={handleNext}
            disabled={!loop && activePage === totalPages}
            aria-label="Go to next page"
          >
            <Icon type="filledChevronRight" />
          </button>
        ))}
    </div>
  )
}
