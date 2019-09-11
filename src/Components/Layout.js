import 'normalize.css'
import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from 'Components/Footer'
import Navigation from 'Components/Navigation'
import theme from 'utils/theme'
import { Helmet } from 'react-helmet'
import NoIe from 'Components/NoIe'
import { detect } from 'detect-browser'

const browser = detect()

// handle the case where we don't detect the browser

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

  background-color: ${props => props.bgColor || 'white'};
`

const Main = ({ children, hideFooter, isGlitch, bgColor }) => {
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
        glitchLogo {
          url
        }
        noIeDescription
        noIeHeadline
        enableIeWarning
        recommendedBrowsersHeadline
        recommendedBrowser {
          path
          name
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="shortcut icon" type="image/png" href="favicon.png" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <App bgColor={bgColor}>
          {children}
          {!hideFooter && (
            <Footer
              {...data.datoCmsFooter}
              instagramFeed={data.allInstaNode.nodes}
              logoUrl={data.datoCmsGeneral.logo.url}
            />
          )}
          <Navigation
            navigationItems={data.allDatoCmsNavigation.nodes[0].mainLinks}
            navigationLinks={data.allDatoCmsNavigation.nodes[0].secondaryLinks}
            socialMediaLinks={data.datoCmsFooter.socialMediaLinks}
            logoUrl={isGlitch ? data.datoCmsGeneral.glitchLogo.url : data.datoCmsGeneral.logo.url}
            isGlitch={isGlitch}
          />
          {(data.datoCmsGeneral.enableIeWarning && !browser.ie) &&
            <NoIe
              noIeDescription={data.datoCmsGeneral.noIeDescription}
              noIeHeadline={data.datoCmsGeneral.noIeHeadline}
              recommendedBrowsersHeadline={data.datoCmsGeneral.recommendedBrowsersHeadline}
              recommendedBrowser={data.datoCmsGeneral.recommendedBrowser}
            />
          }
        </App>
      </ThemeProvider>
    </>
  )
}

Main.propTypes = {
  children: PropTypes.any,
  hideFooter: PropTypes.bool,
  isGlitch: PropTypes.bool,
  bgColor: PropTypes.string
}

export default Main
