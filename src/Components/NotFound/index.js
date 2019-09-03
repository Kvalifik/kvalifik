import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'utils/theme'

import Button from 'Blocks/Button'

const Root = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Top = styled.div`
  width: 100%;
`

const Logo = styled.img`
  margin: ${props => props.theme.spacing(1.5)};
  height: 15vh;
`

const Content = styled.div`
  width: 400px;
  margin: 15vh auto 0;
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

const NotFound = ({
  title,
  description,
  button,
  logoUrl
}) => {
  return (
    <Root>
      <Top>
        {logoUrl && <Logo src={logoUrl} />}
      </Top>
      <Content>
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
    </Root>
  )
}

NotFound.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    isExternal: PropTypes.bool
  }),
  logoUrl: PropTypes.string
}

export default NotFound
