import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from 'Blocks/Container'
import Skewer from 'Blocks/Skewer'
import Padder from 'Blocks/Padder'

import theme from 'utils/theme'

const Header = styled.h2`
  ${props => props.theme.typography.header.mixin()}
  font-size: ${props => props.theme.typography.fontSize.md};
  line-height: 1.2em;
`

const Description = styled.div`
  font-size: 14px;
  line-height: 1.6em;
`

const Content = styled.div`
  grid-column: 2 / 3;
  padding: ${props => props.theme.spacing(0, 4, 0, 0)};

  @media ${props => props.theme.media.lg} {
    grid-column: 2 / 4;
    padding: ${props => props.theme.spacing(10, 0)};
  }
`

const OverlayBlock = ({
  bgColor,
  title,
  imageUrl,
  description
}) => (
  <Skewer noPadding bgImageUrl={imageUrl} layer={1200}>
    <Padder removeOnMedia="lg">
      <Skewer bgColor={theme.hexToRgba(bgColor, 0.9)} half>
        <Container noContentWrapper>
          <Content>
            <Header>{title}</Header>
            <Description dangerouslySetInnerHTML={{ __html: description }} />
          </Content>
        </Container>
      </Skewer>
    </Padder>
  </Skewer>
)

OverlayBlock.propTypes = {
  bgColor: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string
}

export default OverlayBlock
