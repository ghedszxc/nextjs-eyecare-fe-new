import { forwardRef } from 'react'
import clsx from 'clsx'

import styles from './Container.module.scss'
import type { ContainerProps } from './Container.types'

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(styles.container, className)} {...props}>
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
