export default (text, maxLength) => {
  if (text.split(' ').length < maxLength) {
    return text
  }
  return text.split(' ').splice(0, maxLength).join(' ') + ' ...'
}
