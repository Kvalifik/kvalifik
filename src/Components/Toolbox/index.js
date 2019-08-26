import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from 'Blocks/Container'
import Skewer from 'Blocks/Skewer'
import Padder from 'Blocks/Padder'

import ToolBoxSlider from './ToolBoxSlider'
import ToolBoxContent from './ToolBoxContent'
import Console from './Console'

const Root = styled.div`
  background-color: ${props => props.bgColor};
`

class Toolbox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      chosenTool: 0,
      fadeIn: true
    }
  }

  changeFadeState (callback) {
    this.setState({ fadeIn: false })

    setTimeout(() => {
      callback()
      this.setState({ fadeIn: true })
    }, 50)
  }

  chooseTool (chosen) {
    this.changeFadeState(() => {
      this.setState({ chosenTool: chosen })
    })
  }

  loop (value, min, max) {
    if (value > max) {
      value = min
    } else if (value < min) {
      value = max
    }
    return value
  }

  slideTool (direction) {
    const { tools } = this.props

    this.changeFadeState(() => {
      this.setState({
        chosenTool: this.loop(
          this.state.chosenTool + direction,
          0,
          tools.length - 1
        )
      })
    })
  }

  render () {
    const {
      tools,
      bgColor
    } = this.props

    return (
      <Root>
        <Skewer bgColor={bgColor} layer={1200}>
          <Padder>
            <Container sideText={'Toolbox'} >
              <Console />
              <ToolBoxContent
                tools={tools}
                chosenTool={this.state.chosenTool}
                fadeIn={this.state.fadeIn}
              />
              <ToolBoxSlider
                tools={tools}
                chosenTool={this.state.chosenTool}
                onChooseTool={this.chooseTool.bind(this)}
                onSlideTool={this.slideTool.bind(this)}
              />
            </Container>
          </Padder>
        </Skewer>
      </Root>
    )
  }
}

Toolbox.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    sub_headline: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    }),
    image: PropTypes.shape({
      url: PropTypes.string
    })
  })),
  bgColor: PropTypes.string
}

export default Toolbox
