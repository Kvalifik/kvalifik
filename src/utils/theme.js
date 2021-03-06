import { css } from 'styled-components'
import gridFactory from 'ie-grid-mixins'

const theme = {
  imgScale: {
    lg: '?w=1920&h=1920',
    md: '?w=1280&h=1280',
    sm: '?w=480&h=480'
  },
  grid: gridFactory(css),
  clearfix: () => css`
    &::after {
      content: "";
      display: table;
      clear: both;
    }
  `,
  navBarWidth: '65px',
  padding: {
    sm: '15px'
  },
  spacing: (x, y, z, w) => {
    const unit = 8
    const components = [
      !isNaN(x) && `${x * unit}px`,
      !isNaN(y) && `${y * unit}px`,
      !isNaN(z) && `${z * unit}px`,
      !isNaN(w) && `${w * unit}px`
    ].filter(a => !!a)
    return components.join(' ')
  },
  contrastColor: (hex, lightColor, darkColor) => {
    /* Is the 'hex' argument really a hex? */
    if (!/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)) {
      return hex
    }

    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1)
    }

    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.')
    }
    return (
      parseInt(hex.slice(0, 2), 16) * 0.299 +
      parseInt(hex.slice(2, 4), 16) * 0.587 +
      parseInt(hex.slice(4, 6), 16) * 0.114
    ) > 186
      ? darkColor || '#000000'
      : lightColor || '#ffffff'
  },
  hexToRgba: (hex, opacity = '1') => {
    /* Is the 'hex' argument really a hex? */
    if (!/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)) {
      return hex
    }

    const hexbody = hex.replace('#', '')
    const r = parseInt(hexbody.substring(0, 2), 16)
    const g = parseInt(hexbody.substring(2, 4), 16)
    const b = parseInt(hexbody.substring(4, 6), 16)

    return `rgba(${[
      r,
      g,
      b,
      opacity
    ].join(', ')})`
  },
  skewer: {
    smallAngle: 5,
    largeAngle: 8
  },
  breakpoints: {
    sm: '578px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  palette: {
    light: '#ffffff',
    dark: '#1d1d1d',
    primary: {
      A: '#FF5477',
      B: '#F59D6E',
      C: '#F5F29C',
      D: '#49EAAC',
      E: '#46A7CC',
      F: '#343464'
    },
    secondary: {
      A: '#FA7A72',
      B: '#F5CA87',
      C: '#9DFFA4',
      D: '#47C8BC',
      E: '#3D6B96'
    }
  },
  typography: {
    fontSize: {
      xs: '13px',
      sm: '14px',
      md: '40px',
      lg: '50px',
      xl: '80px',
      quote: '18px',
      menuItem: '25px'
    },
    body: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: '400',
      fontStyle: 'normal'
    },
    hero: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: '900',
      fontStyle: 'normal'
    },
    header: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: '700',
      fontStyle: 'normal'
    },
    quote: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: '700',
      fontStyle: 'italic'
    }
  }
}

const appendMixins = (theme) => ({
  ...theme,
  skewer: {
    ...theme.skewer,
    calculateOffset: (type) => {
      const angle = theme.skewer[type + 'Angle']
      let offset = 0

      // https://github.com/Kvalifik/kvalifik/wiki/Skewing-technique
      const rad = angle / 180 * Math.PI
      offset = Math.tan(rad) * 100

      return offset
    }
  },
  typography: {
    ...theme.typography,
    body: {
      ...theme.typography.body,
      mixin: () => css`
        font-family: ${theme.typography.body.fontFamily};
        font-weight: ${theme.typography.body.fontWeight};
        font-style: ${theme.typography.body.fontStyle};
      `
    },
    hero: {
      ...theme.typography.hero,
      mixin: () => css`
        font-family: ${theme.typography.hero.fontFamily};
        font-weight: ${theme.typography.hero.fontWeight};
        font-style: ${theme.typography.hero.fontStyle};
      `
    },
    header: {
      ...theme.typography.header,
      mixin: () => css`
        font-family: ${theme.typography.header.fontFamily};
        font-weight: ${theme.typography.header.fontWeight};
        font-style: ${theme.typography.header.fontStyle};
      `
    },
    quote: {
      ...theme.typography.quote,
      mixin: () => css`
        font-family: ${theme.typography.quote.fontFamily};
        font-weight: ${theme.typography.quote.fontWeight};
        font-style: ${theme.typography.quote.fontStyle};
      `
    }
  },
  media: Object.keys(theme.breakpoints).reduce((acc, label) => {
    acc[label] = `screen and (max-width: ${theme.breakpoints[label]})`
    return acc
  }, {
    // eslint-disable-next-line max-len
    landscape: `screen and (max-width: ${theme.breakpoints.md}) and (orientation: landscape), screen and (max-height: 500px) and (orientation: landscape)`
  })
})

export default appendMixins(theme)
