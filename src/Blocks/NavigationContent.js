import React from 'react'
import PropTypes, { any } from 'prop-types'
import styled, { css } from 'styled-components'

const NavItem = styled.a`
  color: white;
  list-style-type: none;
  text-decoration:none;
  font-weight:700;
  font-size: ${props => props.theme.typography.fontSize.menuItem};
  text-transform: uppercase;
  ${props => props.collapsed
    ? css`
      transform:translateX(-1000%);
      `
    : css`
      transform:translateX(0%);  
    `
}
`

const Li = styled.li`
  padding-bottom: 10px;
`

const NavItems = styled.div`
  justify-self:center;
  align-self:center;
`

const NavFoot = styled.ul`
  justify-self:center;
  align-self:center;
`

const Root = styled.div`
  color:white;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const NavigationContent = props => {
  const { navigationItems, collapsed } = props

  return (
    <Root>
      <NavItems>
        { navigationItems.map(navigationItem => (
          <NavItem href={navigationItem.link} collapsed={collapsed}>
            <Li>
              {navigationItem.name}
            </Li>
          </NavItem>
        )) }
      </NavItems>
      <NavFoot>
        Hey!
      </NavFoot>
    </Root>
  )
}

NavigationContent.propTypes = {
  navigationItems: PropTypes.array,
  collapsed: PropTypes.bool
}
export default NavigationContent
