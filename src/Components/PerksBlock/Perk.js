import React from 'react'
import styled from 'styled-components'

import { perkPropType } from 'models/perk'

const Info = styled.div`
  display: grid;
  padding: ${props => props.theme.spacing(1.5)};
`

const IconWrapper = styled.div`
  padding: ${props => props.theme.spacing(1.5)};
`

const Icon = styled.div`
  width: 100%;
  height: 100%;
  
  background-image: url(${props => props.imageSrc});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

const Title = styled.strong`
  display: inline-block;
  line-height: ${props => props.theme.spacing(2.5)};
  margin-bottom: ${props => props.theme.spacing(0.5)};
`

const Root = styled.div`
  display: grid;
  grid-template-columns: 8fr 7fr;
  height: 175px;
  margin: ${props => props.theme.spacing(2)};

  background-color: ${props => props.bgColor};

  transform-origin: center;
  transition: 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);

  @media ${props => props.theme.media.sm} {
    margin: ${props => props.theme.spacing(0.5, 2)};
  }

  @media ${props => props.theme.media.lg} {
    &:nth-child(odd) {
      grid-template-columns: 7fr 8fr;

      ${Info} {
        grid-column: 2;
        grid-row: 1;
      }

      ${Icon} {
        grid-column: 1;
        grid-row: 1;
      }
    }
  }
`

const NameContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  justify-self: start;

  font-size: 14px;

  strong {
    font-size: 18px;
  }
  p {
    margin: 0;
  }
`

const Perk = ({ perk }) => (
  <Root bgColor={perk.color && perk.color.hex}>
    <Info>
      <NameContainer>
        <Title>{perk.title}</Title>
        <p>{perk.subtitle}</p>
      </NameContainer>
    </Info>
    <IconWrapper>
      <Icon imageSrc={perk.image && perk.image.url} />
    </IconWrapper>
  </Root>
)

Perk.propTypes = {
  perk: perkPropType
}

export default Perk
