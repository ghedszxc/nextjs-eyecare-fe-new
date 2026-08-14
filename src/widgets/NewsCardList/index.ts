import { NewsCardList as Root } from './NewsCardList'
import { NewsCardListPagination } from './NewsCardList.Pagination'

export const NewsCardList = Object.assign(Root, {
  Pagination: NewsCardListPagination,
})

export type { NewsCardListProps } from './NewsCardList.types'
