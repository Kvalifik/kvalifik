import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'
import Button from 'Components/Shared/Button'
import VideoFullscreen from 'Components/Shared/VideoFullscreen'
import JustifiedGrid from 'Components/Shared/JustifiedGrid'

import ProcessBlock from './ProcessBlock'
import Video from './Video'
import ImageMedia from './ImageMedia'

import theme from 'utils/theme'

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 80px;
  justify-items: center;
  padding: ${props => props.theme.spacing(4, 0, 12)};

  @media ${props => props.theme.media.md} {
    padding: ${props => props.theme.spacing(5, 2)};
  }
`

class CaseInfo extends Component {
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
      bgColor,
      accentColor,
      media,
      buttonLink,
      gridImages,
      showProcessComponent,
      showButtonLink,
      showImageGrid,
      showMediaComponent,
      imageGridRows,
      ...process
    } = this.props

    const mappedGridImages = gridImages && gridImages.map(i => ({
      src: i.url,
      width: Math.round(i.width / 10),
      height: Math.round(i.height / 10)
    }))

    console.log(showImageGrid, mappedGridImages)

    return (
      <>
        {this.state.playing && media && media.video && showMediaComponent && (
          <VideoFullscreen
            video={media.video}
            onClose={this.handleClose.bind(this)}
          />
        )}
        <Skewer bgColor={bgColor} layer={1200}>
          <Container>
            <Root>
              {buttonLink && showButtonLink && (
                <Button
                  bgColor={theme.hexToRgba(
                    theme.contrastColor(
                      bgColor,
                      theme.palette.light,
                      theme.palette.dark
                    ),
                    0.2
                  )}
                  isExternal={buttonLink.isExternal}
                  to={buttonLink.path}
                  type="link"
                >
                  {buttonLink.name}
                </Button>
              )}
              {showProcessComponent && (
                <ProcessBlock {...process} color={accentColor} />
              )}
              {gridImages && gridImages.length > 0 && showImageGrid && (
                <JustifiedGrid
                  images={mappedGridImages}
                  rows={imageGridRows}
                  gutter="16px"
                />
              )}
              {media && showMediaComponent && media.video && (
                <Video
                  thumbnailUrl={media.image && media.image.url}
                  color={accentColor}
                  onOpen={this.handlePlay.bind(this)}
                />
              )}
              {media && showMediaComponent && !media.video && media.image && (
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
  media: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string
    }),
    video: PropTypes.shape({
      provider: PropTypes.string,
      providerUid: PropTypes.string
    })
  }),
  buttonLink: PropTypes.shape({
    path: PropTypes.string,
    isExternal: PropTypes.bool,
    name: PropTypes.string
  }),
  thumbnailUrl: PropTypes.string,
  showProcessComponent: PropTypes.bool,
  showButtonLink: PropTypes.bool,
  showImageGrid: PropTypes.bool,
  showMediaComponent: PropTypes.bool,
  gridImages: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  })),
  imageGridRows: PropTypes.number
}

export default CaseInfo
