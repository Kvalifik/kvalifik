import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Root = styled.div`
  transition: .5s cubic-bezier(0.66, 0.03, 0.23, 0.99);
  width: 25px;
  height: 25px;
  position: relative;
`

const Burger = styled.div`
  right: 0;
  left: 0;
  position: absolute;
  display: flex;
  div{
    margin: 12px 0;
    position: absolute;
    transition: .5s cubic-bezier(0.66, 0.03, 0.23, 0.99);
    height: 2px;
    width: 100%;
    background: white;
    ${props => props.collapsed ? css`
      opacity: 1;
      &.div1{
        transform: translateY(-7px)
      }
      &.div2{
        transform: translateY(7px)
      }
    ` : css`
      opacity: 0;
      &.div1{
        transform: translateY(-25px)
      }
      &.div2{
        transform: translateY(25px)
      }
    `}
  }
`

const Cross = styled.div`
  margin: 12px 0;
  right: 0;
  left: 0;
  position: absolute;
  display:flex;
  div{
    position: absolute;
    transition: .5s cubic-bezier(0.66, 0.03, 0.23, 0.99);
    height: 2px;
    width: 100%;
    background: white;
    opacity: 1;
    ${props => !props.collapsed || css`
      transform: rotate(0deg) !important;
    `}
  }
  .div1{
    transform: rotate(45deg);
  }
  .div2{
    transform: rotate(-45deg);
  }
`

const ToggleNavButton = props => {
  return (
    <Root collapsed={props.collapsed}>
      <Burger collapsed={props.collapsed}>
        <div className="div1" />
        <div className="div2" />
      </Burger>
      <Cross collapsed={props.collapsed}>
        <div className="div1" />
        <div className="div2" />
      </Cross>
    </Root>
  )
}

ToggleNavButton.propTypes = {
  collapsed: PropTypes.bool
}

export default ToggleNavButton
