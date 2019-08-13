import React from 'react'
import PropTypes, { any } from 'prop-types'
import styled from 'styled-components'

const NavItem = styled.a`
  border: 0;
  color: white;
  list-style-type: none;
  text-decoration:none;
  font-weight:900;
  /* font-size: ${props = props.theme.} */
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
  const { navigationItems } = props

  return (
    <Root>
      <NavItems>
        { navigationItems.map(navigationItem => (
          <NavItem href={navigationItem.link}>
            <li>
              {navigationItem.name}
            </li>
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
  navigationItems: PropTypes.array
}
export default NavigationContent
