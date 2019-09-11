import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from 'utils/theme'

const Root = styled.div`
  position: relative;
  margin-top: calc(${props => -props.offset}vw - 1px);
  margin-bottom: 0;
  height: ${props => props.height};
  z-index: ${props => props.layer};
  padding-top: ${props => props.noPadding ? 0 : props.offset}vw;
  padding-bottom: ${props => (props.flushBottom || props.noPadding) ? 0 : props.offset}vw;
`

const Inner = styled.div`
  position: relative;

  ${Root} {
    margin-top: calc(${props => props.offset / 2}vw - 1px);
    margin-bottom: ${props => -props.offset}vw;
  }
`

const Background = styled.div`
  background:
    ${props => props.half
    ? `linear-gradient(to right, ${props.bgColor} 50%, transparent 50%)`
    : props.bgColor};
  overflow: hidden;

  position: absolute;
  top: 0;
  bottom: ${props => props.offset}vw;
  left: 0;
  right: 0;

  transform-origin: left;
  transform: skewY(${props => props.angle}deg);

  & > * {
    transform-origin: left;
    transform: skewY(${props => -props.angle}deg);
  }

  @media ${props => props.theme.media.lg} {
    background: ${props => props.bgColor};
  }
`

const Image = styled.div`
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 100%;
  height: 100%;
`

const angles = {
  small: theme.skewer.smallAngle,
  large: theme.skewer.largeAngle
}

const Skewer = ({
  angle: type = 'small',
  children,
  bgImageUrl,
  renderBgImage,
  bgColor,
  noPadding,
  half,
  height,
  layer,
  flushBottom
}) => {
  const offset = theme.skewer.calculateOffset(type)
  const angle = angles[type]

  return (
    <Root
      offset={offset}
      layer={layer}
      noPadding={noPadding}
      height={height}
      flushBottom={flushBottom}
    >
      <Background
        angle={angle}
        offset={offset}
        bgColor={bgColor}
        half={half}
      >
        {bgImageUrl && <Image bgImage={bgImageUrl} />}
        {renderBgImage && renderBgImage()}
      </Background>
      <Inner offset={offset}>
        {children}
      </Inner>
    </Root>
  )
}

Skewer.propTypes = {
  angle: PropTypes.string,
  children: PropTypes.any,
  bgImageUrl: PropTypes.string,
  renderBgImage: PropTypes.func,
  bgColor: PropTypes.string,
  noPadding: PropTypes.bool,
  half: PropTypes.bool,
  height: PropTypes.string,
  layer: PropTypes.number,
  flushBottom: PropTypes.bool
}

export default Skewer
