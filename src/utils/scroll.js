import theme from 'utils/theme'

let scrolling = false

export const smoothScrollTo = (y, options, callback) => {
  if (scrolling) {
    return
  }

  scrolling = true

  const skewerOffset = (theme.skewer.calculateOffset('large') / 2) * window.innerWidth / 100
  const target = Math.min(
    y,
    document.body.clientHeight - window.innerHeight - skewerOffset
  )

  console.log(y, target, options)

  if (options && options.quick) {
    window.scrollTo(0, target)
    scrolling = false

    if (typeof callback === 'function') {
      callback()
    }

    return
  }

  function timeoutHandler () {
    if (Math.abs(target - window.scrollY) > 5) {
      setTimeout(timeoutHandler, 10)

      window.scrollTo(0, Math.round((target - window.scrollY) / 10 + window.scrollY))
    } else {
      window.scrollTo(0, target)
      scrolling = false

      if (typeof callback === 'function') {
        callback()
      }
    }
  }

  timeoutHandler()
}
