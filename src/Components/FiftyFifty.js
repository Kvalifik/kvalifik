import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'
import Padder from 'Components/Shared/Padder'

const Root = styled.div`
  color: white;
`

const Content = styled.div`
  ${props => props.theme.grid.all([
    'display: grid',
    'grid-template-rows: auto auto',
    'grid-template-columns: 1fr 1fr'
  ])}
  grid-gap: ${props => props.theme.spacing(4)};
  padding: ${props => props.theme.spacing(2)};

  @media ${props => props.theme.media.lg} {
    ${props => props.theme.grid('grid-template-columns: 1fr')}
  }
`

const H2 = styled.h2``
const Desc = styled.div``
const Left = styled.div``

const Right = styled.div`
  ${props => props.flip && css`
    ${props => props.theme.grid.all(['grid-column: 1', 'grid-row: 1'])}
    @media ${props => props.theme.media.lg}{
      ${props => props.theme.grid.all(['grid-column: auto', 'grid-row: auto'])}
    }
  `}
`

const Image = styled.img`
  width: 100%;
`

const FiftyFifty = (props) => {
  const {
    description,
    flip,
    header,
    mediaUrl,
    bgColor
  } = props

  return (
    <Root>
      <Skewer bgColor={bgColor} layer={1000}>
        <Padder>
          <Container>
            <Content>
              <Left>
                <H2>{header}</H2>
                <Desc dangerouslySetInnerHTML={{ __html: description }} />
              </Left>
              <Right flip={flip}>
                <Image src={mediaUrl} />
              </Right>
            </Content>
          </Container>
        </Padder>
      </Skewer>
    </Root>
  )
}

FiftyFifty.propTypes = {
  description: PropTypes.string,
  flip: PropTypes.bool,
  header: PropTypes.string,
  mediaUrl: PropTypes.string,
  bgColor: PropTypes.string
}

export default FiftyFifty
