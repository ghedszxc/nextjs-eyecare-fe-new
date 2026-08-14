import { useMemo, useState } from 'react'
import clsx from 'clsx'
import { Container } from '@components/primitives'
import { Text } from '@components/primitives/Text'
import { Button } from '@components/Button'
import useViewPort from '@hooks/useViewPort'
import { Accordion } from '@components/Accordion'
import type { AccordionItem } from '@components/Accordion/Accordion.types'

import { Icon, Picture } from '../..'

import type { BrandsTabProps } from './BrandsTab.types'
import styles from './BrandsTab.module.scss'

export const BrandsTab = (props: BrandsTabProps) => {
  const { title, subtitle, className, tabs } = props

  // * React States * //
  const [activeIndex, setActiveIndex] = useState(0)

  // * Custom Hooks * //
  const { is } = useViewPort()
  const isTabletBelow = is('tablet', 'below')

  // * Render Functions * //
  const accordionItems: AccordionItem[] = useMemo(() => {
    return (
      tabs?.map((tab, index) => ({
        id: index,
        title:
          typeof tab.trigger.active === 'string' ? (
            tab.trigger.active
          ) : (
            <Picture {...tab.trigger.active} />
          ),
        content: (
          <div
            className={clsx(styles['accordion-content'])}
            style={
              {
                '--theme-color': `var(${tab.theme})`,
              } as React.CSSProperties
            }
          >
            {tab?.content?.map(content => {
              return (
                <div
                  className={styles['card']}
                  key={`${content.title}-${index}`}
                  style={
                    {
                      '--theme-text-color': `var(${content.textColor})`,
                    } as React.CSSProperties
                  }
                >
                  <div className={styles['card-header']}>
                    {content.logo && <Picture className={styles['card-logo']} {...content.logo} />}
                    <h3 className={clsx('h4', styles['card-title'])}>{content.title}</h3>
                  </div>
                  <div className={styles['card-description']}>{content.description}</div>
                </div>
              )
            })}

            {tab.image && <Picture {...tab.image} className={styles['card-image']} />}
            <Button
              variant="secondary"
              className={styles['card-cta']}
              logo={tab.cta?.logo}
              title={tab.cta?.label}
            >
              <span aria-label={tab.cta?.label}>{tab.cta?.label}</span>
            </Button>
          </div>
        ),
        renderItemHeader: ({ isOpen, toggle }) => {
          return (
            <button
              className={clsx(styles['accordion-header'], {
                [styles['accordion-header-open']]: isOpen,
              })}
              style={
                {
                  '--theme-color': `var(${tab.theme})`,
                } as React.CSSProperties
              }
              onClick={toggle}
              aria-expanded={isOpen}
              // inert={!isOpen}
              aria-label={`Toggle accordion item #${index + 1}`}
            >
              {typeof tab.trigger.active === 'string' ? (
                tab.trigger.active
              ) : (
                <Picture {...tab.trigger.active} />
              )}
              <span
                className={clsx(styles.accordionChevron, {
                  [styles.accordionChevronOpen]: isOpen,
                })}
              >
                {isOpen ? (
                  <Icon type="filledChevronUp" size={40} />
                ) : (
                  <Icon type="circleChevronDown" size={40} />
                )}
              </span>
            </button>
          )
        },
      })) || []
    )
  }, [tabs])

  return (
    <Container className={clsx(styles['brands-tab'], className)}>
      <div className={styles['text-container']}>
        {title && (
          <Text tag="h2" className={styles.title}>
            {title}
          </Text>
        )}
        {subtitle && <div className={clsx('subheading', styles.subtitle)}>{subtitle}</div>}
      </div>

      {isTabletBelow ? (
        <Accordion
          items={accordionItems}
          allowMultiple={true}
          defaultOpenIds={[]}
          className={clsx(styles['accordion'])}
        />
      ) : (
        <div className={styles['tab-wrapper']}>
          <div className={styles['tab-buttons']}>
            {tabs?.map(({ trigger, theme }, index) => {
              const isActive = activeIndex === index
              return (
                <Button
                  key={index}
                  variant="tabbutton"
                  onClick={() => setActiveIndex(index)}
                  isActive={isActive}
                  className={clsx(styles['tab-trigger'], isActive ? styles['tab-active'] : null)}
                  style={
                    {
                      '--theme-color': `var(${theme})`,
                    } as React.CSSProperties
                  }
                >
                  {trigger ? (
                    isActive ? (
                      typeof trigger.active === 'string' ? (
                        <span>{trigger.active}</span>
                      ) : (
                        <Picture {...trigger.active} />
                      )
                    ) : typeof trigger.default === 'string' ? (
                      <span>{trigger.default}</span>
                    ) : (
                      <Picture {...trigger.default} />
                    )
                  ) : null}
                </Button>
              )
            })}
          </div>

          <div
            className={clsx(styles['tab-content-area'])}
            style={
              {
                '--theme-color': `var(${tabs?.[activeIndex].theme})`,
              } as React.CSSProperties
            }
          >
            <div className={styles['content-cards']}>
              {tabs?.[activeIndex].content?.map((content, index) => {
                return (
                  <div
                    className={styles['card']}
                    key={`${content.title}-${index}`}
                    style={
                      {
                        '--theme-text-color': `var(${content.textColor})`,
                      } as React.CSSProperties
                    }
                  >
                    <div className={styles['card-header']}>
                      {content.logo && (
                        <Picture className={styles['card-logo']} {...content.logo} />
                      )}
                      <h3 className={clsx('h4', styles['card-title'])}>{content.title}</h3>
                    </div>
                    <div className={styles['card-description']}>{content.description}</div>
                  </div>
                )
              })}
            </div>
            <div className={styles['content-side']}>
              {tabs?.[activeIndex].image && (
                <Picture {...tabs?.[activeIndex].image} className={styles['card-image']} />
              )}
              <Button
                variant="secondary"
                className={styles['card-cta']}
                logo={tabs?.[activeIndex].cta?.logo}
              >
                {tabs?.[activeIndex].cta?.label}
              </Button>
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}
