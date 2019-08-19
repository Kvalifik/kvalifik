import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from 'utils/theme'

const Root = styled.div`
  overflow: hidden;
  margin-top: ${props => props.offsetTop}vw;
  height: ${props => props.height ? `calc(${props.height} + ${-props.offsetTop}vw + ${-props.offsetBottom}vw)` : 'auto'};
  margin-bottom: ${props => props.offsetBottom}vw;
  transform-origin: 0%;
  transform: skewY(${props => props.angle}deg);

  ${props => props.bgImage ? css`
    background-image:
      linear-gradient(0deg, ${props.theme.hexToRgba(props.bgColor, 0.9)}, ${props.theme.hexToRgba(props.bgColor, 0.9)}),
      url(${props.bgImage});
    background-size: cover, 100% 100%;
    background-repeat: no-repeat, no-repeat;
    background-position: center, left, left;
  ` : css`
    background-color: ${props.bgColor};
  `}
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
  bgImageUrl,
  angle: type = 'small',
  children,
  reverse,
  noPadding,
  flushTop,
  flushBottom,
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
      bgColor={bgColor}
      bgImage={bgImageUrl}
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
  bgImageUrl: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.any,
  angle: PropTypes.oneOf(['small', 'large']),
  reverse: PropTypes.bool,
  noPadding: PropTypes.bool,
  flushTop: PropTypes.bool,
  flushBottom: PropTypes.bool
}

export default Skewer
