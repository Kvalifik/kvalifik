import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import Padder from 'Blocks/Padder'

const Root = styled.div`
  color: white;
`

const Content = styled.div`
  padding: ${props => props.theme.spacing(2)};
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  display: grid;
  grid-gap: ${props => props.theme.spacing(4)};

  @media ${props => props.theme.media.lg} {
    grid-template-columns: 1fr;
  }
`

const H2 = styled.h2``
const Desc = styled.div``
const Left = styled.div``

const Right = styled.div`
  ${props => props.flip && css`
    grid-column-start: 1;
    grid-row-start: 1;
    @media ${props => props.theme.media.lg}{
      grid-column-start: auto;
      grid-row-start: auto;
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

  console.log(mediaUrl)

  return (
    <Root>
      <Skewer bgColor={bgColor}>
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
  description: PropTypes.any,
  flip: PropTypes.bool,
  header: PropTypes.any,
  mediaUrl: PropTypes.any,
  bgColor: PropTypes.any
}

export default FiftyFifty
