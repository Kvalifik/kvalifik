export const smoothScrollTo = (target) => {
  function timeoutHandler () {
    if (target - window.scrollY > 20 && target > window.scrollY) {
      setTimeout(timeoutHandler, 10)

      window.scrollTo(0, (target - window.scrollY) / 10 + window.scrollY)
    }
  }

  timeoutHandler()
}
