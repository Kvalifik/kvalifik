import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Root = styled.div`
  transition: 0.5s cubic-bezier(0.66, 0.03, 0.23, 0.99);
  width: 25px;
  height: 25px;
  position: relative;
`

const IconChild1 = styled.div``
const IconChild2 = styled.div``

const Burger = styled.div`
  right: 0;
  left: 0;
  position: absolute;
  display: flex;

  ${IconChild1},
  ${IconChild2} {
    margin: 12px 0;
    position: absolute;
    transition: 0.5s cubic-bezier(0.66, 0.03, 0.23, 0.99);
    height: 2px;
    width: 100%;
    background: white;
    opacity: ${props => props.collapsed ? '1' : '0'};
  }

  ${IconChild1} {
    transform: ${props => props.collapsed ? 'translateY(-7px)' : 'translateY(-25px)'};
  }

  ${IconChild2} {
    transform: ${props => props.collapsed ? 'translateY(7px)' : 'translateY(25px)'};
  }
`

const Cross = styled.div`
  margin: 12px 0;
  right: 0;
  left: 0;
  position: absolute;
  display: flex;

  ${IconChild1},
  ${IconChild2} {
    position: absolute;
    transition: 0.5s cubic-bezier(0.66, 0.03, 0.23, 0.99);
    height: 2px;
    width: 100%;
    background: white;
    opacity: 1;
    ${props => props.collapsed && css`
      transform: rotate(0deg) !important;
    `}
  }

  ${IconChild1} {
    transform: rotate(45deg);
  }

  ${IconChild2} {
    transform: rotate(-45deg);
  }
`

const ToggleNavButton = props => {
  return (
    <Root collapsed={props.collapsed}>
      <Burger collapsed={props.collapsed}>
        <IconChild1 />
        <IconChild2 />
      </Burger>
      <Cross collapsed={props.collapsed}>
        <IconChild1 />
        <IconChild2 />
      </Cross>
    </Root>
  )
}

ToggleNavButton.propTypes = {
  collapsed: PropTypes.bool
}

export default ToggleNavButton
