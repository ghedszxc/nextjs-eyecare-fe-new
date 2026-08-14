import type { AnchorHTMLAttributes, ReactNode } from 'react'

export interface PaginationLinkProps {
  page: number
  children: ReactNode
  className: string
  'aria-label'?: string
}

export interface PaginationProps {
  className?: string
  totalPages: number
  currentPage: number
  loop?: boolean
  hasNumber?: boolean
  disableArrows?: boolean
  onPageChange?: (page: number) => void

  showEllipsis?: boolean
  siblingCount?: number // pages shown on each side of current page
  boundaryCount?: number // pages shown at start/end

  hidePagesBorder?: boolean

  renderLink?: (
    props: AnchorHTMLAttributes<HTMLAnchorElement> & { page: number; children: ReactNode }
  ) => ReactNode
}
