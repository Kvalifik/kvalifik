import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from 'Blocks/Container'
import Skewer from 'Blocks/Skewer'
import Padder from 'Blocks/Padder'
import testImg from 'graphics/test.jpeg'

import theme from 'utils/theme'

const Bg = styled.div`
  background: url(${testImg});
  background-position: center;
  background-size: cover;
`

const Header = styled.h2`
  /* font-size:  */
`

const Description = styled.p`

`

const OverlayBlock = ({
  bgColor,
  title,
  imageUrl,
  description
}) => {
  return (
    <Skewer noPadding>
      <Bg>
        <Padder>
          <Skewer bgColor={theme.hexToRgba(bgColor, 0.9)} half>
            <Container>
              <Header>{title}</Header>
              <Description dangerouslySetInnerHTML={{ __html: description }} />
            </Container>
          </Skewer>
        </Padder>
      </Bg>
    </Skewer>
  )
}

OverlayBlock.propTypes = {
  bgColor: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string
}

export default OverlayBlock
