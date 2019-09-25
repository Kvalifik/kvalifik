import styled from 'styled-components'

export default styled.div`
  width: 100%;
  max-width: 80vh;

  &::after {
    display: block;
    content: "";
    width: 100%;
    padding-bottom: 100%;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`
