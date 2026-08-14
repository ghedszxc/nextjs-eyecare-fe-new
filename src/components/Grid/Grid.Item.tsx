import clsx from 'clsx'

import styles from './Grid.module.scss'
import type { GridItemProps } from './Grid.types'

export const GridItem = ({
  children,
  colSpan,
  rowSpan,
  className,
  as: Component = 'div',
  role,
  ariaLabel,
  ariaLabelledBy,
}: GridItemProps) => {
  return (
    <Component
      className={clsx('grid-item', styles['grid-item'], className)}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      style={
        {
          '--col-xl': colSpan?.xl,
          '--col-lg': colSpan?.lg,
          '--col-md': colSpan?.md,
          '--col-ml': colSpan?.ml,
          '--col-mm': colSpan?.mm,
          '--col-xs': colSpan?.xs,

          '--row-xl': rowSpan?.xl,
          '--row-lg': rowSpan?.lg,
          '--row-md': rowSpan?.md,
          '--row-ml': rowSpan?.ml,
          '--row-mm': rowSpan?.mm,
          '--row-xs': rowSpan?.xs,
        } as React.CSSProperties
      }
    >
      {children}
    </Component>
  )
}
