import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Root = styled.div`
  padding: ${props => props.innerPadding} 0; /* Either use defined innerPadding or default 150px */

  ${props => props.removeOnMedia && css`
    @media ${props.theme.media[props.removeOnMedia]} {
      padding: 0;
    }
  `}
`

const Padder = ({ innerPadding = '150px', removeOnMedia, children }) => {
  return (
    <Root innerPadding={innerPadding} removeOnMedia={removeOnMedia}>
      {children}
    </Root>
  )
}

Padder.propTypes = {
  innerPadding: PropTypes.string,
  children: PropTypes.any,
  removeOnMedia: PropTypes.string
}

export default Padder
