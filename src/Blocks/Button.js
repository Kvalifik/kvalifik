import styled from 'styled-components'

export default styled.button`
  padding: ${props => props.theme.spacing(2, 8)};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  text-transform: uppercase;
  border: 0;
  ${props => props.theme.typography.header.mixin()}
  font-size: 20px;
  outline: none;
  cursor: pointer;
  transform-origin: center;
  transition: 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);

  &:hover {
    transform: scale(0.95);
  }
`
