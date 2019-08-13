import { css } from 'styled-components'

const theme = {
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
      sm: '14px',
      md: '40px',
      xl: '80px',
      quote: '18px'
    },
    body: {
      fontFamily: 'Montserrat',
      fontWeight: '400',
      fontStyle: 'normal'
    },
    hero: {
      fontFamily: 'Montserrat',
      fontWeight: '900',
      fontStyle: 'normal'
    },
    header: {
      fontFamily: 'Montserrat',
      fontWeight: '700',
      fontStyle: 'normal'
    },
    quote: {
      fontFamily: 'Montserrat',
      fontWeight: '700',
      fontStyle: 'italic'
    }
  }
}

const defineMixins = (theme) => ({
  typography: {
    body: () => css`
      font-family: ${theme.typography.body.fontFamily};
      font-weight: ${theme.typography.body.fontWeight};
      font-style: ${theme.typography.body.fontStyle}
    `,
    hero: () => css`
      font-family: ${theme.typography.hero.fontFamily};
      font-weight: ${theme.typography.hero.fontWeight};
      font-style: ${theme.typography.hero.fontStyle}
    `,
    header: () => css`
      font-family: ${theme.typography.header.fontFamily};
      font-weight: ${theme.typography.header.fontWeight};
      font-style: ${theme.typography.header.fontStyle}
    `,
    quote: () => css`
      font-family: ${theme.typography.quote.fontFamily};
      font-weight: ${theme.typography.quote.fontWeight};
      font-style: ${theme.typography.quote.fontStyle}
    `
  }
})

export default {
  ...theme,
  mixins: defineMixins(theme)
}
