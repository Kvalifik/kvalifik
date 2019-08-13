import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import arrowImg from 'graphics/arrow.svg'

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
  ` : ''};

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
  }
`

const Arrow = styled.img`
  position: absolute;
  z-index: 10;
  height: 15px;
  right: 15px;
  bottom: 15px;
  margin: 0;
`

const Img = styled.div`
  background-position: 50% 50%;
  background-size: cover;
  background-image: url(${props => props.src});
`

const Header = styled.h3`
  display: grid;
  align-content: center;
  margin: 0 calc(15px * 2.5);
  @media only screen and (min-width : ${props => props.theme.breakpoints.lg} ) {
    font-size: ${props => props.full ? '30px' : '15px'};
  }
`

const CaseThump = ({
  name,
  description,
  bgColor,
  bgUrl,
  fullWidth
}) => {
  return (
    <Root full={fullWidth} color={bgColor}>
      <Desc>
        <Arrow src={arrowImg} alt="arrow" />
        <ProjectName>
          {name}
        </ProjectName>
        <Header full={fullWidth}>
          {description}
        </Header>
      </Desc>
      <Img src={bgUrl} />
    </Root>
  )
}

CaseThump.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  bgUrl: PropTypes.string
}

export default CaseThump
