import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import UniversalLink from 'Components/Shared/UniversalLink'
import Svg from 'react-inlinesvg'

import rightArrow from 'graphics/rightArrow.svg'
import targetBlank from 'graphics/target_blank.svg'

const Li = styled.li`
  transition: 0.6s ${props => props.index * 0.01 + 's'} cubic-bezier(0.66, 0.03, 0.23, 0.99);
  list-style-type: none;
  ${props => props.collapsed
    ? css`
      padding-left: calc(200px + (${props => props.index * 10 + 'px'}) );
      opacity: 0;
      `
    : css`
      padding-left: 0px;
      opacity: 1;
    `}
`

const NavItems = styled.div`
  margin-left: ${props => props.theme.spacing(8)};
  justify-self: left;
  align-self: center;

  &:first-of-type {
    @media screen and (orientation: portrait) {
      margin-top: ${props => props.theme.navBarWidth};
    }
  }

  @media ${props => props.theme.media.landscape} {
    margin-top: 30vh;
  }
`

const NavItem = styled(({ isCurrentRoute, ...rest }) => <UniversalLink {...rest} />)`
  color: white;
  text-decoration: none;
  line-height: ${props => props.theme.spacing(5)};
  height: 100%;
  font-weight: 700;
  font-size: ${props => props.theme.typography.fontSize.menuItem};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  position: relative;

  ${props => props.isCurrentRoute && css`
    &::before {
      content: "";
      width: 15px;
      height: 15px;
      background: url(${rightArrow}) center no-repeat;
      background-size: cover;
      position: absolute;
      transform: translateX(calc(-100% + ${props => props.theme.spacing(-1)}));
    }
  `}

  svg {
    width: 30px;
    height: 30px;
  }
`

const FooterItem = styled(({ isCurrentRoute, ...rest }) => <UniversalLink {...rest} />)`
  display: flex;
  align-items: center;
  line-height: ${props => props.theme.spacing(3)};
  color: white;
  text-decoration: none;
  font-weight: 300;
  font-size: calc((${props => props.theme.typography.fontSize.menuItem}) * 0.75);
  text-transform: uppercase;

  ${props => props.isCurrentRoute && css`
    &::before {
      content: "";
      width: 10px;
      height: 10px;
      background: url(${rightArrow}) center no-repeat;
      background-size: cover;
      position: absolute;
      transform: translateX(calc(-100% + ${props => props.theme.spacing(-1)}));
    }
  `}

  svg {
    width: 23px;
    height: 23px;
  }
`

const Root = styled.div`
  color: white;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media ${props => props.theme.media.landscape} {
    grid-template-columns: 1fr 1fr;
  }
`

const SocialIcons = styled.div`
  margin-top: ${props => props.theme.spacing(1)};
  grid-gap: ${props => props.theme.spacing(2)};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`

const SocialIcon = styled(UniversalLink)`
  transition: 0.6s ${props => props.index * 0.01 + 's'} cubic-bezier(0.66, 0.03, 0.23, 0.99);

  img {
    width: 30px;
  }

  ${props => props.collapsed
    ? css`
      opacity: 0;
      padding-left: calc(500px + (${props => props.index * 10 + 'px'}) );
      `
    : css`
      opacity: 1;
      padding-left: 0px;
    `}
`

class NavigationContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentRoute: ''
    }
  }

  componentDidMount () {
    this.setState({
      currentRoute: window.location.pathname
    })
  }

  render () {
    const {
      navigationItems,
      navigationLinks,
      collapsed,
      socialMediaLinks
    } = this.props

    const currentRoute = this.state.currentRoute

    return (
      <Root>
        <NavItems>
          {
            navigationItems.map((navigationItem, i) => (
              <Li collapsed={collapsed} key={i} index={i}>
                <NavItem
                  isExternal={navigationItem.isExternal}
                  to={navigationItem.path}
                  isCurrentRoute={currentRoute.includes(navigationItem.path)}
                >
                  {navigationItem.name}
                  {navigationItem.isExternal && (
                    <Svg src={targetBlank} />
                  )}
                </NavItem>
              </Li>
            ))
          }
        </NavItems>
        <NavItems>
          {
            navigationLinks.map((navigationItem, i) => (
              <Li collapsed={collapsed} key={i} index={i + navigationItems.length}>
                <FooterItem
                  isExternal={navigationItem.isExternal}
                  to={navigationItem.path}
                  isCurrentRoute={currentRoute.includes(navigationItem.path)}
                >
                  {navigationItem.name}
                  {navigationItem.isExternal && (
                    <Svg src={targetBlank} />
                  )}
                </FooterItem>
              </Li>
            ))
          }
          <SocialIcons>
            {
              socialMediaLinks.map((socialMediaLink, i) =>
                <SocialIcon
                  to={socialMediaLink.path}
                  collapsed={collapsed}
                  key={i}
                  index={i + navigationItems.length}
                  isExternal={socialMediaLink.isExternal}
                >
                  <img src={socialMediaLink.icon && socialMediaLink.icon.url} />
                </SocialIcon>
              )
            }
          </SocialIcons>
        </NavItems>
      </Root>
    )
  }
}

NavigationContent.propTypes = {
  navigationItems: PropTypes.array,
  navigationLinks: PropTypes.array,
  collapsed: PropTypes.bool,
  socialMediaLinks: PropTypes.arrayOf(PropTypes.shape({
    linkUrl: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    })
  }))
}
export default NavigationContent
