import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Video from 'react-native-video'

const Root = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`

const VideoModified = styled(Video)`
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateX(-25%);
`

const AutoPlayVideo = (props) => (
  <Root>
    <VideoModified autoPlay playsInline loop playing={props.autoPlaying} muted controls={false}>
      <source source={{ uri: props.staticLink }} type="video/mp4" />
    </VideoModified>
  </Root>
)

AutoPlayVideo.propTypes = {
  staticLink: PropTypes.string,
  autoPlaying: PropTypes.bool
}

export default AutoPlayVideo
