import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import arrowImg from '../graphics/arrow.svg'

const Root = styled.div`
  align-self: center;
  height: 250px;
  background-color: ${props => props.color || 'rgb(255, 233, 163)'};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  ${props => props.full ? css`
    grid-column: 1 / -1;
    @media only screen and (min-width : ${props => props.theme.breakpoints.lg} ) {
      height: 350px;
    }
  ` : ''}

  &:hover{
    transform: scale(1.012);
  }

  @media only screen and (max-width : ${props => props.theme.breakpoints.sm} ) {
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
  position: absolute;
  bottom: 0px;
  transform: rotate(-90deg);
  transform-origin: 0% 0%;
  left: 10px;
  font-size: 13px;
  @media only screen and (max-width : ${props => props.theme.breakpoints.xs} ) {
    width: 50%;
    /* font-size: 4vw; */
  }
`

const Arrow = styled.img`
  position: absolute;
  z-index: 10;
  height: 15px;
  right: 15px;
  bottom: 15px;
  margin:0 !important;
`

const Img = styled.div`
  background: rgb(255, 83, 83);
  background-position: 50% 50%;
  background-size: cover;
`

const Header = styled.div`
  display: grid;
  align-content: center;
`

const H3 = styled.h3`
  margin: 0 calc(15px * 2.5);
  @media only screen and (min-width : ${props => props.theme.breakpoints.lg} ) {
    font-size: ${props => props.full ? '30px' : '15px'};
  }
`

export default function CaseThump (props) {
  return (
    <Root full={props.full} color={props.color}>
      <Desc>
        <Arrow src={arrowImg} alt="arrow" />
        <ProjectName>
          {props.name}
        </ProjectName>
        <Header className="head-desc">
          <H3 full={props.full}>
            {props.desc}
          </H3>
        </Header>
      </Desc>
      <Img style={{ backgroundImage: `url(${props.bg})` }} />
    </Root>
  )
}

CaseThump.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  full: PropTypes.bool,
  bg: PropTypes.any // not sure of prop type yet. (string or node maybe)
}
