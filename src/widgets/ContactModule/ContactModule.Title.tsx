import type { ReactNode } from 'react'

export type ContactModuleTitleProps = {
  children: ReactNode
}

export const ContactModuleTitle = ({ children }: ContactModuleTitleProps) => {
  return <>{children}</>
}
