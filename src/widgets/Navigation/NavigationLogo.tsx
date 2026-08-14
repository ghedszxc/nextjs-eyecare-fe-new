import { Picture } from '@components/Picture'

import styles from './NavigationLogo.module.scss'
import type { NavigationLogoProps } from './Navigation.types'

export const NavigationLogo = ({
  mainLogo,
  homeCta,
  className,
  onClick,
  logoAlt = 'Home',
}: NavigationLogoProps) => {
  if (!mainLogo) return null

  if (homeCta) {
    return (
      <a href={homeCta} className={styles.mainLogoLink} onClick={onClick} aria-label={logoAlt}>
        {/* Decorative here: the link already carries the accessible name. */}
        <Picture className={className} src={mainLogo} alt={logoAlt || ''} />
      </a>
    )
  }

  return <Picture className={className} src={mainLogo} alt={logoAlt} />
}
