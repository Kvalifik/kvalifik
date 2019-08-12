import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from 'Blocks/Container'
import Skewer from 'Blocks/Skewer'
import Padder from 'Blocks/Padder'

const Root = styled.div`
  background-color: ${props => props.bgColor};
`

// rafcp
const Toolbox = (props) => {
  return (
    <Root>
      <Skewer bgColor={'#1D1D1D'}>
        <Padder>
          <Container sideText={'Toolbox'} >
            {props.children}
          </Container>
        </Padder>
      </Skewer>
    </Root>
  )
}

Toolbox.propTypes = {
  children: PropTypes.any
}

export default Toolbox
