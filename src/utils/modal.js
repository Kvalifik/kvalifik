export const disableScroll = () => {
  document.body.setAttribute('style', 'overflow:hidden')
}

export const enableScroll = () => {
  document.body.setAttribute('style', '')
}
