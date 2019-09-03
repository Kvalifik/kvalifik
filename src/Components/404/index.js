import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from 'Blocks/Button'

const Root = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Top = styled.div`
  width: 100%;
`

const Logo = styled.img`

`

const Content = styled.div`
  width: 400px;
  margin: 10vh auto 0;
`

const Error = styled.h2`

`

const Title = styled.h1`

`

const Description = styled.div`

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
          to={button.path}
          isExternal={button.isExternal}
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
