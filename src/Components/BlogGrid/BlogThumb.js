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

const PublishedAt = styled.div`
  position: absolute;
  bottom: 0;
  transform: rotate(-90deg);
  transform-origin: 0% 0%;
  left: 10px;
  font-size: 10px;

  @media ${props => props.theme.media.lg} {
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
  background-image: url(
    ${props =>
      props.src + props.theme.imgScale[props.fullWidth ? 'md' : 'sm']}
  );
  transform: scale(1.001);
`

const Header = styled.div`
  display: grid;
  align-content: center;
  margin: 0 calc(15px * 2.5);

  
`

const Headline = styled.h3`
    font-size: ${props => props.full ? '30px' : '18px'};
    margin-bottom: 0;
    @media ${props => props.theme.media.lg} {
        font-size: initial;
      }
`


const Author = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4rem;
`


const BlogThumb = ({
  name,
  author,
  date,
  description,
  bgColor,
  bgUrl,
  fullWidth,
  workUrl
}) => {
  const body = (
    <Content>
      <Desc color={bgColor}>
        <Arrow src={arrowImg} alt="arrow" />
        <PublishedAt>{ date }</PublishedAt>
        <Header full={fullWidth}>
            <Headline full={fullWidth} dangerouslySetInnerHTML={{ __html: description }}/>
            <Author>Written by: <br/><strong>{author.name}</strong>, {author.jobTitle}</Author>
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

BlogThumb.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
  fullWidth: PropTypes.bool,
  bgUrl: PropTypes.string,
  workUrl: PropTypes.string
}

export default BlogThumb
