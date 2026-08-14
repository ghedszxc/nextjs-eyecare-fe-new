import { EventList as Root } from './EventList'
import { EventListEmpty } from './EventList.Empty'
import { EventListTitle } from './EventList.Title'

export const EventList = Object.assign(Root, {
  Title: EventListTitle,
  Empty: EventListEmpty,
})

export type { EventListProps } from './EventList.types'
