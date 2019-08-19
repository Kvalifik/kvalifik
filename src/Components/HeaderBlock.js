import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Icon from 'Blocks/Icon'
import VideoFullscreen from 'Blocks/VideoFullscreen'

import downArrow from 'graphics/down-arrow.svg'
import playButton from 'graphics/play-button.svg'

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 2fr 4fr;
  grid-column: 2 / -1;

  ${props => props.theme.media.sm`
    margin-top: ${props => props.theme.navBarWidth};
  `}

  ${props => props.theme.media.md`
    grid-column: 1 / -1;
  `}

  ${props => props.theme.media.lg`
    grid-column: 2 / 3;
    padding: ${({ theme: { spacing } }) => `${spacing(2)} 0 0`};
    grid-template-rows: auto auto;
  `}

  ${props => props.theme.media.xl`
    grid-column: 1 / -1;
  `}
`

const TopLeftContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 0 ${props => props.theme.spacing(6)};
  align-self: end;
  line-height: 1.25;

  ${props => props.theme.media.lg`
    grid-column: 1 / -1;
    padding: 0 ${props => props.theme.spacing(6)} 0 ${props => props.theme.spacing(2)};
  `}
`

const BottomLeftContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding: 0 ${props => props.theme.spacing(6)};

  ${props => props.theme.media.lg`
    grid-column: 1 / -1;
    grid-row: 3 / -1;
    padding: 0 ${props => props.theme.spacing(6)} 0 ${props => props.theme.spacing(2)};
  `}
`

const RightContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / -1;
  height: 145vh;
  position: relative;

  ${props => props.theme.media.lg`
    grid-row: 2 / 3;
    grid-column: 1 / 3;

    height: 55vw;
    padding: ${props => props.theme.spacing(2)};
    iframe, video {
      height: initial;
    }
  `}
`

const VideoThumb = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-position: 15%;
  background-repeat: no-repeat;
  background-size: cover;
`

const Title = styled.div`
  font-size: ${props => props.theme.typography.fontSize.md};
  padding: 5px 0;
  ${props => props.theme.typography.hero.mixin()};

  ${props => props.theme.media.md`
    font-size: 4.5vw;
  `}
  ${props => props.theme.media.sm`
    font-size: 7vw;
  `}
`

const DownArrow = styled.div`
  position: absolute;
  z-index: 200;
  border-radius: 100%;
  bottom: 50vh;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.color};
  padding: 16px;

  ${props => props.theme.media.lg`
    display: none;
  `}

  &::after {
    content: "";
    display: block;
    background-image: url(${downArrow});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 16px;
    height: 16px;
  }
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
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  transition: transform 0.5s ease-out;
  cursor: pointer;

  &:hover {
    transform: translate(-50%, -50%) scale(0.95);
  }

  ${props => props.theme.media.lg`
    top: 50%;
  `}
`

class HeaderBlock extends Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false
    }
  }

  handlePlay () {
    if (!this.props.videoUrl) {
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
      videoUrl,
      iconUrl,
      videoThumbUrl
    } = this.props
    const { playing } = this.state
    const hasVideo = !!videoUrl

    return (
      <>
        {playing && hasVideo && (
          <VideoFullscreen src={videoUrl} onClose={this.handleClose.bind(this)} />
        )}
        <Skewer angle="large" flushTop bgColor={bgColor} noPadding height="130vh">
          <Container noContentWrapper>
            <Content>
              <TopLeftContainer>
                <Icon src={iconUrl} />
                <Title>{title}</Title>
              </TopLeftContainer>
              <BottomLeftContainer>
                <p dangerouslySetInnerHTML={{ __html: body }} />
              </BottomLeftContainer>
              <RightContainer>
                <VideoThumb src={videoThumbUrl} />
                {hasVideo && (
                  <PlayButton onClick={this.handlePlay.bind(this)} />
                )}
              </RightContainer>
            </Content>
          </Container>
          <DownArrow color={bgColor} />
        </Skewer>
      </>
    )
  }
}

HeaderBlock.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  bgColor: PropTypes.string,
  videoUrl: PropTypes.string,
  iconUrl: PropTypes.string,
  videoThumbUrl: PropTypes.string
}

export default HeaderBlock
