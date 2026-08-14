import clsx from 'clsx'
import { BrandsStrip } from '@components/BrandsStrip'
import { Button } from '@components/Button'
import { Icon } from '@components/Icon'
import { Picture } from '@components/Picture'
import { LogoBar } from '@components/LogoBar'
import useViewPort from '@hooks/useViewPort'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import { Text } from '@components/primitives/Text'

import type { HeroBannerProps } from './HeroBanner.types'
import { HeroBannerTitle } from './HeroBanner.Title'
import { HeroBannerSubtitle } from './HeroBanner.Subtitle'
import styles from './HeroBanner.module.scss'

export const HeroBanner = ({
  className,
  variant = 'pageHeroBanner',
  title,
  subtitle,
  backgroundImage,
  logo,
  cta,
  ctaLogo,
  brands,
  promoteToH1,
  type = 'external',
  children,
}: HeroBannerProps) => {
  const { is } = useViewPort()
  const isTabletBelow = is('tablet', 'below')
  const vMainHeroBanner = variant === 'mainHeroBanner'
  const vBannerPodcast = variant === 'bannerPodcast'
  const isTitleLogo = logo?.variant === 'titleLogo'
  const GRADIENT_BANDS = [
    { color: 'var(--color-lenscrafter-blue)' },
    { color: 'var(--color-foreyes-brown)' },
    { color: 'var(--color-targetoptical-red)' },
    { color: 'var(--color-pearlevision-green)' },
  ] as const
  const slots = resolveCompoundSlots(children, {
    title: HeroBannerTitle,
    subtitle: HeroBannerSubtitle,
  })
  const titleNode = slots.title ?? title
  const subtitleNode = slots.subtitle ?? subtitle

  return (
    <div className={clsx(styles.heroBanner, styles[variant], styles[type], className)}>
      <div className={styles.container}>
        <div className={styles.banner}>
          {(titleNode || subtitleNode) && (
            <div className={clsx(styles.text, vMainHeroBanner && styles.fullWidth)}>
              {isTitleLogo && <Picture className={styles.titleLogo} {...logo} />}
              {titleNode && (
                <Text
                  tag={'h2'}
                  promoteToH1={promoteToH1}
                  className={clsx(styles.title, vBannerPodcast ? 'h3' : 'h1')}
                >
                  {titleNode}
                </Text>
              )}
              {subtitleNode && (
                <Text
                  tag={'div'}
                  promoteToH1={promoteToH1 && !titleNode}
                  className={clsx(styles.subtitle, 'subheading')}
                >
                  {subtitleNode}
                </Text>
              )}
            </div>
          )}
          {cta && cta.length > 0 && !vBannerPodcast && (
            <div className={styles.ctaContainer}>
              {cta.slice(0, 2).map((cta, key) => {
                return (
                  <Button
                    key={key}
                    href={cta.url}
                    isExternal={cta.isExternal}
                    variant={
                      key % 2 ? (vMainHeroBanner && !isTabletBelow ? 'grey' : 'nofill') : 'primary'
                    }
                    fullWidth={isTabletBelow}
                    logo={cta.logo}
                    className={key % 2 ? styles.button : ''}
                  >
                    {cta.label}
                  </Button>
                )
              })}
            </div>
          )}
          {ctaLogo && ctaLogo.length > 0 && vBannerPodcast && (
            <LogoBar items={ctaLogo} className={styles.logoBar} />
          )}
        </div>
        {logo && !isTitleLogo && (
          <div className={styles.logoWrapper}>
            <Picture className={styles.logo} {...logo} />
          </div>
        )}
        {!vBannerPodcast && (
          <BrandsStrip
            className={styles.brandsStrip}
            variant="light"
            size={!isTabletBelow && vMainHeroBanner ? undefined : 'small'}
            {...brands}
          />
        )}
        {backgroundImage && !vBannerPodcast && (
          <Picture className={styles.backgroundImage} {...backgroundImage} />
        )}
      </div>
      {vBannerPodcast && (
        <div className={styles.horizontalGradient}>
          {GRADIENT_BANDS.map((band, index) => (
            <div key={index} style={{ backgroundColor: band.color }} />
          ))}
        </div>
      )}
      {!vBannerPodcast && (
        <div className={styles.scrollDown}>
          <Icon type="downChevronBlack" className={styles.arrow} />
        </div>
      )}
    </div>
  )
}
