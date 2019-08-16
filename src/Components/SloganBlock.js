import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Padder from 'Blocks/Padder'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
  color: ${props => props.theme.palette.light};
  height: 80vh;

  p {
    margin: ${props => props.theme.spacing(0.5)};
    text-align: center;
  }

  strong {
    color: ${props => props.theme.palette.dark};
    font-weight: 700;
  }

  ${props => props.theme.media.md`
    font-size: 35px;
  `}
`

const SloganBlock = ({
  bgColor,
  content
}) => (
  <Skewer bgColor={bgColor}>
    <Container overflowLeft overflowRight>
      <Padder>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </Padder>
    </Container>
  </Skewer>
)

SloganBlock.propTypes = {
  bgColor: PropTypes.string,
  content: PropTypes.string
}

export default SloganBlock
