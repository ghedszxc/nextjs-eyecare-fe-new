import clsx from 'clsx'
import { Container } from '@components/primitives'
import { Button } from '@components/Button'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'

import styles from './TextCenterCtaInBottom.module.scss'
import type { TextCenterCtaInBottomProps } from './TextCenterCtaInBottom.types'
import { TextCenterCtaInBottomTitle } from './TextCenterCtaInBottom.Title'
import { TextCenterCtaInBottomSubtitle } from './TextCenterCtaInBottom.Subtitle'

export const TextCenterCtaInBottom = ({
  className,
  title,
  subtitle,
  ctas,
  children,
}: TextCenterCtaInBottomProps) => {
  const slots = resolveCompoundSlots(children, {
    title: TextCenterCtaInBottomTitle,
    subtitle: TextCenterCtaInBottomSubtitle,
  })

  const titleNode = slots.title ?? title
  const subtitleNode = slots.subtitle ?? subtitle

  return (
    <div className={clsx(styles.textCenterCta, className)}>
      <Container className={styles.container}>
        <div className={styles.content}>
          {titleNode && <div className={styles.title}>{titleNode}</div>}
          {subtitleNode && <div className={styles.subtitle}>{subtitleNode}</div>}
        </div>

        {!!ctas?.length && (
          <div
            className={clsx(
              styles.ctaWrapper,
              ctas.every(cta => !cta.label && cta.logo) && styles.iconOnly
            )}
          >
            {ctas.map((cta, key) => (
              <Button
                className={styles.cta}
                variant="secondary"
                href={cta?.url}
                isExternal={cta?.isExternal}
                logo={cta.logo}
                key={key}
              >
                {cta?.label}
              </Button>
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}
