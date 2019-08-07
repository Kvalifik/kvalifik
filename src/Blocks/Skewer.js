import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Root = styled.div`
  overflow: hidden;
  width: 100vw;
  background-color: ${props => props.bgColor};

  ${props => props.reverse
    ? css`
      transform-origin: 100%;
      transform: ${props => `skewy(-${props.angle})`};
    `
    : css`
      transform-origin: 0%
      transform: ${props => `skewy(${props.angle})`};
    `}
`

const Inner = styled.div`
  padding: ${props => props.offset} 0;
  transform: ${props => props.reverse
    ? `skewy(${props.angle})`
    : `skewy(-${props.angle})`}
`

const Skewer = ({ bgColor, angle, children, reverse }) => {
  const deg = `${angle}deg`
  const rad = angle / 180 * Math.PI
  // https://github.com/Kvalifik/kvalifikdk-static/wiki/Skewing-technique
  const offset = Math.tan(rad) * 50
  const offsetWithUnit = `${offset}vw`

  return (
    <Root bgColor={bgColor} angle={deg} reverse={reverse}>
      <Inner
        reverse={reverse}
        angle={deg}
        offset={offsetWithUnit}
      >{children}</Inner>
    </Root>
  )
}

Skewer.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.any,
  angle: PropTypes.number,
  reverse: PropTypes.bool
}

export default Skewer
