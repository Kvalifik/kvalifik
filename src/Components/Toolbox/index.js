import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from 'Components/Shared/Container'
import Skewer from 'Components/Shared/Skewer'
import Padder from 'Components/Shared/Padder'

import ToolBoxSlider from './ToolBoxSlider'
import ToolBoxContent from './ToolBoxContent'
import Console from './Console'
import Button from 'Components/Shared/Button'
import theme from 'utils/theme'

const Root = styled.div`
  background-color: ${props => props.bgColor};
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: ${props => props.theme.spacing(5)};

  @media ${props => props.theme.media.md} {
    padding: ${props => props.theme.spacing(2)};
  }
`

const loop = (value, min, max) => {
  if (value > max) {
    value = min
  } else if (value < min) {
    value = max
  }
  return value
}

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

  slideTool (direction) {
    const { tools } = this.props

    this.changeFadeState(() => {
      this.setState({
        chosenTool: loop(
          this.state.chosenTool + direction,
          0,
          tools.length - 1
        )
      })
    })
  }

  componentDidMount () { // a quickfix for updating toolbox beyond the complite
    setTimeout(() => this.chooseTool(0), 50)
  }

  render () {
    const {
      tools,
      bgColor,
      consoleText,
      moreToolsButton,
      sideText
    } = this.props

    return (
      <Root>
        <Skewer bgColor={bgColor} layer={1200}>
          <Padder>
            <Container sideText={sideText}>
              <ToolBoxContent
                tools={tools}
                chosenTool={this.state.chosenTool}
                fadeIn={this.state.fadeIn}
                toolboxPath={moreToolsButton && moreToolsButton.path}
              />
              <ToolBoxSlider
                tools={tools}
                chosenTool={this.state.chosenTool}
                onChooseTool={this.chooseTool.bind(this)}
                onSlideTool={this.slideTool.bind(this)}
              />
            </Container>
            {moreToolsButton && (
              <ButtonWrapper>
                <Button
                  to={moreToolsButton.path}
                  type="link"
                  isExternal={moreToolsButton.isExternal}
                  bgColor={theme.hexToRgba(theme.palette.light, 0.2)}
                  color={theme.palette.light}
                >
                  {moreToolsButton.name}
                </Button>
              </ButtonWrapper>
            )}
          </Padder>
        </Skewer>
      </Root>
    )
  }
}

Toolbox.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    subHeadline: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    }),
    image: PropTypes.shape({
      url: PropTypes.string
    })
  })),
  bgColor: PropTypes.string,
  consoleText: PropTypes.string,
  sideText: PropTypes.string,
  moreToolsButton: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
    isExternal: PropTypes.bool
  })
}

export default Toolbox
