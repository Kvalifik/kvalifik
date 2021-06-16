import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'
import Icon from 'Components/Shared/Icon'
import VideoFullscreen from 'Components/Shared/VideoFullscreen'
import PlayButton from './PlayButton'
import AutoPlayVideo from '../AutoPlayVideo.js'
import ThumbImage from './ThumbImage'
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
    width: 80%;
  }

  @media ${props => props.theme.media.lg} {
    justify-self: start;
    width: auto;
    grid-column: 1 / -1;
    grid-row: 3 / -1;
    padding: 0 ${props => props.theme.spacing(6)} 0 ${props => props.theme.spacing(2)};
    /* font-size: 16px; */
  }
  font-size: 2vh;
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
  font-size: 5vh;
  padding: 5px 0;
  margin: 0;
  position: relative;
  ${props => props.theme.typography.hero.mixin()};

  @media ${props => props.theme.media.md} {
    font-size: 4.5vw;
  }

  @media ${props => props.theme.media.sm} {
    font-size: 7vw;
  }

  &:before{
    content: attr(data-subtitle);
    display: block;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 300;
    opacity: .5;
    position: absolute;
    top: -1rem;
    right: auto;
    transform: none;
  }
  
  @media ${props => props.theme.media.lg} {
    &:before{
      top: 50%;
      transform: translateY(-50%);
      right: -2rem;
    }
  }
`

const Author = styled.span`
  font-size: 1.8vh;
  margin: 1rem 0;
  display: block;
`

const AuthorLink = styled.a`
  text-decoration: none;
  transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;
  display: inline-block;
  position: relative;
  font-weight: 600;
  margin-left: 0.25ch;

  &:before{
    content: "";
    background-color: currentColor;
    opacity: 0.8;
    height: 1.5px;
    bottom: -4px;
    position: absolute;
    width: 0px;
    transition: width 200ms ease-in-out;
  }

  &:hover{
    &:before{
      width: 100%;
    }
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

class BlogHeader extends Component {
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
      imageUrl,
      blogAuthor,
      publishedAt
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
                <Title data-subtitle={publishedAt}>{title}</Title>
                <Author>
                  Written by
                  {
                    blogAuthor.email
                      ? (
                        <AuthorLink href={'mailto:' + blogAuthor.email}>
                          {blogAuthor.name}
                        </AuthorLink>
                      )
                      : blogAuthor.name
                  }, {blogAuthor.jobTitle}
                </Author>
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

BlogHeader.propTypes = {
  title: PropTypes.string,
  blogAuthor: PropTypes.shape({
    name: PropTypes.string,
    jobTitle: PropTypes.string,
    email: PropTypes.string
  }),
  publishedAt: PropTypes.string,
  body: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  video: PropTypes.shape({
    provider: PropTypes.string,
    providerUid: PropTypes.string
  }),
  imageUrl: PropTypes.string
}

export default BlogHeader
