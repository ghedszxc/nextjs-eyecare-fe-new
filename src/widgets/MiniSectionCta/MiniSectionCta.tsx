import clsx from 'clsx'
import { Button } from '@components/Button'
import { Container } from '@components/primitives/Container'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'

import styles from './MiniSectionCta.module.scss'
import type { MiniSectionCtaProps } from './MiniSectionCta.types'
import { MiniSectionCtaTitle } from './MiniSectionCta.Title'
import { MiniSectionCtaSubtitle } from './MiniSectionCta.Subtitle'

export const MiniSectionCta = ({
  className,
  variant = 'headerCTA',
  theme,
  title,
  subtitle,
  cta,
  moduleStyles,
  children,
}: MiniSectionCtaProps) => {
  const slots = resolveCompoundSlots(children, {
    title: MiniSectionCtaTitle,
    subtitle: MiniSectionCtaSubtitle,
  })

  const titleNode = slots.title ?? title
  const subtitleNode = slots.subtitle ?? subtitle

  const hasModuleStyles = moduleStyles && Object.values(moduleStyles).length > 0

  return (
    <div
      className={clsx(styles.miniSectionCta, styles[variant], theme && styles[theme], className)}
      style={{
        ...(hasModuleStyles &&
          ({
            '--custom-background-color': moduleStyles.backgroundColor,
            '--custom-color': moduleStyles.color,
          } as React.CSSProperties)),
      }}
    >
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.col}>
            {titleNode && (
              <h2 className={variant === 'BgColorBlack' || variant === 'BgColorGrey' ? 'h3' : 'h2'}>
                {titleNode}
              </h2>
            )}
            {subtitleNode && (
              <div
                className={clsx(styles.subtitle, variant === 'infoCallout' ? 'h4' : 'subheading')}
              >
                {subtitleNode}
              </div>
            )}
          </div>
          {cta && (
            <div className={styles.col}>
              <Button
                className={styles.cta}
                href={cta.url}
                isExternal={cta.isExternal}
                variant={variant === 'BgColorBlack' ? 'shiny' : 'primary'}
                icon={variant === 'miniTextCenterCta' ? 'tiltedRightWhite' : undefined}
              >
                {cta.label}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
