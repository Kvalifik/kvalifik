import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from 'utils/theme'

const Root = styled.div`
  overflow: hidden;
  height: ${props => props.height ? `calc(${props.height} + ${-props.offsetTop}vw + ${-props.offsetBottom}vw)` : 'auto'};
  transform-origin: 0%;
  transform: skewY(${props => props.angle}deg);

  margin-top: ${props => props.offsetTop}vw;
  margin-bottom: ${props => props.offsetBottom}vw;

  ${props => props.bgImage ? css`
    background-image:
      ${props.half
    ? `linear-gradient(to right, ${props.theme.hexToRgba(props.bgColor, 0.9)} 50%, transparent 50%)`
    : `linear-gradient(0deg, ${props.theme.hexToRgba(props.bgColor, 0.9)}, ${props.theme.hexToRgba(props.bgColor, 0.9)})`},
      url(${props.bgImage});
    background-size: cover, 100% 100%;
    background-repeat: no-repeat, no-repeat;
    background-position: center, left, left;
  ` : css`
    background-color: ${props.half ? `linear-gradient(to right, ${props.bgColor} 50%, transparent 50%)` : props.bgColor};
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
  bgImageUrl,
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
      bgImage={bgImageUrl}
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
  bgImageUrl: PropTypes.string,
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
