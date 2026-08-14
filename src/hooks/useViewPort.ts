import { useEffect, useState, useCallback } from 'react'

import useDebounce from './useDebounce'

type DeviceType =
  | 'mobile-s'
  | 'mobile-m'
  | 'mobile-l'
  | 'tablet'
  | 'desktop'
  | 'desktop-l'
  | 'desktop-xl'

const ORDER: DeviceType[] = [
  'mobile-s',
  'mobile-m',
  'mobile-l',
  'tablet',
  'desktop',
  'desktop-l',
  'desktop-xl',
]

const breakpointConditions: Record<DeviceType, (size: number) => boolean> = {
  'mobile-s': size => size <= 320,
  'mobile-m': size => size > 320 && size <= 375,
  'mobile-l': size => size > 375 && size <= 425,
  tablet: size => size > 425 && size <= 768,
  desktop: size => size > 768 && size <= 1024,
  'desktop-l': size => size > 1024 && size <= 1440,
  'desktop-xl': size => size > 1440,
}

const getDeviceType = (width: number): DeviceType => {
  for (const key in breakpointConditions) {
    const deviceType = key as DeviceType
    if (breakpointConditions[deviceType](width)) {
      return deviceType
    }
  }
  return 'desktop'
}

const useViewPort = () => {
  const [device, setDevice] = useState<DeviceType>(() =>
    typeof window !== 'undefined' ? getDeviceType(window.innerWidth) : 'desktop'
  )

  const getOtherDevices = useCallback(
    (list: DeviceType[], what: DeviceType, includeSelf = false) => {
      const deviceIndex = list.indexOf(what) + (!includeSelf ? 1 : 0)
      return [...list].slice(deviceIndex)
    },
    []
  )

  const onWindowResize = useCallback(() => {
    setDevice(getDeviceType(window.innerWidth))
  }, [])

  const onWindowResizeDebounce = useDebounce(onWindowResize, 100)

  useEffect(() => {
    window.addEventListener('resize', onWindowResizeDebounce)
    return () => window.removeEventListener('resize', onWindowResizeDebounce)
  }, [onWindowResizeDebounce])

  const is = (what: DeviceType | DeviceType[], range?: 'below' | 'above') => {
    const isArray = Array.isArray(what)
    if (!range && !isArray) {
      return what === device
    }
    if (!range && isArray) {
      return device ? what.includes(device) : false
    }

    const list = range === 'above' ? ORDER : [...ORDER].reverse()
    const devices = getOtherDevices(list, what as DeviceType, true)
    return device && devices.includes(device)
  }

  const isNot = (what: DeviceType | DeviceType[]) => !is(what)

  const biggerThan = (what: DeviceType) => {
    const devices = getOtherDevices(ORDER, what)
    return device && devices.includes(device)
  }

  const smallerThan = (what: DeviceType) => {
    const reverseOrder = [...ORDER].reverse()
    const devices = getOtherDevices(reverseOrder, what)
    return device && devices.includes(device)
  }

  return { is, isNot, biggerThan, smallerThan, device }
}

export default useViewPort
