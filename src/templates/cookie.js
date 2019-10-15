import React, { Component } from 'react'
import PropTypes, { bool } from 'prop-types'
import styled, { css } from 'styled-components'
import Button from 'Components/Shared/Button'
import Cookies from 'universal-cookie'
import { Link } from 'gatsby'
const cookies = new Cookies()
const DID_ACCEPT = 'DID_ACCEPT'

const Root = styled.div`
  display: ${props => props.didAccept ? 'none' : 'grid'};
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10000;
  background: #000;
  color: white;
  padding: ${props => props.theme.spacing(2)};
  grid-template-columns: 1fr 300px;
  @media ${props => props.theme.media.md} {
    grid-template-columns: 1fr;
  }
`
const Text = styled.p`
  align-self: center;
  margin: ${props => props.theme.spacing(1)};
`

const LinkModified = styled(Link)`
  color: white;
  padding: ${props => props.theme.spacing(0, 1)};
`

const ButtonWrapper = styled.div`
  align-self: center;
  justify-self: right;
`

class Cookie extends Component {
  state = {
    didAccept: false
  }

  componentDidMount () {
    const didAccept = cookies.get(DID_ACCEPT) === 'true'
    this.setState({ didAccept })
  }

  acceptCookies () {
    cookies.set(DID_ACCEPT, true, { path: '/' })
    this.componentDidMount()
  }

  render () {
    return (
      <Root didAccept={this.state.didAccept}>
        <Text>
          🍪 We use cookies to provide a better user experience and analyze traffic.
          <LinkModified to="/cookies">See more</LinkModified>
          <br />
          😋 We also use cookies as bribes in meetings -
          <LinkModified to="/anactualcookie">See more</LinkModified>
        </Text>
        <ButtonWrapper>
          <Button
            bgColor="#f5f29c"
            to="/cookies"
            onClick={this.acceptCookies.bind(this)}
            color="black"
          >
          Got it!
          </Button>
        </ButtonWrapper>
      </Root>
    )
  }
}

Cookie.propTypes = {}

export default Cookie
