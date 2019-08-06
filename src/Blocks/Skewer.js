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
      transform: skewy(-8deg)
      & > * {
          transform: skewy(8deg);
      }
    `
    : css`
      transform-origin: 0%
      transform: skewy(8deg);
      & > * {
          transform: skewy(-8deg);
      }
    `}
`

const Inner = styled.div`
  padding: 80px 0;
`

const Skewer = ({ bgColor, children }) => (
  <Root bgColor={bgColor} >
    <Inner>{children}</Inner>
  </Root>
)

Skewer.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.any
}

export default Skewer
