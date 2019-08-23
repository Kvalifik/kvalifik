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

export class Toolbox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      chosenTool: 2
    }
  }

  chooseTool (chosen) {
    console.log({ chosen })
    this.setState({ chosenTool: chosen })
  }

  render () {
    return (
      <Root>
        <Skewer bgColor={'#1D1D1D'} layer={1200}>
          <Padder>
            <Container sideText={'Toolbox'} >
              <ToolBoxContent tools={tools} chosenTool={this.state.chosenTool} />
              <ToolBoxSlider tools={tools} chooseTool={this.chooseTool.bind(this)} chosenTool={this.state.chosenTool} />
            </Container>
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
