import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'
import Icon from 'Components/Shared/Icon'
import VideoFullscreen from 'Components/Shared/VideoFullscreen'
import PlayButton from './PlayButton'
import ThumbImage from './ThumbImage'
import AutoPlayVideo from '../AutoPlayVideo.js'
import theme from 'utils/theme'

const IEContent = css`
  display: -ms-grid;
  -ms-grid-columns: 3fr 4fr;
  -ms-grid-rows: 2fr 4fr;
  -ms-grid-column: 1;
  -ms-grid-column-span: 2;

  @media ${props => props.theme.media.lg} {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    -ms-grid-columns: 1fr;
  }

  @media ${props => props.theme.media.xl} {
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
  }
`

const Content = styled.div`
  ${IEContent}
  display: grid;

  grid-template-columns: 3fr 4fr;
  grid-template-rows: 2fr 4fr;
  grid-column: 1 / -1;

  color: ${props => props.textColor || 'black'};

  @media ${props => props.theme.media.sm} {
    margin-top: ${props => props.theme.navBarWidth};
  }

  @media ${props => props.theme.media.landscape} {
    margin-top: ${props => props.theme.navBarWidth};
  }

  @media ${props => props.theme.media.md} {
    grid-column: 1 / -1;
  }

  @media ${props => props.theme.media.lg} {
    grid-column: 2 / 3;
    padding: ${({ theme: { spacing } }) => `${spacing(2)} 0 0`};
    grid-template-rows: auto auto;
  }

  @media ${props => props.theme.media.xl} {
    grid-column: 1 / -1;
  }
`

const IETopLeftContainer = css`
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  -ms-grid-row: 1;
  -ms-grid-row-span: 1;
  -ms-grid-row-align: end;
  -ms-grid-column-align: center;

  @media ${props => props.theme.media.lg} {
    -ms-grid-column-align: start;
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
  }
`

const TopLeftContainer = styled.div`
  ${IETopLeftContainer}
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: ${props => props.theme.spacing(4, 6, 1, 6)};
  align-self: end;
  line-height: 1.25;
  justify-self: center;
  width: 70%;

  @media ${props => props.theme.media.xl} {
    width: 80%;
  }

  @media ${props => props.theme.media.lg} {
    justify-self: start;
    width: auto;
    grid-column: 1 / -1;
    padding: 0 ${props => props.theme.spacing(6)} 0 ${props => props.theme.spacing(2)};
  }

  & > ${Icon} {
    transform: scale(1.4);
    transform-origin: center;
  }
`

const IEBottomLeftContainer = css`
  -ms-grid-column: 1;
  -ms-grid-column-span: 1;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  -ms-grid-column-align: center;

  @media ${props => props.theme.media.lg} {
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    -ms-grid-column-align: start;
  }
`

const BottomLeftContainer = styled.div`
  ${IEBottomLeftContainer}
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding: 0 ${props => props.theme.spacing(6)};
  justify-self: center;
  width: 70%;
  line-height: 1.6;

  @media ${props => props.theme.media.xl} {
    font-size: 1.2vw;
    width: 80%;
  }

  @media ${props => props.theme.media.lg} {
    justify-self: start;
    width: auto;
    grid-column: 1 / -1;
    grid-row: 3 / -1;
    padding: 0 ${props => props.theme.spacing(6)} 0 ${props => props.theme.spacing(2)};
    font-size: 16px;
  }
`

const IERightContainer = css`
  -ms-grid-column: 2;
  -ms-grid-column-span: 1;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;

  @media ${props => props.theme.media.lg} {
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
  }
`

const RightContainer = styled.div`
  ${IERightContainer}
  grid-column: 2 / 3;
  grid-row: 1 / -1;
  height: 120vh;
  position: relative;

  @media ${props => props.theme.media.lg} {
    grid-row: 2 / 3;
    grid-column: 1 / 3;

    height: 55vw;
    padding: ${props => props.theme.spacing(2)};

    video {
      height: initial;
    }
  }
`

const Title = styled.h1`
  /* font-size: ${props => props.theme.typography.fontSize.md}; */
  font-size: 3vw;
  padding: 5px 0;
  margin: 0;
  ${props => props.theme.typography.hero.mixin()};

  @media ${props => props.theme.media.md} {
    font-size: 4.5vw;
  }

  @media ${props => props.theme.media.sm} {
    font-size: 7vw;
  }
`

const shouldAutoplayVideo = () => {
  let windowExists
  try {
    windowExists = !!window
  } catch (e) {
    windowExists = false
  }
  return windowExists &&
    window.location.pathname === '/' &&
    window.innerWidth > parseInt(theme.breakpoints.md)
}

class HeaderBlock extends Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false,
      autoPlaying: true
    }
  }

  handlePlay () {
    if (!this.props.video) {
      return
    }
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
      title,
      body,
      bgColor,
      textColor,
      video,
      iconUrl,
      imageUrl
    } = this.props
    const { playing } = this.state
    const staticVideoUrl = 'https://kvalifik-assets.s3.eu-central-1.amazonaws.com/kvalifik.mp4'
    return (
      <>
        {playing && !!video && (
          <VideoFullscreen video={video} onClose={this.handleClose.bind(this)} />
        )}
        <Skewer bgColor={bgColor} height="124vh" layer={800} isHeaderBlock>
          <Container noContentWrapper>
            <Content textColor={textColor}>
              <TopLeftContainer>
                {iconUrl && (<Icon src={iconUrl} />)}
                <Title>{title}</Title>
              </TopLeftContainer>
              <BottomLeftContainer dangerouslySetInnerHTML={{ __html: body }} />
              <RightContainer onClick={this.handlePlay.bind(this)}>
                {
                  shouldAutoplayVideo()
                    ? (
                      <AutoPlayVideo
                        autoPlaying={!playing}
                        staticLink={staticVideoUrl}
                      />
                    )
                    : <ThumbImage src={imageUrl} />
                }
                {!!video && (
                  <PlayButton />
                )}
              </RightContainer>
            </Content>
          </Container>
        </Skewer>
      </>
    )
  }
}

HeaderBlock.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  video: PropTypes.shape({
    provider: PropTypes.string,
    providerUid: PropTypes.string
  }),
  iconUrl: PropTypes.string,
  imageUrl: PropTypes.string
}

export default HeaderBlock
