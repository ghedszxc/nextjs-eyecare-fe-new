import { Button } from '@components/Button'

import type { NavigationCtasProps } from './Navigation.types'

export const NavigationCtas = ({
  loginCta,
  rightButton,
  loginVariant,
  className,
}: NavigationCtasProps) => {
  return (
    <div className={className}>
      {loginCta?.label && (
        <Button variant={loginVariant} href={loginCta.url} isExternal={loginCta.isExternal}>
          {loginCta.label}
        </Button>
      )}
      {rightButton?.label && (
        <Button variant="primary" href={rightButton.url} isExternal={rightButton.isExternal}>
          {rightButton.label}
        </Button>
      )}
    </div>
  )
}
