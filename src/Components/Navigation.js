import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import exitIcon from 'graphics/exit.svg'
import burgerIcon from 'graphics/burger.svg'
import NavigationContent from '../Blocks/NavigationContent';


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

  ${props => props.collapsed
    ? css`
      right: calc(-300px + 75px);
    `
    : ''
}
`

const CollapseIcon = styled.img`
  margin:0;
`

const IconWrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  z-index:10;
  right: 0;
  top:0; 
  height: 75px;
  width: 75px;
  position:fixed;
`


class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggleNavigation () {
    console.log('test')
    this.setState({ collapsed: !this.state.collapsed })
  }

  render () {
    console.log(this.props)
    const {
      navigationItems
    } = this.props

    return (
      <Root>
        <IconWrapper>
          <CollapseIcon src={this.state.collapsed ? burgerIcon : exitIcon} onClick={this.toggleNavigation.bind(this)} />
        </IconWrapper>
        <NavDiv collapsed={this.state.collapsed}>
          <NavigationContent collapsed={this.state.collapsed} navigationItems={navigationItems} />
        </NavDiv>
      </Root>
    )
  }
}

Navigation.propTypes = {
  navigationItems: PropTypes.array
}

export default Navigation
