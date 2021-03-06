import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from 'Components/Layout'

import theme from 'utils/theme'

import Button from 'Components/Shared/Button'

const Root = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 4fr 5fr;
  padding-top: ${props => props.theme.navBarWidth};
`

const Top = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;

  @media ${props => props.theme.media.sm} {
    justify-self: center;
    margin: 0;
    display: none;
  }

  a {
    outline: none;
    text-decoration: none;
  }
`

const Logo = styled.img`
  margin: ${props => props.theme.spacing(1.5)};
  height: 7vh;
`

const Content = styled.div`
  width: 100%;
  max-width: 400px;
  grid-column: ${props => props.center ? '1 / 3' : '1'};
  grid-row: 1 / 3;
  align-self: center;
  justify-self: ${props => props.center ? 'center' : 'start'};
  margin: ${props => props.center ? 0 : props.theme.spacing(0, 1, 0, 12)};

  @media ${props => props.theme.media.lg} {
    justify-self: center;
    grid-column: 1 / 3;
    margin: 0;
    padding: ${props => props.theme.spacing(1)};
  }

  @media ${props => props.theme.media.sm} {
    padding-bottom: 20vh;
  }
`

const Error = styled.h2`
  font-size: 26px;
  font-family: 'Semplice', monospace;
  font-weight: 600;
  text-transform: uppercase;
  margin: ${props => props.theme.spacing(2, 0)};
`

const Title = styled.h1`
  ${props => props.theme.typography.hero.mixin()}
  font-size: 40px;
  margin: ${props => props.theme.spacing(2, 0)};
`

const Description = styled.div`
  margin: ${props => props.theme.spacing(2, 0, 6)};
  font-size: 14px;
  line-height: 1.4em;

  p {
    margin: ${props => props.theme.spacing(0.5, 0)};
  }
`

const Image = styled.img`
  grid-column: 2;
  grid-row: 1 / 3;
  align-self: center;
  justify-self: end;
  width: 500px;
  margin: ${props => props.theme.spacing(0, 12, 1, 0)};

  @media ${props => props.theme.media.xl} {
    width: 380px;
  }

  @media ${props => props.theme.media.lg} {
    display: none;
  }
`

const NotFoundPage = ({ data }) => {
  const {
    title,
    description,
    image,
    buttonLink: button
  } = data.datoCms404Page
  const {
    glitchLogo
  } = data.datoCmsGeneral

  const imageUrl = image && image.url

  return (
    <Layout hideFooter isGlitch page={data.datoCms404Page}>
      <Root>
        <Top>
          <Link to="/">
            {glitchLogo && <Logo src={glitchLogo.url} />}
          </Link>
        </Top>
        <Content center={!imageUrl}>
          <Error>Error</Error>
          <Title>{title}</Title>
          <Description dangerouslySetInnerHTML={{ __html: description }} />
          <Button
            fullWidth
            to={button.path}
            isExternal={button.isExternal}
            bgColor={theme.palette.dark}
            color={theme.palette.light}
            type="link"
          >
            {button.name}
          </Button>
        </Content>
        {imageUrl && (
          <Image src={imageUrl} />
        )}
      </Root>
    </Layout>
  )
}

export const query = graphql`
  query NotFoundQuery {
    datoCms404Page {
      title
      description
      image {
        url
      }
      buttonLink {
        path
        name
        isExternal
      }
      seoMetaTags {
        tags
      }
    }
    datoCmsGeneral {
      glitchLogo {
        url
      }
    }
  }
`

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    datoCms404Page: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string
      }),
      buttonLink: PropTypes.shape({
        path: PropTypes.string,
        name: PropTypes.string,
        isExternal: PropTypes.bool
      })
    }),
    datoCmsGeneral: PropTypes.shape({
      glitchLogo: PropTypes.shape({
        url: PropTypes.string
      })
    })
  })
}

export default NotFoundPage
