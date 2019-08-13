import React from 'react'
import styled from 'styled-components'

import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Padder from 'Blocks/Padder'

const Content = styled.div`
  color: ${props => props.theme.palette.white};

  & > strong {
    color: ${props => props.theme.palette.dark};
  }
`

const SloganBlock = ({
  bgColor,
  children
}) => (
  <Skewer bgColor={bgColor}>
    <Container>
      <Padder>
        <Content>
          {children}
        </Content>
      </Padder>
    </Container>
  </Skewer>
)
