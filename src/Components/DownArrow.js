import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import downArrow from 'graphics/down-arrow.svg'

const DownArrowIcon = styled.div`
  position: absolute;
  border-radius: 100%;
  top: 90vh;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.color};
  padding: 16px;
  z-index: 1500;
  cursor: pointer;

  ${props => props.theme.media.lg`
    display: none;
  `}

  &::after {
    content: "";
    display: block;
    background-image: url(${downArrow});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 16px;
    height: 16px;
  }
`

const DownArrow = ({ color }) => {
  const handleScroll = () => {
    const target = window.innerHeight * 1.5
    if (window.scrollY < target - 20) {
      setTimeout(handleScroll, 10)

      window.scrollTo(0, (target - window.scrollY) / 10 + window.scrollY)
    }
  }

  return (
    <DownArrowIcon onClick={handleScroll} color={color} />
  )
}

DownArrow.propTypes = {
  color: PropTypes.string
}

export default DownArrow
