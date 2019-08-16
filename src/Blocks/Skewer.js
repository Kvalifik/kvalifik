import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from 'utils/theme'

const Root = styled.div`
  overflow: hidden;
  background-color: ${props => props.bgColor};
  ${props => props.fiftyFiftyBg ? css`
    background: linear-gradient(to right, ${props.bgColor} 50%, transparent 50%);` : ''}
  margin-top: ${props => props.offsetTop}vw;
  height: ${props => `calc(${props.height} + ${-props.offsetTop}vw + ${-props.offsetBottom}vw)` || 'auto'};
  margin-bottom: ${props => props.offsetBottom}vw;
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

const Skewer = ({
  bgColor,
  angle: type = 'small',
  children,
  reverse,
  noPadding,
  flushTop,
  flushBottom,
  fiftyFiftyBg,
  height
}) => {
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
  if (noPadding && !flushBottom) {
    bottomOffset = -offset
  }

  return (
    <Root
      fiftyFiftyBg={fiftyFiftyBg}
      bgColor={bgColor}
      angle={angle}
      offsetTop={flushTop ? -topOffset * 2 : 0}
      offsetBottom={flushBottom ? -bottomOffset * 2 : 0}
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
  fiftyFiftyBg: PropTypes.bool,
  children: PropTypes.any,
  angle: PropTypes.oneOf(['small', 'large']),
  reverse: PropTypes.bool,
  noPadding: PropTypes.bool,
  flushTop: PropTypes.bool,
  flushBottom: PropTypes.bool
}

export default Skewer
