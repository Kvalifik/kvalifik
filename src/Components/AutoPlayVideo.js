import React from 'react'
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

const AutoPlayVideo = (props) => (
  <Root>
    <Video autoPlay playsInline loop playing={props.autoPlaying} muted controls={false}>
      <source src={props.staticLink} type="video/mp4" />
    </Video>
  </Root>
)

AutoPlayVideo.propTypes = {
  staticLink: PropTypes.string,
  autoPlaying: PropTypes.bool
}

export default AutoPlayVideo
