import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import downArrow from 'graphics/down-arrow.svg'
import theme from 'utils/theme'

const DownArrowIcon = styled.div`
  position: absolute;
  border-radius: 100%;
  top: 90vh;
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
    const skewerOffset = theme.skewer.calculateOffset('large') * window.innerWidth / 100
    const target = Math.min(window.innerHeight * 1.5, document.body.clientHeight - window.innerHeight - skewerOffset)

    function timeoutHandler () {
      console.log(target, window.scrollY)
      if (target - window.scrollY > 20 && target > window.scrollY) {
        setTimeout(timeoutHandler, 10)

        window.scrollTo(0, (target - window.scrollY) / 10 + window.scrollY)
      }
    }

    timeoutHandler()
  }

  return (
    <DownArrowIcon onClick={handleScroll} color={color} />
  )
}

DownArrow.propTypes = {
  color: PropTypes.string
}

export default DownArrow
