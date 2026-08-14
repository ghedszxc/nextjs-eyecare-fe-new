import { useMemo, useState } from 'react'
import clsx from 'clsx'
import { Container } from '@components/primitives'
import { Text } from '@components/primitives/Text'
import { Button } from '@components/Button'
import useViewPort from '@hooks/useViewPort'
import { Accordion } from '@components/Accordion'

import { Picture } from '../..'

import type { InternalBrandsTabProps } from './InternalBrandsTab.types'
import styles from './InternalBrandsTab.module.scss'

export const InternalBrandsTab = (props: InternalBrandsTabProps) => {
  const { title, subTitle, className, tabs } = props

  // * React States * //
  const [activeIndex, setActiveIndex] = useState(0)

  // * Custom Hooks * //
  const { is } = useViewPort()
  const isTabletBelow = is('tablet', 'below')

  // * Render Functions * //
  const accordionItems = useMemo(() => {
    return (
      tabs?.map((tab, index) => ({
        id: index,
        title: tab.tabTitle || '',
        content: (
          <>
            {/* TOP CONTENT */}
            {tab.topContent && (
              <div className={styles.accordionTopContent}>
                <div>
                  {tab.topContent?.title && (
                    <p className={styles.topContentTitle}>{tab.topContent.title}</p>
                  )}
                  {tab.topContent?.longText && (
                    <div className={styles.topContentLongText}>{tab.topContent.longText}</div>
                  )}
                  {tab.topContent?.cta && (
                    <div className={styles.topContentCtaContainer}>
                      <Button
                        className={styles.topContentCta}
                        variant="primary"
                        href={tab.topContent.cta?.url}
                        isExternal={tab.topContent.cta?.isExternal}
                        logo={tab.topContent.cta?.logo}
                      >
                        {tab.topContent.cta?.label}
                      </Button>
                    </div>
                  )}
                </div>
                <div>
                  {tab.topContent?.rightSideText && (
                    <div className={styles.topContentRightSide}>{tab.topContent.rightSideText}</div>
                  )}
                </div>
              </div>
            )}

            {/* BOTTOM CONTENT */}
            {tab.bottomContent && (
              <div className={styles.accordionBottomContent}>
                <div className={styles.bottomContentLeftSide}>
                  {tab.bottomContent?.title && (
                    <p className={styles.bottomContentTitle}>{tab.bottomContent.title}</p>
                  )}
                  {tab.bottomContent?.textList && (
                    <div className={styles.bottomContentTextList}>{tab.bottomContent.textList}</div>
                  )}
                </div>

                <div className={styles.bottomContentRightSide}>
                  {tab.bottomContent?.icon && (
                    <Picture
                      src={tab.bottomContent.icon?.src}
                      alt={tab.bottomContent.icon?.alt}
                      className={styles.bottomContentIcon}
                    />
                  )}
                  {tab.bottomContent?.quote && (
                    <div className={styles.bottomContentQuote}>{tab.bottomContent.quote}</div>
                  )}
                </div>
              </div>
            )}
          </>
        ),
      })) || []
    )
  }, [tabs])

  return (
    <Container className={clsx(styles.internalBrandsTab, className)}>
      <div className={styles.textsContainer}>
        {title && (
          <Text tag="h2" className={styles.title}>
            {title}
          </Text>
        )}
        {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
      </div>

      {isTabletBelow ? (
        <Accordion items={accordionItems} allowMultiple={true} defaultOpenIds={[]} />
      ) : (
        <div className={styles.tabWrapper}>
          <div className={styles.tabButtonsRow}>
            {tabs?.map(({ tabTitle }, index) => (
              <Button
                key={index}
                variant="tabbutton"
                onClick={() => setActiveIndex(index)}
                isActive={activeIndex === index}
              >
                {tabTitle}
              </Button>
            ))}
          </div>

          <div className={clsx(styles.contentArea)}>
            {tabs?.[activeIndex]?.topContent && (
              <>
                {/* // * TOP CONTENT * // */}
                <div className={styles.topContent}>
                  {/* // * LEFT CONTENT (TOP CONTENT) * // */}
                  <div>
                    {tabs[activeIndex].topContent?.title && (
                      <p className={styles.topContentTitle}>
                        {tabs[activeIndex].topContent?.title}
                      </p>
                    )}
                    {tabs[activeIndex].topContent?.longText && (
                      <div className={styles.topContentLongText}>
                        {tabs[activeIndex].topContent?.longText}
                      </div>
                    )}
                    {tabs[activeIndex].topContent?.cta && (
                      <Button
                        className={styles.topContentCta}
                        variant="primary"
                        href={tabs[activeIndex].topContent?.cta?.url}
                        isExternal={tabs[activeIndex].topContent?.cta?.isExternal}
                        logo={tabs[activeIndex].topContent?.cta?.logo}
                      >
                        {tabs[activeIndex].topContent?.cta?.label}
                      </Button>
                    )}
                  </div>
                  {/* // * RIGHT CONTENT (TOP CONTENT)* // */}
                  <div>
                    {tabs[activeIndex].topContent?.rightSideText && (
                      <div className={styles.topContentRightSide}>
                        {tabs[activeIndex].topContent?.rightSideText}
                      </div>
                    )}
                  </div>
                </div>

                {/* // * BOTTOM CONTENT * // */}
                <div className={styles.bottomContent}>
                  {/* // * LEFT CONTENT (BOTTOM CONTENT) * // */}
                  <div className={styles.bottomContentLeftSide}>
                    {tabs[activeIndex].bottomContent?.title && (
                      <p className={styles.bottomContentTitle}>
                        {tabs[activeIndex].bottomContent?.title}
                      </p>
                    )}
                    {tabs[activeIndex].bottomContent?.textList && (
                      <div className={styles.bottomContentTextList}>
                        {tabs[activeIndex].bottomContent?.textList}
                      </div>
                    )}
                  </div>

                  {/* // * RIGHT CONTENT (BOTTOM CONTENT) * // */}
                  <div className={styles.bottomContentRightSide}>
                    {tabs[activeIndex].bottomContent?.icon && (
                      <Picture
                        src={tabs[activeIndex].bottomContent?.icon?.src}
                        alt={tabs[activeIndex].bottomContent?.icon?.alt}
                        className={styles.bottomContentIcon}
                      />
                    )}

                    {tabs[activeIndex].bottomContent?.quote && (
                      <div className={styles.bottomContentQuote}>
                        {tabs[activeIndex].bottomContent?.quote}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </Container>
  )
}
