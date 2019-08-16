import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import NavigationContent from './NavigationContent'
import ToggleNavButton from './ToggleNavButton'

import kvalfikLogo90 from 'graphics/kvalifik_90_logo.svg'

const Root = styled.div``

const NavDiv = styled.div`
  transition: 0.5s cubic-bezier(0.66, 0.03, 0.23, 0.99);
  color: white;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: #1d1d1dcc; /* CC = 80% in hex */

  ${props => props.theme.media.lg`
    background-color: #1d1d1d;
  `}

  ${props => props.theme.media.sm`
    background-color: #1d1d1dcc;
  `}

  /* Mobile Nav: */
  ${props => props.theme.media.sm`
    width: 100%;
    left: 0;
    top: calc(-100vh + ${props => props.theme.navBarWidth});
    height: 100vh;

    /* Collapsed mobile nav */
    ${props => !props.collapsed &&
      css`
        top: 0;
        right: calc(-100% + ${props => props.theme.navBarWidth});
      `}
  `}

  /* Collapsed Nav: */
  ${props => props.collapsed && css`
    right: calc(-300px + (${props => props.theme.navBarWidth}));

    &:hover{
      right: calc(-300px + (${props => props.theme.navBarWidth} + 10px));
    }
  `}
`

const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  right: 0;
  top: 0;
  height: ${props => props.theme.navBarWidth};
  width: ${props => props.theme.navBarWidth};
  position: fixed;
`

const KvalfikLogo = styled.img`
  transition: 0.5s cubic-bezier(0.66, 0.03, 0.23, 0.99);
  position: fixed;
  width: 30px;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;

  ${props => props.collapsed
    ? css`
      margin: auto ${props => props.theme.spacing(2.5)};
    `
    : css`
      margin: auto ${props => props.theme.spacing(4)};
  `}

  ${props => props.theme.media.sm`
    transform: rotate(90deg) translate(100%, -100%);
    transform-origin: 50% 0%;
    height: 80px;
    width: initial;
    left: 0;
    bottom: initial;
    right: initial;
    margin: 15px;
  `}
`

class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: true
    }
  }

  toggleNavigation () {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render () {
    const {
      navigationItems,
      navigationLinks,
      socialMediaLinks
    } = this.props

    return (
      <Root>
        <NavDiv collapsed={this.state.collapsed}>
          <KvalfikLogo collapsed={this.state.collapsed} src={kvalfikLogo90} />
          <IconWrapper onClick={this.toggleNavigation.bind(this)} >
            <ToggleNavButton collapsed={this.state.collapsed} />
          </IconWrapper>
          <NavigationContent
            collapsed={this.state.collapsed}
            navigationItems={navigationItems}
            navigationLinks={navigationLinks}
            socialMediaLinks={socialMediaLinks}
          />
        </NavDiv>
      </Root>
    )
  }
}

Navigation.propTypes = {
  navigationItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    isExternal: PropTypes.bool
  })),
  navigationLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    isExternal: PropTypes.bool
  })),
  socialMediaLinks: PropTypes.array
}

export default Navigation
