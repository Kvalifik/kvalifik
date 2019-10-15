import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Label = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.8em;
`

const Root = styled.div`
  display: grid;
  grid-template-areas: "block-one-header block-two-header block-three-header"
    "block-one-content block-two-content block-three-content";
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0 ${props => props.theme.spacing(5)};
  background-color: ${props => props.theme.palette.dark};

  @media ${props => props.theme.media.lg} {
    grid-template-areas:
      "block-one-header"
      "block-one-content"
      "block-two-header"
      "block-two-content"
      "block-three-header"
      "block-three-content";
    grid-template-columns: 1fr;
  }

  & ${Label} {
    color: ${props => props.color};
  }
`

const Header = styled.div`
  grid-area: block-${props => props.name}-header;
  margin-top: ${props => props.theme.spacing(2)};
`

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  color: ${props => props.theme.palette.light};
  font-weight: bold;
  line-height: 1.25em;
`

const Description = styled.div`
  font-size: 14px;
  color: ${props => props.theme.palette.light};
  line-height: 1.3em;

  // eslint-disable-next-line
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
    <Header name="one">
      <Label>{labelOne}</Label>
      <Title>{titleOne}</Title>
    </Header>
    <Description name="one" dangerouslySetInnerHTML={{ __html: descriptionOne }} />

    <Header name="two">
      <Label>{labelOne}</Label>
      <Title>{titleOne}</Title>
    </Header>
    <Description name="two" dangerouslySetInnerHTML={{ __html: descriptionTwo }} />

    <Header name="three">
      <Label>{labelOne}</Label>
      <Title>{titleOne}</Title>
    </Header>
    <Description name="three" dangerouslySetInnerHTML={{ __html: descriptionThree }} />
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
