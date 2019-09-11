import theme from 'utils/theme'

export const smoothScrollTo = (y, callback) => {
  const skewerOffset = (theme.skewer.calculateOffset('large') / 2) * window.innerWidth / 100
  const target = Math.min(
    y,
    document.body.clientHeight - window.innerHeight - skewerOffset
  )

  function timeoutHandler () {
    if (Math.abs(target - window.scrollY) > 10) {
      setTimeout(timeoutHandler, 10)

      window.scrollTo(0, Math.round((target - window.scrollY) / 10 + window.scrollY))
    } else {
      window.scrollTo(0, target)

      if (typeof callback === 'function') {
        callback()
      }
    }
  }

  timeoutHandler()
}
