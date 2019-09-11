import styled from 'styled-components'

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: ${props => props.right ? 0 : props.theme.spacing(2)};
  margin-left: ${props => props.right && props.theme.spacing(2)};
`

export default Icon
