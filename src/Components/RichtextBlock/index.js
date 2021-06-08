import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from 'Components/Shared/Container'
import Skewer from 'Components/Shared/Skewer'

const Root = styled.div`
  &::after {
    clear: both;
    display: table;
    content: "";
  }
`

const Content = styled.div`
  font-size: 16px;
  color: ${props => props.textColor};
  padding: ${props => props.theme.spacing(5, 2)};
  width: 80%;
  max-width: 75ch;
  margin: 0 auto;

  p {
    margin: ${props => props.theme.spacing(0.5)}; 
  }

  strong {
    color: ${props => props.theme.palette.dark};
    font-weight: 700;
  }
`

const RichtextBlock = ({
  text,
  bgColor,
  textColor
}) => (
  <Root>
    <Skewer bgColor={bgColor.hex} layer={1200}>
      <Container overflowLeft overflowRight>
        <Content textColor={textColor.hex} dangerouslySetInnerHTML={{ __html: text }} />
      </Container>
    </Skewer>
  </Root>
)

RichtextBlock.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  text: PropTypes.string
}

export default RichtextBlock
