import clsx from 'clsx'

import styles from './Grid.module.scss'
import type { GridProps } from './Grid.types'

export const Grid = ({
  children,
  columns,
  gap,
  className,
  as: Component = 'div',
  role,
  ariaLabel,
  ariaLabelledBy,
}: GridProps) => {
  return (
    <Component
      className={clsx('grid', styles.grid, className)}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      style={
        {
          '--grid-columns': columns,
          '--grid-gap': typeof gap === 'number' ? `${gap}px` : gap,
        } as React.CSSProperties
      }
    >
      {children}
    </Component>
  )
}
