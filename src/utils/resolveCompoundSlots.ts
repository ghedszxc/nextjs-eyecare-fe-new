import { Children, isValidElement, type ReactElement, type ReactNode } from 'react'

type SlotComponent = React.ComponentType<any>

type SlotMap = Record<string, SlotComponent>

/**
 * Resolves compound component slots from children.
 * Allows components like <Component.Title> and <Component.Subtitle>
 * to be extracted into named slots.
 */
export function resolveCompoundSlots(children: ReactNode, slots: SlotMap) {
  const resolved: Record<string, ReactNode> = {}

  Children.forEach(children, child => {
    if (!isValidElement(child)) return

    Object.entries(slots).forEach(([key, Component]) => {
      if (child.type === Component) {
        resolved[key] = (child as ReactElement<{ children: ReactNode }>).props.children
      }
    })
  })

  return resolved
}
