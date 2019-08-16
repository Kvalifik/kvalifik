import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from 'Components/Footer'
import Navigation from 'Components/Navigation'
import theme from 'utils/theme'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,700i,900');

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

  ${props => props.theme.media.lg`
    padding-right: ${props.theme.navBarWidth};
  `}

  ${props => props.theme.media.sm`
    padding-right: 0;
  `}
`

const Main = ({ children }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      datoCmsFooter {
        logo {
          url
        },
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
    }
  `)
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App> {/* Add a surrounding div to make sure ThemeProvider only has a single child */}
          {children}
          <Footer {...data.datoCmsFooter} instagramFeed={data.allInstaNode.nodes} />
          <Navigation navigationItems={data.allDatoCmsNavigation.nodes[0].mainLinks} navigationLinks={data.allDatoCmsNavigation.nodes[0].secondaryLinks} socialMediaLinks={data.datoCmsFooter.socialMediaLinks} />
        </App>
      </ThemeProvider>
    </>
  )
}

Main.propTypes = {
  children: PropTypes.any
}

export default Main
