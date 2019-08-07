import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import PropTypes from 'prop-types'

const Main = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

Main.propTypes = {
  children: PropTypes.any
}

export default Main
