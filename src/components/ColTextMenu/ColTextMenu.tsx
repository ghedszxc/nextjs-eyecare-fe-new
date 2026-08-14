import clsx from 'clsx'
import { Button } from '@components/Button'

import type { ColTextMenuProps } from './ColTextMenu.types'

export const ColTextMenu = ({
  label,
  url,
  isExternal,
  className,
  renderLink,
}: ColTextMenuProps) => {
  return (
    <Button
      variant="textmenu"
      href={url}
      isExternal={isExternal}
      renderLink={renderLink}
      icon="chevronRight"
      className={clsx('subheading', className)}
    >
      {label}
    </Button>
  )
}

ColTextMenu.displayName = 'ColTextMenu'
