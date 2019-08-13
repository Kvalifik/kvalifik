import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'utils/theme'

const Root = styled.div`
  overflow: hidden;
  position: fixed;
  background-color: ${props => props.theme.palette.dark};
  bottom: ${props => props.offset || 0};
  height: ${props => props.height || 0};
  transform-origin: 0%;
  transform: ${props => `skewy(${props.angle}deg)`};
  width: 100vw;
`

const angles = {
  small: theme.skewer.smallAngle,
  large: theme.skewer.largeAngle
}

const FixedSkewer = ({ angle: type = 'small', reverse, height = '100px' }) => {
  let angle = angles[type]
  if (reverse) {
    angle *= -1
  }
  const offset = -theme.skewer.calculateOffset(type)

  return (
    <Root
      angle={angle}
      height={`calc(${height} + ${-offset * 2}vw)`}
      offset={`${offset * 2}vw`}
    />
  )
}

FixedSkewer.propTypes = {
  angle: PropTypes.oneOf(['small', 'large']),
  reverse: PropTypes.bool,
  height: PropTypes.string
}

export default FixedSkewer
