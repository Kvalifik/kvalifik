import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'

import Video from './CaseInfo/Video'
import ImageMedia from './CaseInfo/ImageMedia'
import VideoFullscreen from 'Components/Shared/VideoFullscreen'

const Label = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.8em;
`

const Root = styled.div`
  grid-template-areas: "block-one-header block-two-header block-three-header"
    "block-one-content block-two-content block-three-content";
  grid-gap: 0 ${props => props.theme.spacing(5)};
  background-color: transparent;
  padding: ${props => props.theme.spacing(4, 0, 0)};

  @media ${props => props.theme.media.md} {
    padding: ${props => props.theme.spacing(5, 2)};
  }
  @media ${props => props.theme.media.lg} {
    grid-template-areas:
      "block-one-header"
      "block-one-content"
      "block-two-header"
      "block-two-content"
      "block-three-header"
      "block-three-content";
    grid-template-columns: 1fr;
  }
  & > div{
    margin:0 auto;
  }
  & ${Label} {
    color: ${props => props.color};
  }
`

const Title = styled.h2`
  text-align:center;
  ${props => props.theme.typography.header.mixin()}
  font-size: ${props => props.theme.typography.fontSize.md};
  margin: 0 0 ${props => props.theme.spacing(4)};
  color: white;
`

class MediaBlock extends Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false
    }
  }

  handlePlay () {
    if (this.props.media && this.props.media.video) {
      this.setState({
        playing: true
      })
    }
  }

  handleClose () {
    this.setState({
      playing: false
    })
  }

  render () {
    const {
      media,
      bgColor,
      title
    } = this.props

    return (
      <>
        {this.state.playing && media && media.video && (
          <VideoFullscreen
            video={media.video}
            onClose={this.handleClose.bind(this)}
          />
        )}
        <Skewer bgColor={bgColor.hex} layer={1200}>
          <Container>
            <Root>
              {title && (
                <Title>{title}</Title>
              )}
              {media && media.video && (
                <Video
                  thumbnailUrl={media.image && media.image.url}
                  onOpen={this.handlePlay.bind(this)}
                />
              )}
              {media && !media.video && media.image && (
                <ImageMedia
                  src={media.image && media.image.url}
                />
              )}
            </Root>
          </Container>
        </Skewer>
      </>
    )
  }
}

MediaBlock.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  media: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string
    }),
    video: PropTypes.shape({
      provider: PropTypes.string,
      providerUid: PropTypes.string
    })
  })
}

export default MediaBlock
