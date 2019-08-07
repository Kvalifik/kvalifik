import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import PropTypes from 'prop-types'

const Main = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div> {/* Add a surrounding div to make sure ThemeProvider only has a single child */}
      {children}
    </div>
  </ThemeProvider>
)

Main.propTypes = {
  children: PropTypes.any
}

export default Main
