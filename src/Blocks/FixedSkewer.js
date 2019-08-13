import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  overflow: hidden;
  position: fixed;
  background-color: ${props => props.theme.palette.dark};
  bottom: ${props => props.offset || 0};
  height: ${props => props.height || 0};
  transform-origin: 0%;
  transform: ${props => `skewy(${props.angle})`};
  width: 100vw;
`

const FixedSkewer = ({ angle = -5 }) => {
  const deg = `${angle}deg`
  let offset = 0

  // https://github.com/Kvalifik/kvalifikdk-static/wiki/Skewing-technique
  const rad = angle / 180 * Math.PI
  offset = Math.tan(rad) * 50

  return (
    <Root
      angle={deg}
      height={`calc(100px + ${-offset * 2}vw)`}
      offset={`${offset * 2}vw`}
    />
  )
}

FixedSkewer.propTypes = {
  angle: PropTypes.number
}

export default FixedSkewer
