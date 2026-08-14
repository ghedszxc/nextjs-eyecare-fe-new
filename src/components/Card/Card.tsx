import clsx from 'clsx'
import { Icon } from '@components/Icon'
import { Button } from '@components/Button'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import { Picture } from '@components/Picture'
import { Anchor, ConditionalWrapper } from '@components/primitives'

import type { CardProps } from './Card.types'
import styles from './Card.module.scss'
import { CardTitle } from './Card.Title'
import { CardSubtitle } from './Card.Subtitle'

export const Card = ({
  className,
  variant = 'dark',
  title,
  subtitle,
  cta,
  icon,
  logo,
  children,
  ref,
}: CardProps) => {
  const { url: href, label, isExternal } = cta ?? {}
  const slots = resolveCompoundSlots(children, {
    title: CardTitle,
    subtitle: CardSubtitle,
  })

  const titleNode = slots.title ?? title
  const subtitleNode = slots.subtitle ?? subtitle
  const isLink = !!(href && !label)

  return (
    <ConditionalWrapper
      ref={ref}
      className={clsx(styles.card, styles[variant], className)}
      wrapper={Anchor}
      fallback="div"
      condition={isLink}
      {...((href ? { href, isExternal } : {}) as any)}
    >
      <div className={styles.logoContainer}>
        {logo?.src ? (
          <Picture className={clsx(styles.logo, isLink && styles.hideLogo)} {...logo} />
        ) : (
          icon && <Icon type={icon} className={clsx(styles.logo, isLink && styles.hideLogo)} />
        )}
        {isLink && <Icon type="tiltedRightWhite" className={styles.logoHover} />}
      </div>
      <div className={styles.content}>
        {titleNode && <h3 className="h4">{titleNode}</h3>}
        {subtitleNode && <div className={styles.subtitle}>{subtitleNode}</div>}
      </div>
      {cta?.label && (
        <Button href={cta.url} isExternal={cta.isExternal} variant="secondary" icon={cta.icon}>
          {cta.label}
        </Button>
      )}
    </ConditionalWrapper>
  )
}

Card.displayName = 'Card'
