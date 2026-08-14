import type { ReactNode } from 'react'

export interface AccordionItem {
  id: string | number
  title: string | ReactNode
  content: ReactNode

  renderItemHeader?: (props: { isOpen: boolean; toggle: () => void }) => ReactNode
}

export interface AccordionProps {
  /** Additional CSS class names */
  className?: string
  /** Array of accordion items */
  items?: AccordionItem[]
  /** IDs of items that should be open by default */
  defaultOpenIds?: (string | number)[]
  /** Whether multiple items can be open at once */
  allowMultiple?: boolean

  /** Callback when an item is toggled */
  onItemToggle?: (id: string | number, isOpen: boolean) => void
}

export interface AccordionItemProps {
  id: string | number
  title: string | ReactNode
  children: ReactNode
  isOpen?: boolean
  onToggle?: (id: string | number) => void
  className?: string
  renderItemHeader?: (props: { isOpen: boolean; toggle: () => void }) => ReactNode
}
