import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  padding: ${props => props.innerPadding} 0; /* Either use defined innerPadding or default 150px */
`

const Padder = ({ innerPadding = '150px', children }) => {
  return (
    <Root innerPadding={innerPadding}>
      {children}
    </Root>
  )
}

Padder.propTypes = {
  innerPadding: PropTypes.string,
  children: PropTypes.any
}

export default Padder
