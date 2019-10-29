import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import downArrow from 'graphics/down-arrow.svg'
import { smoothScrollTo } from 'utils/scroll'

const DownArrowIcon = styled.div`
  position: absolute;
  border-radius: 100%;
  bottom: ${props => props.theme.skewer.calculateOffset('large') / 6}vw;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.color};
  z-index: 1500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;

  @media ${props => props.theme.media.lg} {
    display: none;
  }

  &::after {
    content: "";
    display: block;
    background-image: url(${downArrow});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 16px;
    height: 16px;
    margin-top: 2px;
  }
`

const DownArrow = ({ color }) => {
  function handleScroll () {
    smoothScrollTo(window.innerHeight * 1.3)
  }

  return (
    <DownArrowIcon onClick={handleScroll} color={color} />
  )
}

DownArrow.propTypes = {
  color: PropTypes.string
}

export default DownArrow
