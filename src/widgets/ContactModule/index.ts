import { ContactModuleTitle } from './ContactModule.Title'
import { ContactModuleSubtitle } from './ContactModule.Subtitle'
import { ContactModule as Root } from './ContactModule'

export const ContactModule = Object.assign(Root, {
  Title: ContactModuleTitle,
  Subtitle: ContactModuleSubtitle,
})

export type { ContactModuleProps } from './ContactModule.types'
