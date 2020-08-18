import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Root = styled.div`
  padding: 
    ${props => props.removeTopPadding ? 0 : props.innerPadding}
    0
    ${props => props.innerPadding} 
    0; /* Either use defined innerPadding or default 150px */
  ${props => props.removeOnMedia && css`
    @media ${props.theme.media[props.removeOnMedia]} {
      padding: 0;
    }
  `}
`

const Padder = ({ innerPadding = '150px', removeOnMedia, children, removeTopPadding = false }) => (
  <Root
    innerPadding={innerPadding}
    removeOnMedia={removeOnMedia}
    removeTopPadding={removeTopPadding}
  >
    {children}
  </Root>
)

Padder.propTypes = {
  innerPadding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any,
  removeOnMedia: PropTypes.string,
  removeTopPadding: PropTypes.bool
}

export default Padder
