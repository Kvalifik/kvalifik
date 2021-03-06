import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import NavigationContent from './NavigationContent'
import ToggleNavButton from './ToggleNavButton'

const NavDiv = styled.div`
  transition: 0.5s cubic-bezier(0.66, 0.03, 0.23, 0.99);
  color: white;
  position: fixed;
  z-index: 4000;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: ${props => props.theme.hexToRgba(props.theme.palette.dark, 0.8)};

  @media ${props => props.theme.media.lg} {
    background-color: ${props => props.theme.hexToRgba(props.theme.palette.dark, 1)};
  }

  @media ${props => props.theme.media.sm} {
    background-color: ${props => props.theme.hexToRgba(props.theme.palette.dark, 0.8)};
  }

  @media ${props => props.theme.media.landscape} {
    background-color: ${props => props.theme.hexToRgba(props.theme.palette.dark, 0.8)};
  }

  /* Mobile Nav: */
  @media ${props => props.theme.media.sm} {
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
  }
  @media ${props => props.theme.media.landscape} {
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
  }

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

const HomeLink = styled.div`
  transition: 0.5s cubic-bezier(0.66, 0.03, 0.23, 0.99);
  position: fixed;
  right: 0;
  top: 50%;
  z-index: 100;
  transform: rotate(-90deg) translate(30%, 100%);

  ${props => props.collapsed
    ? css`
      margin: ${props => props.theme.spacing(2.5)} 0;
    `
    : css`
      margin: ${props => props.theme.spacing(2.5)} ${props => props.theme.spacing(1.5)};
  `}

  @media ${props => props.theme.media.sm} {
    left: 0;
    bottom: initial;
    right: initial;
    top: 0;
    margin: 15px;
    transform: translate(10%, 30%);
  }

  @media ${props => props.theme.media.landscape} {
    left: 0;
    bottom: initial;
    right: initial;
    top: 0;
    margin: 15px;
    transform: translate(10%, 30%);
  }
`

const KvalfikLogo = styled.img`
  transition: 0.5s cubic-bezier(0.66, 0.03, 0.23, 0.99);
  height: 30px;
  display: ${props => props.isGlitch ? 'none' : 'block'};

  @media ${props => props.theme.media.sm} {
    display: block;
    width: ${props => props.isGlitch ? '110px' : '80px'};
    height: initial;
    margin: ${props => props.isGlitch ? '-10px -15px' : 0};
    filter: ${props => props.isGlitch ? 'invert(1)' : 'none'};
  }

  @media ${props => props.theme.media.landscape} {
    display: block;
    width: ${props => props.isGlitch ? '110px' : '80px'};
    height: initial;
    margin: ${props => props.isGlitch ? '-10px -15px' : 0};
    filter: ${props => props.isGlitch ? 'invert(1)' : 'none'};
  }
`

class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: true
    }
    this.ref = React.createRef()
    this._handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  componentDidMount () {
    document.addEventListener('click', this._handleOutsideClick)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this._handleOutsideClick)
  }

  handleOutsideClick (ev) {
    if (this.state.collapsed) {
      return
    }

    if (this.ref && this.ref.current) {
      if (!this.ref.current.contains(ev.target)) {
        this.setState({
          collapsed: true
        })
      }
    }
  }

  toggleNavigation () {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render () {
    const {
      navigationItems,
      navigationLinks,
      socialMediaLinks,
      logoUrl,
      isGlitch
    } = this.props

    return (
      <NavDiv collapsed={this.state.collapsed} ref={this.ref}>
        <HomeLink collapsed={this.state.collapsed}>
          <Link to="/">
            <KvalfikLogo collapsed={this.state.collapsed} src={logoUrl} isGlitch={isGlitch} />
          </Link>
        </HomeLink>
        <IconWrapper onClick={this.toggleNavigation.bind(this)}>
          <ToggleNavButton collapsed={this.state.collapsed} />
        </IconWrapper>
        <NavigationContent
          collapsed={this.state.collapsed}
          navigationItems={navigationItems}
          navigationLinks={navigationLinks}
          socialMediaLinks={socialMediaLinks}
        />
      </NavDiv>
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
  socialMediaLinks: PropTypes.array,
  logoUrl: PropTypes.string,
  isGlitch: PropTypes.bool
}

export default Navigation
