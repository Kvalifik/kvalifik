import styled from 'styled-components'
import downArrow from 'graphics/down-arrow.svg'

const DownArrow = styled.div`
  position: absolute;
  border-radius: 100%;
  top: 90vh;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.color};
  padding: 16px;
  z-index: 800;

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

export default DownArrow
