import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  top: ${props => props.theme.spacing(2)};
  left: ${props => props.theme.spacing(2)};
  position: absolute;
  
`

const BackArrow = () =>
  <Root>
    S
  </Root>

BackArrow.propTypes = {
}

export default BackArrow
