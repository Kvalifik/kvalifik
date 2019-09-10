import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Padder from 'Blocks/Padder'

const Root = styled.div`
  display: grid;
`

const Left = styled.div`

`

const Right = styled.div`

`

const FiftyFifty = (props) => {
  const {
    description,
    flip,
    header,
    mediaUrl
  } = props

  return (
    <Root>
      <Skewer bgColor='blue'>
        <Container>
          <Padder>
            {description}
          </Padder>
        </Container>
      </Skewer>
    </Root>
  )
}

FiftyFifty.propTypes = {
  description: PropTypes.any,
  flip: PropTypes.any,
  header: PropTypes.any,
  mediaUrl: PropTypes.any
}

export default FiftyFifty
