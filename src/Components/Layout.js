import 'normalize.css'
import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from 'Components/Footer'
import Navigation from 'Components/Navigation'
import theme from 'utils/theme'
import NoIe from 'Components/NoIe'
import { detect } from 'detect-browser'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Helmet } from 'react-helmet'
import Cookie from '../templates/cookie'
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

  line-height: 1.6;

  p {
    line-height: 1.6;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: white;
  }
  h2 a{
    color: inherit;
    text-decoration:none;
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
      datoCmsSite {
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
    }
  `)
  /*
Instagram query removed while waiting for update, add back afterwards:
allInstaNode {
        nodes {
          thumbnails {
            src
          }
          timestamp
          id
          caption
        }
      }
*/
  const {
    url,
    pageSetup,
    seoMetaTags
  } = page

  const headerBlock = pageSetup && pageSetup.find(item => item.__typename === 'DatoCmsHeader')
  const canonical = `https://kvalifik.dk${url}`

  return (
    <>
      <GlobalStyle />

      <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} seo={seoMetaTags}>
        <meta charSet="utf-8" />
        {url && (
          <link rel="canonical" href={canonical} />
        )}
        {url && (
          <meta property="og:url" content={canonical} />
        )}
        <meta name="format-detection" content="telephone=no" />
        {headerBlock && headerBlock.bgColor && (
          <meta name="theme-color" content={headerBlock.bgColor.hex} />
        )}
      </HelmetDatoCms>
      <Helmet>
        <script src="https://cdn.logrocket.com/LogRocket.min.js" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <App bgColor={bgColor} x-ms-format-detection="none">
          <Cookie />
          {children}
          {!hideFooter && (
            <Footer
              {...data.datoCmsFooter}
              /* instagramFeed={data.allInstaNode.nodes} */
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
    seoMetaTags: PropTypes.object,
    pageSetup: PropTypes.array
  })
}

export default Main
