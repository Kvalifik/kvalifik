import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Container from 'Blocks/Container'

const Root = styled.div`
  display: grid;
  grid-template-areas: "block-one block-two block-three";
  grid-gap: ${props => props.theme.spacing(5)};
  background-color: ${props => props.theme.palette.dark};

  ${props => props.theme.media.lg`
    grid-template-areas:
      "block-one"
      "block-two"
      "block-three";
  `}
`

const Block = styled.div`
  grid-area: block-${props => props.name};
`

const Label = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  color: ${props => props.theme.palette.primary.A};
  line-height: 1.8em;
`

const Title = styled.h4`
  font-size: 24px;
  margin: 0 0 ${props => props.theme.spacing(2)};
  color: ${props => props.theme.palette.light};
  font-weight: bold;
  line-height: 1.25em;
`

const Description = styled.p`
  font-size: 14px;
  color: ${props => props.theme.palette.light};
  line-height: 1.3em;
`

const ProcessBlock = ({
  labelOne,
  titleOne,
  descriptionOne,
  labelTwo,
  titleTwo,
  descriptionTwo,
  labelThree,
  titleThree,
  descriptionThree
}) => (
  <Container>
    <Root>
      <Block name="one">
        <Label>{labelOne}</Label>
        <Title>{titleOne}</Title>
        <Description dangerouslySetInnerHTML={{ __html: descriptionOne }} />
      </Block>
      <Block name="two">
        <Label>{labelTwo}</Label>
        <Title>{titleTwo}</Title>
        <Description dangerouslySetInnerHTML={{ __html: descriptionTwo }} />
      </Block>
      <Block name="three">
        <Label>{labelThree}</Label>
        <Title>{titleThree}</Title>
        <Description dangerouslySetInnerHTML={{ __html: descriptionThree }} />
      </Block>
    </Root>
  </Container>

)

ProcessBlock.propTypes = {
  labelOne: PropTypes.string,
  titleOne: PropTypes.string,
  descriptionOne: PropTypes.string,
  labelTwo: PropTypes.string,
  titleTwo: PropTypes.string,
  descriptionTwo: PropTypes.string,
  labelThree: PropTypes.string,
  titleThree: PropTypes.string,
  descriptionThree: PropTypes.string
}

export default ProcessBlock
