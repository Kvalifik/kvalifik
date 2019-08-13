import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import svg from 'graphics/skills.svg'

const Root = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  @media only screen and (max-width: ${props => props.theme.breakpoints.lg} ) {
    color: red ;
    grid-template-columns: 2% 1fr 2%;
  }
`

const Slider = styled.div`
  padding: ${props => props.theme.spacing(4)} 0;
  grid-gap: ${props => props.theme.spacing(6)};
  @media only screen and (max-width: ${props => props.theme.breakpoints.sm} ) {
    grid-gap: ${props => props.theme.spacing(2)};
  
  }
  grid-column: 2 / 3;
  display: grid;
  grid-auto-flow: column;
`

const SliderElement = styled.div`  
  cursor: pointer !important;
  padding: 0;
  padding-bottom: ${props => props.theme.spacing(1.5)};
  width: 100%;
  text-align: center;
  position: relative;
  transform-origin: center;
  transition: .4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  transition-delay: 0;
  :hover{
    transform: scale(0.95);
    &::after{
      height: ${props => props.theme.spacing(0.5) * 2};
    }
  }
  ${props => props.chosen ? css`
    transform: scale(1.1) !important;
    ::after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width:100%;
      background: #49EAAC;
      height: ${props => props.theme.spacing(0.5)};
    }
    ` : ''}

`

const Img = styled.img`
  margin: 0;
  width: 50%;
  @media only screen and (max-width: ${props => props.theme.breakpoints.md} ) {
    width: 100%;
  }
  max-width: 50px;
`

const ToolBoxSlider = props => {
  return (
    <Root>
      <Slider>
        {
          props.tools.map((tool, i) => {
            return (
              <SliderElement
                onClick={props.chooseTool.bind(this, i)}
                key={i}
                chosen={(props.chosenTool === i)}>
                <Img src={props.tools[i].icon}
                />
              </SliderElement>
            )
          })
        }
      </Slider>
    </Root>
  )
}

ToolBoxSlider.propTypes = {
  tools: PropTypes.array,
  chosenTool: PropTypes.any,
  chooseTool:PropTypes.any
}

export default ToolBoxSlider
