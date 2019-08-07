import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from 'utils/theme'
import PropTypes from 'prop-types'

const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const Main = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <div> {/* Add a surrounding div to make sure ThemeProvider only has a single child */}
        {children}
      </div>
    </ThemeProvider>
  </>
)

Main.propTypes = {
  children: PropTypes.any
}

export default Main
