/* eslint react/jsx-boolean-value: 0 */

import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import cross from 'graphics/cross.svg'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.9;
  }
`

const fadeInAndSlide = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const CustomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1050px 1fr;
  grid-template-rows: 1fr calc(1050px * 0.5625) 1fr;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 5000;
  height: 100vh;
  width: 100vw;

  animation: ${fadeInAndSlide} 0.4s cubic-bezier(0, 0.35, 0.08, 0.99);

  @media ${props => props.theme.media.xl} {
    grid-template-columns: 1fr 870px 1fr;
    grid-template-rows: 1fr calc(870px * 0.5625) 1fr;
  }

  @media ${props => props.theme.media.lg} {
    grid-template-columns: 1fr 630px 1fr;
    grid-template-rows: 1fr calc(630px * 0.5625) 1fr;
  }

  @media ${props => props.theme.media.md} {
    grid-template-columns: ${props => props.theme.spacing(2)} 1fr
      ${props => props.theme.spacing(2)};
    grid-template-rows: 1fr 56.25vw 1fr;
  }
`

const VideoWrapper = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  width: 100%;
  position: relative;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: ${props => props.theme.palette.dark};
`

const Backdrop = styled.div`
  background-color: ${props => props.theme.palette.dark};
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 4999;
  top: 0;
  left: 0;
  opacity: 0.9;

  animation: ${fadeIn} 0.6s linear;
`

const CloseButton = styled.button`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  right: -60px;
  top: -60px;

  @media ${props => props.theme.media.md} {
    right: 0;
  }

  position: absolute;

  z-index: 1100;

  width: 60px;
  height: 60px;
  border: none;
  background-color: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:focus {
    outline: none;
  }

  img {
    width: 30px;
    height: 30px;
    transform-origin: center;
    transition: transform 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  }

  &:hover img {
    transform: scale(1.1);
  }
`

class VideoFullscreen extends Component {
  constructor (props) {
    super(props)
    this.bindedKeyHandler = this.handleCloseKey.bind(this)
  }

  componentDidMount () {
    window.addEventListener('keydown', this.bindedKeyHandler)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.bindedKeyHandler)
  }

  handleCloseButton (event) {
    const { onClose } = this.props
    if (event.currentTarget === event.target) {
      onClose()
    }
  }

  handleCloseKey (event) {
    const { onClose } = this.props
    if (event.key === 'Escape') {
      onClose()
    }
  }

  renderVideo () {
    const { video: { provider, providerUid } = {} } = this.props

    if (provider === 'vimeo') {
      const path = `${providerUid}?autoplay=1&title=0&byline=0&portrait=0`
      const src = `https://player.vimeo.com/video/${path}`
      return (
        <>
          <div
            style={{
              padding: '56.25% 0 0 0',
              position: 'relative'
            }}
          >
            <iframe
              src={src}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js" />
        </>
      )
    } else if (provider === 'youtube') {
      const src = `https://www.youtube-nocookie.com/embed/${providerUid}?autoplay=1`
      return (
        <>
          <div
            style={{
              padding: '56.25% 0 0 0',
              position: 'relative'
            }}
          >
            <iframe
              src={src}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}

              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </>
      )
    }

    return (
      <p style={{ color: 'white' }}>No video attached</p>
    )
  }

  render () {
    const { onClose } = this.props

    return (
      <>
        <Backdrop />
        <CustomContainer onClick={this.handleCloseButton.bind(this)}>
          <VideoWrapper>{this.renderVideo()}</VideoWrapper>
          <CloseButton onClick={onClose}>
            <img src={cross} />
          </CloseButton>
        </CustomContainer>
      </>
    )
  }
}

VideoFullscreen.propTypes = {
  video: PropTypes.shape({
    provider: PropTypes.string,
    providerUid: PropTypes.string
  }),
  onClose: PropTypes.func
}

export default VideoFullscreen
