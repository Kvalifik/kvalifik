import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from 'utils/theme'

const Root = styled.div`
  overflow: hidden;
  background-color: ${props => props.bgColor};
  height: ${props => `calc(${props.height} + ${-props.marginTop}vw + ${-props.marginBottom}vw)` || 'auto'};
  transform-origin: 0%;
  transform: skewY(${props => props.angle}deg);

  margin-top: ${props => props.marginTop}vw;
  margin-bottom: ${props => props.marginBottom}vw;

  ${props => props.half && css`
    background: linear-gradient(to right, ${props.bgColor} 50%, transparent 50%);
  `}
`

const Inner = styled.div`
  transform: skewY(${props => -props.angle}deg);
  margin-top: ${props => props.paddingTop}vw;
  margin-bottom: ${props => props.paddingBottom}vw;
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
  half,
  height
}) => {
  let angle = angles[type]
  if (reverse) {
    angle *= -1
  }
  const offset = theme.skewer.calculateOffset(type)
  let marginTop = 0
  let marginBottom = 0
  let paddingTop = 0
  let paddingBottom = 0

  if (flushTop) {
    marginTop = -offset * 2
  }

  if (flushBottom) {
    marginBottom = -offset * 2
  }

  if (noPadding && !flushTop) {
    paddingTop = -offset
  } else {
    paddingTop = offset
  }

  if (noPadding && !flushBottom) {
    paddingBottom = -offset
  } else {
    paddingBottom = offset
  }

  return (
    <Root
      half={half}
      bgColor={bgColor}
      angle={angle}
      marginTop={marginTop}
      marginBottom={marginBottom}
      height={height}
    >
      <Inner
        angle={angle}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        {children}
      </Inner>
    </Root>
  )
}

Skewer.propTypes = {
  height: PropTypes.string,
  bgColor: PropTypes.string,
  half: PropTypes.bool,
  children: PropTypes.any,
  angle: PropTypes.oneOf(['small', 'large']),
  reverse: PropTypes.bool,
  noPadding: PropTypes.bool,
  flushTop: PropTypes.bool,
  flushBottom: PropTypes.bool
}

export default Skewer
