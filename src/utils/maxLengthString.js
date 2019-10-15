export default (text, maxLength) => {
  if (text < maxLength) {
    return text
  }
  return text.split(' ').splice(0, maxLength).join(' ') + ' ...'
}
