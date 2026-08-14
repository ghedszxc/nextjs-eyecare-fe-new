import type { AnchorProps } from './Anchor.types'

export const Anchor = ({ children, isExternal, renderLink, ...props }: AnchorProps) => {
  const anchorProps = {
    ...props,
    target: isExternal ? '_blank' : undefined,
    rel: isExternal ? 'noopener noreferrer' : undefined,
  }

  if (renderLink) return <>{renderLink({ ...anchorProps, children })}</>

  return <a {...anchorProps}>{children}</a>
}
