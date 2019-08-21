import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import VideoFullscreen from 'Blocks/VideoFullscreen'

import playButton from 'graphics/play-button.svg'

const Root = styled.div`
  border-color: ${props => props.color};
  border-width: 6px;
  border-style: solid;
  padding: 12px;
  border-radius: 50px;
  position: relative;

  width: 500px;
  height: calc(500px * 0.5625);
`

const PlayButton = styled.button`
  width: 60px;
  height: 60px;
  background-image: url(${playButton});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  outline: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  transition: transform 0.5s ease-out;
  cursor: pointer;

  &:hover {
    transform: translate(-50%, -50%) scale(0.95);
  }
`

const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 32px;
`

class Video extends Component {
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
      thumbnailUrl,
      videoUrl,
      color
    } = this.props

    return (
      <>
        {this.state.playing && (
          <VideoFullscreen
            src={videoUrl}
            onClose={this.handleClose.bind(this)}
          />
        )}
        <Root color={color}>
          <Thumbnail src={thumbnailUrl} />
          <PlayButton onClick={this.handlePlay.bind(this)} />
        </Root>
      </>
    )
  }
}

Video.propTypes = {
  videoUrl: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  color: PropTypes.string
}

export default Video
