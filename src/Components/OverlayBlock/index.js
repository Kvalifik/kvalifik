import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from 'Blocks/Container'
import Skewer from 'Blocks/Skewer'
import Padder from 'Blocks/Padder'
import testImg from 'graphics/test.jpeg'

const Bg = styled.div`
  background: url(${testImg});
  background-position: center;
  background-size: cover;
`

const Header = styled.h2`
  /* font-size:  */
`

const OverlayBlock = props => {
  return (
    <Skewer noPadding>
      <Bg>
        <Padder>
          <Skewer bgColor="#FF5477DD" half>
            <Container>
              <Header>
                {props.header}
              </Header>
              {props.children}
            </Container>
          </Skewer>
        </Padder>
      </Bg>
    </Skewer>
  )
}

OverlayBlock.propTypes = {
  children: PropTypes.any,
  header: PropTypes.string
}

export default OverlayBlock
