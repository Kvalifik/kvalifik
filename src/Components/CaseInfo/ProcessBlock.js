import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Label = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.8em;
  grid-area: label;
`

const Root = styled.div`
  display: grid;
  grid-template-areas: "block-one block-two block-three";
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${props => props.theme.spacing(5)};
  background-color: ${props => props.theme.palette.dark};

  @media ${props => props.theme.media.lg} {
    grid-template-areas:
      "block-one"
      "block-two"
      "block-three";
    grid-template-columns: 1fr;
  }

  & ${Label} {
    color: ${props => props.color};
  }
`

const Block = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "label" "title" "content";
  grid-area: block-${props => props.name};
`

const Title = styled.h2`
  font-size: 24px;
  margin: 0 0 ${props => props.theme.spacing(2)};
  color: ${props => props.theme.palette.light};
  font-weight: bold;
  line-height: 1.25em;
  grid-area: title;
`

const Description = styled.div`
  font-size: 14px;
  color: ${props => props.theme.palette.light};
  line-height: 1.3em;
  block-area: content;
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
  descriptionThree,
  color
}) => (
  <Root color={color}>
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
  descriptionThree: PropTypes.string,
  color: PropTypes.string
}

export default ProcessBlock
