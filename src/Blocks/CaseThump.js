import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import arrowImg from '../graphics/arrow.svg'
import bg from '../graphics/test.jpeg'

const Root = styled.div`
  align-self: center;
  height: 250px;
  background-color: rgb(255, 233, 163);
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  ${props => props.full ? `
    @media only screen and (min-width : $lg) {
      grid-column: 1 / -1;
      height: 350px;
      background-color: rgb(163, 255, 200);
      .desc{
        .head-desc{
          h3{
            font-size: 30px;
          }
        }
      }
    } 
  ` : ''}

  &:hover{
    transform: scale(1.012);
  }

  @media only screen and (max-width : $sm) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    grid-auto-flow: dense;
    height: 400px;
  }
`

const Desc = styled.div`
  display: flex;
  position: relative;
  @media only screen and (max-width : ${props => props.theme.breakpoints.sm} ){
    grid-row: 2 / 2;
  }
`

const ProjectName = styled.div`
  @media only screen and (max-width : ${props => props.theme.breakpoints.sm} ) {
    width: 50%;
    font-size: 4vw;
  }
`

const Arrow = styled.img`
  position: absolute;
  z-index: 10;
  height: 15px;
  right: 15px;
  bottom: 15px;
`

const Img = styled.div`
  background: rgb(255, 83, 83);
  background-position: 50% 50%;
  background-size: 100%;
`

export default function CaseThump (props) {
  return (
    <Root>
      <Desc>
        <Arrow src={arrowImg} alt="arrow" />
        <ProjectName>
          {props.name}
        </ProjectName>
        <div className="head-desc">
          <h3>
            {props.desc}
          </h3>
        </div>
      </Desc>
      <Img style={{ backgroundImage: `url(${bg})` }} />
    </Root>
  )
}

CaseThump.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  // image: PropTypes.isRequired, // not sure of prop type yet. (string or node maybe)
  // desc: PropTypes.string.isRequired,
}
