import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`

const Video = styled.video`
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateX(-25%);
`

export default class AutoPlayVideo extends Component {
  static propTypes = {
    staticLink: PropTypes.string,
    autoPlaying: PropTypes.bool
  }

  playVideo () {
    try {
      // this.refs.vidRef.play()
    } catch (e) {
      console.error(e)
    }
  }

  pauseVideo () {
    try {
      this.refs.vidRef.pause()
    } catch (e) {
      console.error(e)
    }
  }

  render () {
    if (this.props.autoPlaying) {
      this.playVideo()
    } else {
      this.pauseVideo()
    }
    return (
      <Root>
        <Video
          ref="vidRef"
          autoPlay
          playsInline
          loop
          muted
          controls={false}
        >
          <source src={this.props.staticLink} type="video/mp4" />
        </Video>
      </Root>
    )
  }
}
