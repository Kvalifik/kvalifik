import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import arrowImg from 'graphics/arrow.svg'

const Root = styled.div`
  overflow: hidden;

  > * {
    opacity: 0;
    transform: translateY(-20%);
    ${props => props.fadeIn && css`
      transition: 0.5s 0s cubic-bezier(0, 0, 0.04, 1);
      transform: translateY(0%);
      opacity: 1;
    `}
  }

  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  background-color: rgba(255, 255, 255, 0.1);
  margin: ${props => props.theme.spacing(2)};
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

  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0;
    margin: ${props => props.theme.spacing(4)};
    justify-self: center;
    align-self: center;
    width: 60%;
  }
`

const Text = styled.div`
  position: relative;
  margin: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(4)};

  ${props => props.theme.media.lg`
    grid-column: 1 / -1;
  `}
`

const Link = styled.a`
  display: none; /* Temporary */
  position: absolute;
  bottom: 0;
  color: white;
  text-decoration: none;
  right: 0;
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
  color: #49eaac;
`

const ToolBoxContent = ({
  tools,
  chosenTool,
  bgImageUrl,
  fadeIn
}) => {
  const tool = tools[chosenTool]
  return (
    <Root fadeIn={fadeIn}>
      <Icon src={tool.icon} />
      <Img src={bgImageUrl} />
      <Text>
        <Headline>
          { tool.headline }
        </Headline>
        <Description dangerouslySetInnerHTML={{ __html: tool.description }} />
        <Link href="/" >Learn how to do it <Arrow src={arrowImg} /></Link>
      </Text>
    </Root>
  )
}

ToolBoxContent.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string
  })),
  chosenTool: PropTypes.int,
  fadeIn: PropTypes.bool,
  bgImageUrl: PropTypes.string
}

export default ToolBoxContent
