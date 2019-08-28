import 'normalize.css'
import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from 'Components/Footer'
import Navigation from 'Components/Navigation'
import theme from 'utils/theme'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Semplice;
    src: url('/fonts/semplice.ttf');
  }

  @font-face {
    font-family: Montserrat;
    src: url('/fonts/Montserrat-Regular.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: block;
  }

  @font-face {
    font-family: Montserrat;
    src: url('/fonts/Montserrat-Black.ttf');
    font-style: normal;
    font-weight: 900;
    font-display: block;
  }

  @font-face {
    font-family: Montserrat;
    src: url('/fonts/Montserrat-Bold.ttf');
    font-style: normal;
    font-weight: 700;
    font-display: block;
  }

  @font-face {
    font-family: Montserrat;
    src: url('/fonts/Montserrat-BoldItalic.ttf');
    font-style: italic;
    font-weight: 700;
    font-display: block;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }
`

const App = styled.div`
  ${props => props.theme.typography.body.mixin()}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media ${props => props.theme.media.lg} {
    padding-right: ${props => props.theme.navBarWidth};
  }

  @media ${props => props.theme.media.sm} {
    padding-right: 0;
  }
`

const Main = ({ children }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      datoCmsFooter {
        emailAddress,
        copyright,
        cvr,
        address,
        phoneNumber,
        links,
        socialMediaLinks {
          linkUrl,
          icon {
            url
          }
        },
        socialMediaHeader
      }
      allInstaNode {
        nodes {
          thumbnails {
            src
          }
          timestamp
        }
      }
      allDatoCmsNavigation {
        nodes {
          mainLinks {
            name
            path
            isExternal
          }
          secondaryLinks {
            name
            path
            isExternal
          }
        }
      }
      datoCmsGeneral {
        logo {
          url
        }
      }
    }
  `)
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App>
          {children}
          <Footer
            {...data.datoCmsFooter}
            instagramFeed={data.allInstaNode.nodes}
            logoUrl={data.datoCmsGeneral.logo.url}
          />
          <Navigation
            navigationItems={data.allDatoCmsNavigation.nodes[0].mainLinks}
            navigationLinks={data.allDatoCmsNavigation.nodes[0].secondaryLinks}
            socialMediaLinks={data.datoCmsFooter.socialMediaLinks}
            logoUrl={data.datoCmsGeneral.logo.url}
          />
        </App>
      </ThemeProvider>
    </>
  )
}

Main.propTypes = {
  children: PropTypes.any
}

export default Main
