import type { ReactNode } from 'react'

export type FooterDisclaimerProps = {
  children: ReactNode
}

export const FooterDisclaimer = ({ children }: FooterDisclaimerProps) => {
  return <>{children}</>
}
