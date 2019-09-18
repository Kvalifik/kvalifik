import styled from 'styled-components'

/*
  If you want to override the size of this component, you should extend it:

  const MyImage = styled(LazyImage)`
    width: 40px;
  `

  Note: If you use this inside a flex container, you should set both min- and max-width:

  const MyFlexImage = styled(LazyImage)`
    max-width: 40px;
    min-width: 40px;
  `
*/

const LazyImage = styled.div`
  position: relative;
  width: 100%;

  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    content: "";
    display: block;
    padding-bottom: ${props => props.ratio * 100 || 100}%;
  }
`

export default LazyImage
