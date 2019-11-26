import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import arrowImg from 'graphics/arrow.svg'

const Root = styled.div`
  align-self: center;
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
    transform: scale(1.02);
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
  overflow: hidden;

  @media ${props => props.theme.media.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    grid-auto-flow: dense;
  }
`

const Desc = styled.div`
  display: flex;
  position: relative;
  background-color: ${props => props.color || props.theme.palette.primary.C};

  @media ${props => props.theme.media.sm} {
    grid-row: 2 / 2;
  }
`

const ProjectName = styled.div`
  font-size: 14px;
  @media ${props => props.theme.media.lg} {
    padding-top: ${props => props.theme.spacing(2.5)};
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
  background-image: url(
    ${props =>
      props.src + props.theme.imgScale[props.fullWidth ? 'md' : 'sm']}
  );
  transform: scale(1.001);
`

const Description = styled.div`
  font-size: ${props => props.full ? '30px' : '18px'};
  & > * {
    margin-top: ${props => props.theme.spacing(1)};
    margin-bottom: 0;
  }
  @media ${props => props.theme.media.lg} {
    font-size: initial;
    & > p {
      margin-bottom: ${props => props.theme.spacing(1)};
    }
  }
`

const Header = styled.h3`
  display: grid;
  align-content: center;
  margin: 0 calc(15px * 2.5);
`

const Logo = styled.img`
  max-height: ${props => props.full ? '55px' : '35px'};
  @media ${props => props.theme.media.sm} {
    max-height: ${props => props.theme.spacing(5)};
  }
`
const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  @media ${props => props.theme.media.lg} {
    padding-top: ${props => props.theme.spacing(2.5)};
  }
`

const CaseThumb = ({
  name,
  logo,
  description,
  bgColor,
  bgUrl,
  fullWidth,
  workUrl
}) => {
  const logoOrText = logo != null ? (
    <LogoWrapper>
      <Logo full={fullWidth} src={logo.url} alt={logo.alt} />
    </LogoWrapper>
  ) : (
    <ProjectName>{name}</ProjectName>
  )

  const body = (
    <Content>
      <Desc color={bgColor}>
        <Arrow src={arrowImg} alt="arrow" />
        <Header>
          {logoOrText}
          <Description full={fullWidth} dangerouslySetInnerHTML={{ __html: description }} />
        </Header>
      </Desc>
      <Img src={bgUrl} fullWidth={fullWidth} />
    </Content>
  )

  return (
    <Root full={fullWidth}>
      {workUrl ? (
        <Link to={workUrl}>
          {body}
        </Link>
      ) : body}
    </Root>
  )
}

CaseThumb.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
  fullWidth: PropTypes.bool,
  bgUrl: PropTypes.string,
  workUrl: PropTypes.string,
  logo: PropTypes.string
}

export default CaseThumb
