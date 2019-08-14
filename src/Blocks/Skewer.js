import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'utils/theme'

const Root = styled.div`
  overflow: hidden;
  background-color: ${props => props.bgColor};
  margin-top: ${props => props.offsetTop}vw;
  height: ${props => `calc(${props.height} + ${-props.offsetTop}vw)` || 'auto'};
  transform-origin: 0%;
  transform: skewY(${props => props.angle}deg);
`

const Inner = styled.div`
  margin: ${props => props.offsetTop}vw 0 ${props => props.offsetBottom}vw;
  transform: skewY(${props => -props.angle}deg);
`

const angles = {
  small: theme.skewer.smallAngle,
  large: theme.skewer.largeAngle
}

const Skewer = ({ bgColor, angle: type = 'small', children, reverse, noPadding, flushTop, height }) => {
  let angle = angles[type]
  if (reverse) {
    angle *= -1
  }
  const offset = theme.skewer.calculateOffset(type)

  let topOffset = offset
  let bottomOffset = offset
  if (noPadding && !flushTop) {
    topOffset = -offset
  }
  if (noPadding) {
    bottomOffset = -offset
  }


  return (
    <Root
      bgColor={bgColor}
      angle={angle}
      offsetTop={flushTop ? -topOffset * 2 : 0}
      height={height}
    >
      <Inner
        angle={angle}
        offsetBottom={bottomOffset}
        offsetTop={topOffset}
      >
        {children}
      </Inner>
    </Root>
  )
}

Skewer.propTypes = {
  height: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.any,
  angle: PropTypes.oneOf(['small', 'large']),
  reverse: PropTypes.bool,
  noPadding: PropTypes.bool,
  flushTop: PropTypes.bool
}

export default Skewer
