export interface SidebarCategory {
  label: string
  value?: string
  extension?: string
  active?: boolean
  hasNotification?: boolean
}

export interface SidebarProps {
  categories: SidebarCategory[]
  isMobile: boolean
  onToggle?: () => void
  selectedIndex: number
  onSelect: (index: number) => void
}
