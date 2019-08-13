import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from 'utils/theme'
import PropTypes from 'prop-types'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,700i,900');

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const App = styled.div`
  ${props => props.theme.typography.body.mixin()}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const Main = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App> {/* Add a surrounding div to make sure ThemeProvider only has a single child */}
        {children}
      </App>
    </ThemeProvider>
  </>
)

Main.propTypes = {
  children: PropTypes.any
}

export default Main
