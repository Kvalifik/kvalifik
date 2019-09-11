import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from 'utils/theme'

const Root = styled.div`
<<<<<<< HEAD
  overflow: hidden;
  position: ${props => props.position || 'relative'};
  height:
    ${props => props.height
    ? `calc(${props.height} + ${-props.marginTop}vw + ${-props.marginBottom}vw)`
    : 'auto'};
  width: 100%;
  transform-origin: 0%;
  transform: skewY(${props => props.angle}deg);
  z-index: ${props => props.layer || 'auto'};

  margin-top: ${props => props.marginTop}vw;
  margin-bottom: calc(${props => props.marginBottom}vw - 3px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    transform: skewY(${props => props.angle}deg);
    margin-top: ${props => -props.offset}vw;
=======
  position: relative;
  margin-top: ${props => -props.offset}vw;
  margin-bottom: 0;
  padding: ${props => props.noPadding ? 0 : props.offset}vw 0;
  height: ${props => props.height};
  z-index: ${props => props.layer};

  &:last-child {
>>>>>>> SkewerFix
    margin-bottom: ${props => -props.offset}vw;
  }
`

const Inner = styled.div`
<<<<<<< HEAD
  transform: skewY(${props => -props.angle}deg);
  margin-top: ${props => props.paddingTop}vw;
  margin-bottom: ${props => props.paddingBottom}vw;
=======
  position: relative;

  ${Root} {
    margin-top: calc(${props => props.offset / 2}vw - 1px);
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
>>>>>>> SkewerFix
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
  layer
}) => {
  const offset = theme.skewer.calculateOffset(type)
  const angle = angles[type]

  return (
    <Root
      offset={offset}
      layer={layer}
      noPadding={noPadding}
      height={height}
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
  layer: PropTypes.number
}

export default Skewer
