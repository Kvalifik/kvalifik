import styled from 'styled-components'

const ThumbImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-position: 15%;
  background-repeat: no-repeat;
  background-size: cover;
`

export default ThumbImage
