import styled from 'styled-components'

import LazyImage from 'Components/Shared/LazyImage'

const Icon = styled(LazyImage)`
  min-width: 40px;
  max-width: 40px;
  margin-right: ${props => props.right ? 0 : props.theme.spacing(2)};
  margin-left: ${props => props.right && props.theme.spacing(2)};
`

export default Icon
