import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  position: fixed;
  margin: auto;
  height: 500px;
  width: 800px;
`

const NoIe = props => {
  return (
    <Root>
      Hey
    </Root>
  )
}

NoIe.propTypes = {

}

export default NoIe
