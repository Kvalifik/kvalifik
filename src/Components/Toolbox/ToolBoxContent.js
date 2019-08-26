import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import arrowImg from 'graphics/arrow.svg'

const Root = styled.div`
  overflow: hidden;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  background-color: rgba(255, 255, 255, 0.1);
  margin: ${props => props.theme.spacing(2)};

  & > * {
    opacity: 0;
    transform: translateY(-20%);
    transition: 0.5s 0s cubic-bezier(0, 0, 0.04, 1);
    ${props => props.fadeIn && css`
      transform: translateY(0%);
      opacity: 1;
    `}
  }
`

const Img = styled.div`
  margin: 0;
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  background-image: url(${props => props.src});
  background-position: 50% 50%;
  background-size: cover;
`

const Icon = styled.img`
  padding: ${props => props.theme.spacing(4)};
  width: 150px;

  ${props => props.theme.media.sm`
    padding: 0;
    margin: ${props => props.theme.spacing(4)};
    justify-self: center;
    align-self: center;
    width: 60%;
  `}
`

const Text = styled.div`
  position: relative;
  margin: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(4)};

  ${props => props.theme.media.lg`
    grid-column: 1 / -1;
  `}
`

const LinkWrapper = styled.div`
  a {
    display: none; /* Temporary */
    position: absolute;
    bottom: 0;
    color: white;
    text-decoration: none;
    right: 0;
  }
`

const Arrow = styled.img`
  margin: 0;
  height: 15px;
  filter: invert(100%);
  padding-left: ${props => props.theme.spacing(1)};
  transform: translateY(20%);
`

const Headline = styled.h2`
  font-size: 25px;
`

const Description = styled.h3`
  color: ${props => props.theme.palette.primary.D};
`

const ToolBoxContent = ({
  tools,
  chosenTool,
  fadeIn
}) => {
  const tool = tools[chosenTool]
  return (
    <Root fadeIn={fadeIn}>
      <Icon src={tool.icon.url} />
      <Img src={tool.image.url} />
      <Text>
        <Headline>{tool.headline}</Headline>
        <Description dangerouslySetInnerHTML={{ __html: tool.description }} />
        <LinkWrapper>
          <Link to="/">Learn how to do it <Arrow src={arrowImg} /></Link>
        </LinkWrapper>
      </Text>
    </Root>
  )
}

ToolBoxContent.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    }),
    image: PropTypes.shape({
      url: PropTypes.string
    })
  })),
  chosenTool: PropTypes.number,
  fadeIn: PropTypes.bool
}

export default ToolBoxContent
