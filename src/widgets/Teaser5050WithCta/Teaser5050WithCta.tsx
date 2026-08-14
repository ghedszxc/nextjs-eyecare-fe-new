import clsx from 'clsx'
import { Container } from '@components/primitives'
import { Picture } from '@components/Picture'
import { Button } from '@components/Button'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'

import styles from './Teaser5050WithCta.module.scss'
import type { Teaser5050WithCtaProps } from './Teaser5050WithCta.types'
import { Teaser5050WithCtaTitle } from './Teaser5050WithCta.Title'
import { Teaser5050WithCtaSubtitle } from './Teaser5050WithCta.Subtitle'

export const Teaser5050WithCta = ({
  className,
  variant = 'left',
  title,
  subtitle,
  ctas,
  image,
  children,
  moduleStyles,
}: Teaser5050WithCtaProps) => {
  const slots = resolveCompoundSlots(children, {
    title: Teaser5050WithCtaTitle,
    subtitle: Teaser5050WithCtaSubtitle,
  })

  const titleNode = slots.title ?? title
  const subtitleNode = slots.subtitle ?? subtitle

  const hasModuleStyles = moduleStyles && Object.values(moduleStyles).length > 0

  return (
    <div
      className={clsx(styles.teaser5050, styles[variant], className)}
      style={{
        ...(hasModuleStyles &&
          ({
            '--custom-background-color': moduleStyles.backgroundColor,
            '--custom-color': moduleStyles.color,
          } as React.CSSProperties)),
      }}
    >
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            {titleNode && <div className={clsx('h3', styles.title)}>{titleNode}</div>}
            {subtitleNode && (
              <div className={clsx('subheading', styles.subheading)}>{subtitleNode}</div>
            )}
          </div>

          <div className={styles.ctaWrapper}>
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
        </div>
        {image && <Picture className={styles.image} {...image} />}
      </Container>
    </div>
  )
}
