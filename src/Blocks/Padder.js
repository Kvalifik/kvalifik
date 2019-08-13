import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  padding: ${props => props.innerPadding || '150px'} 0; /* Either use defined innerPadding or default 150px */
`

const Padder = (props) => {
  return (
    <Root innerPadding={props.innerPadding}>
      {props.children}
    </Root>
  )
}

Padder.propTypes = {
  innerPadding: PropTypes.number,
  children: PropTypes.any
}

export default Padder
