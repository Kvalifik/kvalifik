import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import targetBlankIcon from 'graphics/target_blank.svg'

const Li = styled.li`
  transition: 0.6s ${props => props.index * 0.01 + 's'} cubic-bezier(0.66, 0.03, 0.23, 0.99);
  list-style-type: none;
  padding-bottom: ${props => props.theme.spacing(2)};
  ${props => props.collapsed
    ? css`
      padding-left: calc(200px + (${props => props.index * 10 + 'px'}) );
      `
    : css`
      padding-left: 0px;
    `}
`

const NavItems = styled.div`
  margin-left: ${props => props.theme.spacing(8)};
  justify-self: left;
  align-self: center;
  &:first-of-type{
    margin-top: ${props => props.theme.navBarWidth};
  }
`

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: ${props => props.theme.typography.fontSize.menuItem};
  text-transform: uppercase;
  ${props => !props.isexternal || css`
    &:after{
      content: url('${targetBlankIcon}');
    }
  `}
`

const FooterItem = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 300;
  font-size: calc((${props => props.theme.typography.fontSize.menuItem}) - 5px);
  text-transform: uppercase;
  ${props => !props.isexternal || css`
    display:flex;
    &:after{
      margin-top: -3px;
      margin-left: 5px;
      content: url('${targetBlankIcon}');
    }
  `}
`

const Root = styled.div`
  color: white;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const SocialIcons = styled.div`
  margin-top: ${props => props.theme.spacing(2)};
  grid-gap: ${props => props.theme.spacing(2)};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const SocialIcon = styled.a`
  transition: 0.6s ${props => props.index * 0.01 + 's'} cubic-bezier(0.66, 0.03, 0.23, 0.99);
  width: 100%;
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

const NavigationContent = props => {
  const { navigationItems, navigationLinks, collapsed, socialMediaLinks } = props

  return (
    <Root>
      <NavItems>
        {
          navigationItems.map((navigationItem, i) => (
            <Li collapsed={collapsed} key={i} index={i}>
              <NavItem href={navigationItem.path} isexternal={navigationItem.isexternal} target={!navigationItem.isexternal || '_blank'} >
                {navigationItem.name}
              </NavItem>
            </Li>
          ))
        }
      </NavItems>
      <NavItems>
        {
          navigationLinks.map((navigationItem, i) => (
            <Li collapsed={collapsed} key={i} index={i + navigationItems.length}>
              <FooterItem href={navigationItem.path} isexternal={navigationItem.isexternal} target={!navigationItem.isexternal || '_blank'}>
                {navigationItem.name}
              </FooterItem>
            </Li>
          ))
        }
        <SocialIcons>
          {
            socialMediaLinks.map((socialMediaLink, i) =>
              <SocialIcon href={socialMediaLink.linkUrl} collapsed={collapsed} key={i} index={i + navigationItems.length}>
                <img src={socialMediaLink.icon.url} />
              </SocialIcon>
            )
          }
        </SocialIcons>
      </NavItems>
    </Root>
  )
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
