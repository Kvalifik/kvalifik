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

  if (options && options.quick) {
    window.scrollTo(0, target)
    scrolling = false

    if (typeof callback === 'function') {
      callback()
    }

    return
  }

  let lastY = window.scrollY

  function timeoutHandler () {
    if (lastY !== window.scrollY) {
      scrolling = false

      if (typeof callback === 'function') {
        callback()
      }
      return
    }

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

    lastY = window.scrollY
  }

  timeoutHandler()
}

export const scrollToId = (anchor, options, callback) => {
  if (document.getElementById(anchor)) {
    const scrollTo = document.getElementById(anchor).getBoundingClientRect().top + window.scrollY
    smoothScrollTo(scrollTo, options, callback)
  } else {
    console.error('Could not find id anchor')
  }
}
