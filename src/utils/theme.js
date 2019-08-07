export default {
  padding: {
    sm: '15px'
  },
  spacing: (x, y, z, w) => {
    const unit = 8
    const components = [
      x && `${x * unit}px`,
      y && `${y * unit}px`,
      z && `${z * unit}px`,
      w && `${w * unit}px`
    ].filter(a => !!a)
    return components.join(' ')
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  fontSize: {
    sm: '14px',
    md: '40px',
    xl: '80px',
    quote: '18px'
  }
}
