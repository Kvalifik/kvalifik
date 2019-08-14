import React from 'react'
import PropTypes, { any } from 'prop-types'
import styled, { css } from 'styled-components'

const NavItem = styled.a`
  color: white;
  text-decoration:none;
  font-weight:700;
  font-size: ${props => props.theme.typography.fontSize.menuItem};
  text-transform: uppercase;
`

const FooterItem = styled.a`
  color: white;
  text-decoration:none;
  font-weight:300;
  font-size: calc(${props => props.theme.typography.fontSize.menuItem} - 5px);
  text-transform: uppercase;
`

const Li = styled.li`
  transition: 0.6s ${props => props.index * 0.01 + 's'} cubic-bezier(0.66, 0.03, 0.23, 0.99);
  list-style-type: none;
  padding-bottom: ${props => props.theme.spacing(2)};
  ${props => props.collapsed
    ? css`
      padding-left:calc(200px + (${props => props.index * 10 + 'px'}) );
      `
    : css`
      padding-left:0px;
    `
}
`

const NavItems = styled.div`
  margin-left: ${props => props.theme.spacing(8)};
  justify-self:left;
  align-self:center;
`

const Root = styled.div`
  color:white;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const NavigationContent = props => {
  const { navigationItems, navigationLinks, socialIcons, collapsed } = props

  return (
    <Root>
      <NavItems>
        {
          navigationItems.map((navigationItem, i) => (
            <Li collapsed={collapsed} key={i} index={i}>
              <NavItem href={navigationItem.link}>
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
              <FooterItem href={navigationItem.link}>
                {navigationItem.name}
              </FooterItem>
            </Li>
          ))
        }
      </NavItems>
      <SocialIcons>
        
      </SocialIcons>
    </Root>
  )
}

NavigationContent.propTypes = {
  navigationItems: PropTypes.array,
  navigationLinks: PropTypes.array,
  socialIcons: PropTypes.array,
  collapsed: PropTypes.bool
}
export default NavigationContent
