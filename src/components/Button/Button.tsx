import clsx from 'clsx'
import { Anchor } from '@components/primitives/Anchor'
import { ConditionalWrapper } from '@components/primitives/ConditionalWrapper'
import { Icon } from '@components/Icon/Icon'
import { Picture } from '@components/Picture'

import type { ButtonProps } from './Button.types'
import styles from './Button.module.scss'

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant = 'primary',
  fullWidth,
  href,
  isExternal,
  icon,
  logo,
  isActive,
  renderLink,
  ...rest
}) => {
  const isLink = !!href

  const props = {
    className: clsx(
      styles.button,
      variant ? styles[variant] : null,
      { [styles.fullWidth]: !!fullWidth },
      { [styles.active]: !!isActive },
      className
    ),
    ...(isLink ? { href, isExternal, renderLink } : {}),
    ...rest,
  }

  return (
    <ConditionalWrapper wrapper={Anchor} fallback="button" condition={isLink} {...(props as any)}>
      {children}
      {isExternal && <span className="sr-only">(opens in a new tab)</span>}
      {logo ? (
        <Picture className={styles.logo} {...logo} />
      ) : (
        icon && <Icon type={icon} className={styles.icon} aria-hidden="true" />
      )}
    </ConditionalWrapper>
  )
}
