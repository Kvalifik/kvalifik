import styled from 'styled-components'

const ThumbImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src + props.theme.imgScale.lg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
`

export default ThumbImage
