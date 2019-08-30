import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Icon from 'Blocks/Icon'
import VideoFullscreen from 'Blocks/VideoFullscreen'
import PlayButton from './PlayButton'
import ThumbImage from './ThumbImage'

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-template-rows: 2fr 4fr;
  grid-column: 1 / -1;

  @media ${props => props.theme.media.sm} {
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

const TopLeftContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 0 ${props => props.theme.spacing(6)};
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
    transform: scale(1.2);
    transform-origin: center;
  }
`

const BottomLeftContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding: 0 ${props => props.theme.spacing(6)};
  justify-self: center;
  width: 70%;

  @media ${props => props.theme.media.xl} {
    width: 80%;
  }

  @media ${props => props.theme.media.lg} {
    justify-self: start;
    width: auto;
    grid-column: 1 / -1;
    grid-row: 3 / -1;
    padding: 0 ${props => props.theme.spacing(6)} 0 ${props => props.theme.spacing(2)};
  }
`

const RightContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / -1;
  height: 145vh;
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

const Title = styled.div`
  font-size: ${props => props.theme.typography.fontSize.md};
  padding: 5px 0;
  ${props => props.theme.typography.hero.mixin()};

  @media ${props => props.theme.media.md} {
    font-size: 4.5vw;
  }

  @media ${props => props.theme.media.sm} {
    font-size: 7vw;
  }
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
      imageUrl
    } = this.props
    const { playing } = this.state
    const hasVideo = !!videoUrl

    return (
      <>
        {playing && hasVideo && (
          <VideoFullscreen src={videoUrl} onClose={this.handleClose.bind(this)} />
        )}
        <Skewer flushTop bgColor={bgColor} noPadding height="130vh" layer={800}>
          <Container noContentWrapper>
            <Content>
              <TopLeftContainer>
                {iconUrl && (<Icon src={iconUrl} />)}
                <Title>{title}</Title>
              </TopLeftContainer>
              <BottomLeftContainer dangerouslySetInnerHTML={{ __html: body }} />
              <RightContainer>
                <ThumbImage src={imageUrl} />
                {hasVideo && (
                  <PlayButton onClick={this.handlePlay.bind(this)} />
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
  videoUrl: PropTypes.string,
  iconUrl: PropTypes.string,
  imageUrl: PropTypes.string
}

export default HeaderBlock
