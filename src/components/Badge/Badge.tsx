import type { ButtonHTMLAttributes, HTMLAttributes } from 'react'
import { forwardRef } from 'react'
import clsx from 'clsx'
import { Icon } from '@components/Icon'

import styles from './Badge.module.scss'
import type { BadgeProps } from './Badge.types'

export const Badge = forwardRef<HTMLSpanElement | HTMLButtonElement, BadgeProps>(
  (
    {
      children,
      className,
      variant = 'default',
      size = 'md',
      icon,
      iconOnly = false,
      live = 'off',
      clickable = false,
      ...props
    },
    ref
  ) => {
    const classes = clsx(
      styles.badge,
      styles[variant],
      styles[size],
      {
        [styles.iconOnly]: iconOnly,
        [styles.clickable]: clickable,
      },
      className
    )

    const content = (
      <>
        {icon && <Icon className={clsx('badge-icon', styles['badge-icon'])} {...icon} />}
        {!iconOnly && <span className={styles.label}>{children}</span>}
      </>
    )
    if (clickable) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          className={classes}
          {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {content}
        </button>
      )
    }

    return (
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        className={classes}
        role="status"
        aria-live={live}
        {...(props as HTMLAttributes<HTMLSpanElement>)}
      >
        {content}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
