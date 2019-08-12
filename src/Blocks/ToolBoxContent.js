import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import svg from 'graphics/skills.svg'
import bg from 'graphics/test3.jpeg'
import arrowImg from 'graphics/arrow.svg'

const Root = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  background-color: rgba(255, 255, 255, .1);
`

const Img = styled.img`
  margin:0;
  grid-column: 2 / -1;
  @media only screen and (max-width : ${props => props.theme.breakpoints.md} ) {
  }
  grid-row: 1 / -1;
  background-image: url('${props => props.bg}');
  background-origin: 50% 50%;
  background-size: cover;
`

const Icon = styled.img`
  padding: ${props => props.theme.spacing(4)};
  @media only screen and (max-width : ${props => props.theme.breakpoints.md} ) {
    width: 100%;
  }
`

const Text = styled.div`
  position:relative;
  margin: ${props => props.theme.spacing(4)};
  padding-bottom: ${props => props.theme.spacing(4)};
  @media only screen and (max-width : ${props => props.theme.breakpoints.md} ) {
    grid-column: 1 / -1;
  }
  h2{
    font-size: 25px;
  }
  h3{
    color: #49EAAC;
  }
`

const Link = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`

const Arrow = styled.img`
  margin: 0;
  height: 15px;
  filter: invert(100%);
  padding: 0 0 0 ${props => props.theme.spacing(1)};
  transform: translateY(20%);
`

const ToolBoxContent = props => {
  return (
    <Root>
      <Icon src={svg} />
      <Img bg={bg} />
      <Text>
        <h2>
          Negative brainstorming
        </h2>
        <h3>
          WHAT IS IT
        </h3>
        {props.project}
        <Link>Learn how to do it <Arrow src={arrowImg} /></Link>
      </Text>
    </Root>
  )
}

ToolBoxContent.propTypes = {
  project: PropTypes.any
}

export default ToolBoxContent
