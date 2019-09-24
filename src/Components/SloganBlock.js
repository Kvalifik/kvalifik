import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'
import Padder from 'Components/Shared/Padder'

const Root = styled.div`
  &::after {
    clear: both;
    display: table;
    content: "";
  }
`

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

  @media ${props => props.theme.media.md} {
    font-size: 35px;
  }
`

const SloganBlock = ({
  bgColor,
  content
}) => (
  <Root>
    <Skewer bgColor={bgColor || 'transparent'} layer={1200}>
      <Container overflowLeft overflowRight>
        <Padder>
          <Content dangerouslySetInnerHTML={{ __html: content }} />
        </Padder>
      </Container>
    </Skewer>
  </Root>
)

SloganBlock.propTypes = {
  bgColor: PropTypes.string,
  content: PropTypes.string
}

export default SloganBlock
