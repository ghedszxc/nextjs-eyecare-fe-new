import React from 'react'
import ads from '@assets/icons/card/icon-ads.svg'
import book from '@assets/icons/card/icon-book.svg'
import briefcase from '@assets/icons/card/icon-briefcase.svg'
import calendar from '@assets/icons/card/icon-calendar.svg'
import clipboard from '@assets/icons/card/icon-clipboard.svg'
import convo from '@assets/icons/card/icon-convo.svg'
import eye from '@assets/icons/card/icon-eye.svg'
import globe from '@assets/icons/card/icon-globe.svg'
import hospital from '@assets/icons/card/icon-hospital.svg'
import library from '@assets/icons/card/icon-library.svg'
import location from '@assets/icons/card/icon-location.svg'
import marketing from '@assets/icons/card/icon-marketing.svg'
import money from '@assets/icons/card/icon-money.svg'
import people from '@assets/icons/card/icon-people.svg'
import smile from '@assets/icons/card/icon-smile.svg'
import tech from '@assets/icons/card/icon-tech.svg'
import work from '@assets/icons/card/icon-work.svg'
import workhome from '@assets/icons/card/icon-workhome.svg'
import newIcon from '@assets/icons/card/icon-new.svg'
import blankCheckbox from '@assets/icons/button/icon-blank-checkbox.svg'
import blankCheckboxWhite from '@assets/icons/button/icon-blank-checkbox-white.svg'
import checkedBox from '@assets/icons/button/icon-checked-box.svg'
import circleChevronDown from '@assets/icons/button/icon-circle-chevron-down.svg'
import circleChevronUp from '@assets/icons/button/icon-circle-chevron-up.svg'
import downBlack from '@assets/icons/button/icon-down-black.svg'
import downWhite from '@assets/icons/button/icon-down-white.svg'
import downChevronBlack from '@assets/icons/button/icon-down-chevron-black.svg'
import downChevronWhite from '@assets/icons/button/icon-down-chevron-white.svg'
import downloadBlack from '@assets/icons/button/icon-download-black.svg'
import downloadWhite from '@assets/icons/button/icon-download-white.svg'
import filledChevronLeft from '@assets/icons/button/icon-filled-chevron-left.svg'
import filledChevronRight from '@assets/icons/button/icon-filled-chevron-right.svg'
import filledChevronUp from '@assets/icons/button/icon-filled-chevron-up.svg'
import filledChevronUpBlack from '@assets/icons/button/icon-filled-chevron-up-black.svg'
import leftWhite from '@assets/icons/button/icon-left-white.svg'
import mailBlack from '@assets/icons/button/icon-mail-black.svg'
import rightBlack from '@assets/icons/button/icon-right-black.svg'
import rightWhite from '@assets/icons/button/icon-right-white.svg'
import tiltedRightBlack from '@assets/icons/button/icon-tilted-right-black.svg'
import tiltedRightWhite from '@assets/icons/button/icon-tilted-right-white.svg'
import upChevronUpWhite from '@assets/icons/button/icon-up-chevron-up-white.svg'
import upChevronWhite from '@assets/icons/button/icon-up-chevron-white.svg'
import watchBlack from '@assets/icons/button/icon-watch-black.svg'
import watchWhite from '@assets/icons/button/icon-watch-white.svg'
import chevronDefault from '@assets/icons/dropdown/icon-chevron-default.svg'
import chevronHovered from '@assets/icons/dropdown/icon-chevron-hovered.svg'
import chevronSelected from '@assets/icons/dropdown/icon-chevron-selected.svg'
import menuBlack from '@assets/icons/misc/icon-menu-black.svg'
import menuWhite from '@assets/icons/misc/icon-menu-white.svg'
import right from '@assets/icons/misc/icon-right.svg'
import tiltedRight from '@assets/icons/misc/icon-tilted-right.svg'
import xBlack from '@assets/icons/misc/icon-x-black.svg'
import xWhite from '@assets/icons/misc/icon-x-white.svg'
import user from '@assets/icons/misc/icon-user.svg'
import filter from '@assets/icons/button/icon-filter.svg'
import internalFilter from '@assets/icons/button/icon-internal-filter.svg'
import search from '@assets/icons/button/icon-search.svg'
import grid from '@assets/icons/button/icon-grid.svg'
import list from '@assets/icons/button/icon-list.svg'
import chevronLeftBlack from '@assets/icons/button/icon-chevron-left-black.svg'
import chevronRightBlack from '@assets/icons/button/icon-chevron-right-black.svg'
import chevronRight from '@assets/icons/button/icon-chevron-right.svg'
import pdf from '@assets/icons/button/icon-pdf.svg'
import externalLink from '@assets/icons/button/icon-external-link.svg'
import play from '@assets/icons/card/icon-play.svg'
import lock from '@assets/icons/card/icon-lock.svg'
import quote from '@assets/icons/card/icon-quote.svg'

export const svgs = {
  /* Card */
  ads,
  book,
  briefcase,
  calendar,
  clipboard,
  convo,
  eye,
  globe,
  hospital,
  library,
  location,
  marketing,
  money,
  people,
  smile,
  tech,
  work,
  workhome,
  pdf,
  externalLink,
  newIcon,
  play,
  lock,
  quote,

  /* Button */
  blankCheckbox,
  blankCheckboxWhite,
  checkedBox,
  circleChevronDown,
  circleChevronUp,
  downBlack,
  downWhite,
  downChevronBlack,
  downChevronWhite,
  downloadBlack,
  downloadWhite,
  filledChevronLeft,
  filledChevronRight,
  filledChevronUp,
  filledChevronUpBlack,
  leftWhite,
  mailBlack,
  rightBlack,
  rightWhite,
  tiltedRightBlack,
  tiltedRightWhite,
  upChevronUpWhite,
  upChevronWhite,
  watchBlack,
  watchWhite,
  filter,
  internalFilter,
  search,
  grid,
  list,
  chevronLeftBlack,
  chevronRightBlack,
  chevronRight,

  /* Dropdown */
  chevronDefault,
  chevronHovered,
  chevronSelected,

  /* Misc */
  menuBlack,
  menuWhite,
  right,
  tiltedRight,
  xBlack,
  xWhite,
  user,
}

export type IconType = keyof typeof svgs

export interface IconProps extends React.ComponentPropsWithRef<'svg'> {
  type: IconType
  size?: number
}

export const Icon: React.FC<IconProps> = React.memo(
  ({ type, size, ...props }: IconProps): React.JSX.Element => {
    if (type) {
      const SvgIcon = svgs[type]

      if (SvgIcon) {
        return (
          <SvgIcon style={size ? { width: `${size}px`, height: 'auto' } : undefined} {...props} />
        )
      }
    }
    return <></>
  }
)

Icon.displayName = 'Icon'
