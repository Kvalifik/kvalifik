import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Root = styled.div`
  padding: ${props => props.innerPadding} 0; /* Either use defined innerPadding or default 150px */
  ${props => props.doubleBottom ? css`
    padding-bottom: calc(${props => props.innerPadding} * 2);
  ` : ''}
`

const Padder = ({ innerPadding = '150px', children, doubleBottom }) => {
  return (
    <Root innerPadding={innerPadding} doubleBottom={doubleBottom}>
      {children}
    </Root>
  )
}

Padder.propTypes = {
  innerPadding: PropTypes.string,
  doubleBottom: PropTypes.bool,
  children: PropTypes.any
}

export default Padder
