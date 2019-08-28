import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import arrowImg from 'graphics/arrow.svg'

const Root = styled.div`
  align-self: center;
  background-color: ${props => props.color || props.theme.palette.primary.C};
  width: 100%;
  height: 250px;
  color: ${props => props.theme.palette.dark};

  & > a {
    text-decoration: none;
    color: ${props => props.theme.palette.dark};
  }

  transform-origin: center;
  transition: 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);

  &:hover {
    transform: scale(0.98);
  }

  ${props => props.full && css`
    grid-column: 1 / -1;
    height: 350px;

    @media ${props => props.theme.media.lg} {
      height: 250px;
    }
  `}

  @media ${props => props.theme.media.sm} {
    height: 400px;
  }
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: ${props => props.theme.palette.dark};

  @media ${props => props.theme.media.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    grid-auto-flow: dense;
  }
`

const Desc = styled.div`
  display: flex;
  position: relative;

  @media ${props => props.theme.media.sm} {
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

  @media ${props => props.theme.media.xs} {
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
  font-size: ${props => props.full ? '30px' : '15px'};

  @media ${props => props.theme.media.lg} {
    font-size: initial;
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
  const body = (
    <Content>
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
    </Content>
  )

  return (
    <Root full={fullWidth} color={bgColor}>
      {workUrl ? (
        <Link to={workUrl}>
          {body}
        </Link>
      ) : body}
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
