import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from 'utils/theme'

const Root = styled.div`
  overflow: hidden;
  position: relative;
  height: ${props => props.height ? `calc(${props.height} + ${-props.marginTop}vw + ${-props.marginBottom}vw)` : 'auto'};
  transform-origin: 0%;
  transform: skewY(${props => props.angle}deg);

  margin-top: ${props => props.marginTop}vw;
  margin-bottom: ${props => props.marginBottom}vw;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    transform: skewY(${props => -props.angle}deg);
    margin-top: ${props => -props.offset}vw;
    margin-bottom: ${props => -props.offset}vw;

    ${props => props.bgImage ? css`
      background:
        ${props.half
    ? `linear-gradient(to right, ${props.theme.hexToRgba(props.bgColor, 0.9)} 50%, transparent 50%)`
    : `linear-gradient(0deg, ${props.theme.hexToRgba(props.bgColor, 0.9)}, ${props.theme.hexToRgba(props.bgColor, 0.9)})`},
        url(${props.bgImage});
      background-size: cover, cover;
      background-repeat: no-repeat, no-repeat;
      background-position: center, center;
    ` : css`
      background: ${props.half ? `linear-gradient(to right, ${props.bgColor} 50%, transparent 50%)` : props.bgColor};
    `}
  }
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
  bgColor = 'transparent',
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

  if (half) {
    paddingBottom += offset
    marginBottom = 2 * offset
  }

  return (
    <Root
      angle={angle}
      marginTop={marginTop}
      marginBottom={marginBottom}
      height={height}
      half={half}
      bgColor={bgColor}
      bgImage={bgImageUrl}
      offset={offset}
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
