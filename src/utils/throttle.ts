export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): T {
  let lastFunc: ReturnType<typeof setTimeout>
  let lastRan: number

  return ((...args) => {
    if (!lastRan) {
      func(...args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      // delay this call
      lastFunc = setTimeout(() => {
        func(...args)
        lastRan = Date.now()
      }, limit - (Date.now() - lastRan))
    }
  }) as T
}
