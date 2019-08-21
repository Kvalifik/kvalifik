import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import arrowImg from 'graphics/arrow.svg'

const Root = styled.a`
  align-self: center;
  height: 250px;
  background-color: ${props => props.color || props.theme.palette.primary.C};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-decoration: none;
  color: ${props => props.theme.palette.dark};

  ${props => props.full && css`
    grid-column: 1 / -1;

    @media only screen and (min-width: ${props => props.theme.breakpoints.lg}) {
      height: 350px;
    }
  `}

  cursor: pointer;
  transform-origin: center;
  transition: 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);

  &:hover {
    transform: scale(0.98);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    grid-auto-flow: dense;
    height: 400px;
  }
`

const Desc = styled.div`
  display: flex;
  position: relative;

  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-row: 2 / 2;
  }
`

const ProjectName = styled.div`
  position: absolute;
  bottom: 0;
  transform: rotate(-90deg);
  transform-origin: 0% 0%;
  left: 10px;
  font-size: 13px;

  @media only screen and (max-width: ${props => props.theme.breakpoints.xs}) {
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

  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: ${props => props.full ? '30px' : '15px'};
  }
`

const CaseThump = ({
  name,
  description,
  bgColor,
  bgUrl,
  fullWidth,
  workUrl
}) => {
  return (
    <Root full={fullWidth} color={bgColor} href={workUrl}>
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
  name: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
  fullWidth: PropTypes.bool,
  bgUrl: PropTypes.string,
  workUrl: PropTypes.string
}

export default CaseThump
