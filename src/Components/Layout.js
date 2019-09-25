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

  @media ${props => props.theme.media.landscape} {
    padding-right: 0;
  }

  @media ${props => props.theme.media.sm} {
    padding-right: 0;
  }

  @media ${props => props.theme.media.md} {
    @media (max-height: 500px) {
      padding-right: 0;
    }
  }

  background-color: ${props => props.bgColor || 'white'};
`

const Main = ({ children, hideFooter, isGlitch, bgColor, page }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      datoCmsFooter {
        emailAddress,
        copyright,
        cvr,
        address,
        phoneNumber,
        links {
          path
          name
          isExternal
        },
        socialMediaLinks {
          path,
          isExternal,
          icon {
            url
          }
        },
        socialMediaHeader
        instagramFeedTitle
      }
      allInstaNode {
        nodes {
          thumbnails {
            src
          }
          timestamp
          id
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

  const {
    url,
    title,
    pageSetup
  } = page

  const headerBlock = pageSetup && pageSetup.find(item => item.__typename === 'DatoCmsHeader')

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        {title && (
          <title>{title}</title>
        )}
        {url && (
          <link rel="canonical" href={`https://kvalifik.dk${url}`} />
        )}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <meta name="format-detection" content="telephone=no" />
        {headerBlock && headerBlock.bgColor && (
          <meta name="theme-color" content={headerBlock.bgColor.hex} />
        )}
      </Helmet>
      <ThemeProvider theme={theme}>
        <App bgColor={bgColor} x-ms-format-detection="none">
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
          {(browser.name === 'ie' && data.datoCmsGeneral.enableIeWarning) &&
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
  bgColor: PropTypes.string,
  page: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    pageSetup: PropTypes.array
  })
}

export default Main
