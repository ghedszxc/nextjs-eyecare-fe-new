const useDebounce = (fn: (...args: any) => any, delay: number) => {
  let timer: any
  return (...args: any) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

export default useDebounce
