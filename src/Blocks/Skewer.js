/* eslint max-len: 0 */

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import theme from 'utils/theme'

const Root = styled.div`
  position: ${props => props.position || 'relative'};
  height: ${props => props.height || 'auto'};
  width: 100%;
  z-index: ${props => props.layer || 'auto'};

  margin-top: ${props => props.flushTop ? `${-props.offset * 2}vw` : 0};
  margin-bottom: calc(${props => props.offset * 2}vw - 3px);

  padding-top: ${props => props.offset}vw;
  padding-bottom: ${props => props.offset}vw;
`

const BgColor = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: ${props => props.noPadding ? `${2 * props.offset}vw` : 0};
  width: 100%;
  transform: skewY(${props => props.angle}deg);
  transform-origin: left;
  background: ${props => props.half ? `linear-gradient(to right, ${props.bgColor} 50%, transparent 50%)` : props.bgColor};

  @media ${props => props.theme.media.lg} {
    background: ${props => props.bgColor};
  }
`

const BgImage = styled.div`
  transform-origin: left;
  transform: skewY(${props => -props.angle}deg);
  width: 100%;
  height: calc(100% + ${props => props.offset}vw);

  ${props => props.bgImage && css`
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `}
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
  height,
  layer,
  position,
  renderBgImage
}) => {
  let angle = angles[type]
  if (reverse) {
    angle *= -1
  }
  const offset = theme.skewer.calculateOffset(type)

  return (
    <Root
      angle={angle}
      height={height}
      layer={layer}
      position={position}
      offset={offset}
      flushTop={flushTop}
    >
      <BgColor
        angle={angle}
        offset={offset}
        bgColor={bgColor}
        noPadding={noPadding}
      >
        {(bgImageUrl || renderBgImage) && (
          <BgImage
            angle={angle}
            bgImage={bgImageUrl}
            offset={offset}
          >
            {renderBgImage && renderBgImage()}
          </BgImage>
        )}
      </BgColor>
      {children}
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
  flushBottom: PropTypes.bool,
  layer: PropTypes.number,
  position: PropTypes.string,
  renderBgImage: PropTypes.func
}

export default Skewer
