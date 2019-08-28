import styled from 'styled-components'
import playButton from 'graphics/play-button.svg'

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

  @media ${props => props.theme.media.lg} {
    top: 50%;
  }
`

export default PlayButton
