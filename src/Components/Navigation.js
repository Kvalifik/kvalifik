import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import exitIcon from 'graphics/exit.svg'
import burgerIcon from 'graphics/burger.svg'
import NavigationContent from 'Blocks/NavigationContent'
import kvalfikLogo90 from 'graphics/kvalifik_90_logo.svg'
import kvalfikLogo from 'graphics/kvalifik_logo.svg'

const Root = styled.div`

`

const NavDiv = styled.div`
  transition: .5s cubic-bezier(0.66, 0.03, 0.23, 0.99);
  color: white;
  position:fixed;
  right: 0;
  top:0;
  bottom:0;
  width: 300px;
  background-color: #1D1D1DCC; /* CC = 80% in hex */

  /* Mobile Nav: */
  ${props => props.theme.media.sm`
    width: 100% !important;
    left: 0;
    top: calc(-100vh + ${props => props.theme.navBarWidth});
    height: 100vh;
    /* Collapsed mobile nav */
    ${props => props.collapsed ||
      css`
        top: 0;
        right: calc(-100% + ${props => props.theme.navBarWidth});
      `
}
  `}
    /* Collapsed Nav: */
    ${props => !props.collapsed ||
    css`
      right: calc(-300px + (${props => props.theme.navBarWidth}));
    `
}

`

const CollapseIcon = styled.img`
  margin:0;
`

const IconWrapper = styled.div`
  cursor: pointer;
  display:flex;
  justify-content: center;
  align-items:center;
  z-index:10;
  right: 0;
  top:0; 
  height: ${props => props.theme.navBarWidth};
  width: ${props => props.theme.navBarWidth};
  position:fixed;
`

const KvalfikLogo = styled.img`
  transition: .5s cubic-bezier(0.66, 0.03, 0.23, 0.99);
  position:fixed;
  
  right: 0;
  top: 0;
  bottom:0;
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
    height: 100px;
    left: 0;
    bottom:initial;
    right: initial;
    margin: 15px !important;
  `}
  z-index: 100;
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

    console.log({ navigationLinks })

    return (
      <Root>
        <KvalfikLogo collapsed={this.state.collapsed} src={kvalfikLogo90} />
        <IconWrapper>
          <CollapseIcon src={this.state.collapsed ? burgerIcon : exitIcon} onClick={this.toggleNavigation.bind(this)} />
        </IconWrapper>
        <NavDiv collapsed={this.state.collapsed}>
          <NavigationContent collapsed={this.state.collapsed} navigationItems={navigationItems} navigationLinks={navigationLinks} socialMediaLinks={socialMediaLinks} />
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
