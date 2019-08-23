import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Button from 'Blocks/Button'
import VideoFullscreen from 'Blocks/VideoFullscreen'

import ProcessBlock from './ProcessBlock'
import Video from './Video'

import theme from 'utils/theme'

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 80px;
  justify-items: center;
  padding: ${props => props.theme.spacing(4, 0, 12)};
`

class CaseInfo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false
    }
  }

  handlePlay () {
    this.setState({
      playing: true
    })
  }

  handleClose () {
    this.setState({
      playing: false
    })
  }

  render () {
    const {
      bgColor,
      accentColor,
      videoUrl,
      thumbnailUrl,
      button: {
        path,
        isExternal,
        name: buttonText
      },
      ...process
    } = this.props

    return (
      <>
        {this.state.playing && (
          <VideoFullscreen
            src={videoUrl}
            onClose={this.handleClose.bind(this)}
          />
        )}
        <Skewer bgColor={bgColor} layer={1200}>
          <Container>
            <Root>
              <Button
                bgColor={theme.hexToRgba(
                  theme.contrastColor(
                    bgColor,
                    theme.palette.light,
                    theme.palette.dark
                  ),
                  0.2
                )}
                isExternal={isExternal}
                href={path}
                as="a"
              >
                {buttonText}
              </Button>
              <ProcessBlock {...process} color={accentColor} />
              <Video
                thumbnailUrl={thumbnailUrl}
                color={accentColor}
                onOpen={this.handlePlay.bind(this)}
              />
            </Root>
          </Container>
        </Skewer>
      </>
    )
  }
}

CaseInfo.propTypes = {
  labelOne: PropTypes.string,
  titleOne: PropTypes.string,
  descriptionOne: PropTypes.string,
  labelTwo: PropTypes.string,
  titleTwo: PropTypes.string,
  descriptionTwo: PropTypes.string,
  labelThree: PropTypes.string,
  titleThree: PropTypes.string,
  descriptionThree: PropTypes.string,
  bgColor: PropTypes.string,
  accentColor: PropTypes.string,
  videoUrl: PropTypes.string,
  button: PropTypes.shape({
    path: PropTypes.string,
    isExternal: PropTypes.bool,
    name: PropTypes.string
  }),
  thumbnailUrl: PropTypes.string
}

export default CaseInfo
