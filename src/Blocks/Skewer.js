import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'utils/theme'

const Root = styled.div`
  overflow: hidden;
  background-color: ${props => props.bgColor};
  margin-top: ${props => props.offset || 0};
  height: ${props => props.height || 'auto'};
  transform-origin: 0%;
  transform: skewy(${props => props.angle}deg);
`

const Inner = styled.div`
  margin: ${props => props.offset} 0;
  transform: skewy(${props => -props.angle}deg);
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
  let offset = 0

  // https://github.com/Kvalifik/kvalifikdk-static/wiki/Skewing-technique
  const rad = angle / 180 * Math.PI
  offset = Math.tan(rad) * 50

  if (noPadding) {
    offset *= -1
  }

  return (
    <Root
      bgColor={bgColor}
      angle={angle}
      offset={flushTop ? `${-offset * 2}vw` : 0}
      height={height}
    >
      <Inner
        angle={angle}
        offset={!flushTop ? `${offset}vw` : 0}
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
