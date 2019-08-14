/* eslint react/jsx-boolean-value: 0 */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import cross from 'graphics/cross.svg'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1050px 1fr;
  grid-template-rows: 1fr calc(1050px * 0.5625) 1fr;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 1000;
  height: 100vh;
  width: 100vw;

  ${props => props.theme.media.xl`
    grid-template-columns: 1fr 870px 1fr;
    grid-template-rows: 1fr calc(870px * 0.5625) 1fr;
  `}

  ${props => props.theme.media.lg`
    grid-template-columns: 1fr 630px 1fr;
    grid-template-rows: 1fr calc(630px * 0.5625) 1fr;
  `}

  ${props => props.theme.media.md`
    grid-template-columns: 0 100vw 0;
    grid-template-rows: 1fr 56.25vw 1fr;
  `}
`

const Video = styled.video`
  width: 100%;
  position: relative;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`

const Backdrop = styled.div`
  background-color: ${props => props.theme.palette.dark};
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  opacity: 0.9;
  top: 0;
  left: 0;
`

const CloseButton = styled.button`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: start;
  justify-self: end;

  z-index: 1100;

  width: 60px;
  height: 60px;
  border: none;
  background-color: ${props => props.theme.hexToRgba(props.theme.palette.dark, 0.9)};
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
    transition: transform 0.5s ease-out;
  }

  &:hover img {
    transform: scale(0.95);
  }
`

const VideoFullscreen = ({ src, onClose }) => {
  const handleClose = (event) => {
    if (event.currentTarget === event.target) {
      onClose()
    }
  }

  return (
    <>
      <Backdrop />
      <Container onClick={handleClose}>
        <Video controls={true} autoPlay muted>
          <source src={src} type="video/mp4" />
        </Video>
        <CloseButton onClick={onClose}>
          <img src={cross} />
        </CloseButton>
      </Container>
    </>
  )
}

VideoFullscreen.propTypes = {
  src: PropTypes.string,
  onClose: PropTypes.func
}

export default VideoFullscreen
