import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Root = styled.div`
  overflow: hidden;
  background-color: ${props => props.bgColor};
  margin-top: ${props => props.offset || 0};
  height: ${props => props.height || 'auto'};

  ${props => props.reverse
    ? css`
      transform-origin: 100%;
      transform: ${props => `skewy(-${props.angle})`};
    `
    : css`
      transform-origin: 0%;
      transform: ${props => `skewy(${props.angle})`};
    `}
`

const Inner = styled.div`
  margin: ${props => props.offset} 0;
  transform: ${props => props.reverse ? `skewy(${props.angle})` : `skewy(-${props.angle})`};
`

const Skewer = ({ bgColor, angle = 4, children, reverse, noPadding, flushTop, height }) => {
  const deg = `${angle}deg`
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
      angle={deg}
      reverse={reverse}
      offset={flushTop ? `-${offset * 2}vw` : 0}
      height={height}
    >
      <Inner
        reverse={reverse}
        angle={deg}
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
  angle: PropTypes.number,
  reverse: PropTypes.bool,
  noPadding: PropTypes.bool,
  flushTop: PropTypes.bool
}

export default Skewer
