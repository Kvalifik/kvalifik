import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from 'Blocks/Container'
import Skewer from 'Blocks/Skewer'
import Padder from 'Blocks/Padder'

import ToolBoxSlider from './ToolBoxSlider'
import ToolBoxContent from './ToolBoxContent'

import svg from 'graphics/skills.svg'
import svg2 from 'graphics/skills2.svg'
import svg3 from 'graphics/skills3.svg'
import Button from 'Blocks/Button'

const Root = styled.div`
  background-color: ${props => props.bgColor};
`

const tools = [
  {
    headline: 'A tool1',
    desc: 'more about the tool...',
    icon: svg
  },
  {
    headline: 'A second tool',
    desc: 'more about the tool...',
    icon: svg2
  },
  {
    headline: 'A tool',
    desc: 'more about the tool...',
    icon: svg3
  },
  {
    headline: 'A tool',
    desc: 'more about the tool...',
    icon: svg
  },
  {
    headline: 'A tool',
    desc: 'more about the tool...',
    icon: svg3
  },
  {
    headline: 'A tool',
    desc: 'more about the tool...',
    icon: svg
  }
]

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${props => props.theme.spacing(2)};
`

export class Toolbox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      chosenTool: 2,
      fadeIn: true
    }
  }

  changeFadeState (action) {
    this.setState({ fadeIn: false })
    setTimeout(() => {
      action()
      this.setState({ fadeIn: true })
    }, 50)
  }

  chooseTool (chosen) {
    this.changeFadeState(() => {
      this.setState({ chosenTool: chosen })
    })
  }

  clamp (value, min, max) {
    return Math.max(min, Math.min(value, max))
  }

  slideTool (direction) {
    this.changeFadeState(() => {
      this.setState({ chosenTool: this.clamp(this.state.chosenTool + direction, 0, tools.length - 1) })
    })
  }

  render () {
    return (
      <Root>
        <Skewer bgColor={'#1D1D1D'}>
          <Padder>
            <Container sideText={'Toolbox'} >
              <ToolBoxContent tools={tools} chosenTool={this.state.chosenTool} fadeIn={this.state.fadeIn} />
              <ToolBoxSlider tools={tools} chooseTool={this.chooseTool.bind(this)} chosenTool={this.state.chosenTool} slideTool={this.slideTool.bind(this)} />
            </Container>
            <ButtonWrapper>
              <Button>See all of our tools</Button>
            </ButtonWrapper>
          </Padder>
        </Skewer>
      </Root>
    )
  }
}

Toolbox.protoTypes = {
  children: PropTypes.any
}

export default Toolbox
