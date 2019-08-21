import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import bg from 'graphics/test3.jpeg'
import arrowImg from 'graphics/arrow.svg'

const Root = styled.div`
  overflow:hidden;

  > * {
    opacity: 0;
    /* transition: opacity 0.1s ease-in; */
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
  background-image: url(${props => props.bg});
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

  @media only screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-column: 1 / -1;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    color: #49eaac;
  }
`

const Link = styled.a`
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

const ToolBoxContent = props => {
  const tool = props.tools[props.chosenTool]
  console.log({ innerFde: props.fadeIn })
  return (
    <Root fadeIn={props.fadeIn}>
      <Icon src={tool.icon} />
      <Img bg={bg} />
      <Text>
        <h2>
          { tool.headline }
        </h2>
        <h3>
          { tool.desc }
        </h3>
        <Link href="/" >Learn how to do it <Arrow src={arrowImg} /></Link>
      </Text>
    </Root>
  )
}

ToolBoxContent.propTypes = {
  tools: PropTypes.array,
  chosenTool: PropTypes.int,
  fadeIn: PropTypes.bool
}

export default ToolBoxContent
