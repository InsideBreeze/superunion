export default function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  return ((...args) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      timeoutId = undefined
      callback(...args)
    }, delay)
  }) as T
}
