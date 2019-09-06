import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import leftArrow from 'graphics/leftArrow.svg'

const Root = styled.div`
  color: white;
  display: grid;
  grid-template-columns: auto auto auto;

  @media ${props => props.theme.media.md} {
    color: red;
    grid-template-columns: 2% 1fr 2%;
  }
  margin: ${props => props.theme.spacing(2)};
`

const Slider = styled.div`
  padding: ${props => props.theme.spacing(4)} 0;
  grid-gap: ${props => props.theme.spacing(6)};
  grid-column: 2 / 3;
  display: grid;
  grid-auto-flow: column;

  @media ${props => props.theme.media.md} {
    grid-gap: 0;
  }
`

const SliderElement = styled.div`
  display: grid;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  padding-bottom: ${props => props.theme.spacing(1.5)};
  width: 100%;
  text-align: center;
  position: relative;
  transform-origin: center;
  transition: 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  transition-delay: 0;

  @media ${props => props.theme.media.md} {
    grid-gap: 0;
    max-width: 100px;
    display: none;
  }
  ${props => (props.arrow || props.chosen) && css`
    @media ${props => props.theme.media.md} {
      display: block;
      justify-self:center;
    }
  `}

  &:hover {
    transform: scale(0.95);

    &::after {
      height: ${props => props.theme.spacing(0.5) * 2};
    }
  }

  ::after {
    transition: 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
    content: "";
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0;
    background: #49eaac;
    height: ${props => props.theme.spacing(0.5)};
  }
  ${props => props.chosen && css`
    transform: scale(1.1) !important;
    ::after{
      content: "";
      width:100%;
      background: #49EAAC;
      height: ${props => props.theme.spacing(0.5)};
      opacity: 1;
    }
    `}
`

const Img = styled.img`
  justify-self: center;
  align-self: center;
  margin: 0;
  height: 35px;
  ${props => props.arrow && css`
    height: 25px;
  `}

  ${props => props.reverse && css`
    transform: rotate(180deg);
  `}

  @media ${props => props.theme.media.md} {
    width: 60%;

    ${props => props.arrow && css`
      max-height: 20px;
    `}
  }
`

const ToolBoxSlider = ({
  onSlideTool,
  onChooseTool,
  tools,
  chosenTool
}) => (
  <Root>
    <Slider>
      <SliderElement arrow onClick={() => onSlideTool(-1)}>
        <Img src={leftArrow} arrow />
      </SliderElement>
      {tools.map((tool, i) => (
        <SliderElement
          onClick={() => onChooseTool(i)}
          key={tool.id}
          chosen={(chosenTool === i)}
        >
          <Img src={tools[i].icon.url} />
        </SliderElement>
      ))}
      <SliderElement arrow onClick={() => onSlideTool(1)}>
        <Img src={leftArrow} reverse arrow />
      </SliderElement>
    </Slider>
  </Root>
)

ToolBoxSlider.propTypes = {
  tools: PropTypes.array,
  chosenTool: PropTypes.any,
  onChooseTool: PropTypes.any,
  onSlideTool: PropTypes.any
}

export default ToolBoxSlider
