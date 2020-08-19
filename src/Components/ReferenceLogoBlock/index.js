import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'

import theme from 'utils/theme'

const TopPadder = styled.div`
  padding-top: ${props => props.theme.spacing(12)};
`

const Logos = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-gap: ${props => props.theme.spacing(2.5)};
  align-items: center;
  max-width: 100%;
  @media ${props => props.theme.media.lg} {
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${props => props.theme.spacing(4)};
    padding: 0 ${props => props.theme.spacing(2)};
  }
  

  @media ${props => props.theme.media.sm} {
    margin: ${props => props.theme.spacing(-0.5, -1, 9.5)};
    padding: 0 ${props => props.theme.spacing(3)};
    grid-template-columns: 1fr 1fr;
    max-width: 360px;
    margin: 0 auto;
  }
`
const Title = styled.h3`
  text-align: center;
  color: white;
  padding-bottom: ${props => props.theme.spacing(3)};
  max-width: 100%;
  @media ${props => props.theme.media.sm} {
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
  }
`
const Logo = styled.img`
  width: 100%;
  max-width: 180px;
  max-height: 65px;
  object-fit: contain;
  padding-left: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(1)};
  @media ${props => props.theme.media.lg} {
    max-height: 55px;
  }
  @media ${props => props.theme.media.sm} {
    max-height: 45px;
    justify-self: center;
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`

const ReferenceLogoBlock = ({ title, logos }) => (
  <Skewer bgColor={theme.palette.dark} layer={1200}>
    <Container>
      <TopPadder>
        {title != null && (
          <Title>{title}</Title>
        )}
        <Logos>
          {logos.map((logo, i) => (
            <Logo key={i} src={logo.url} alt={logo.alt} />
          ))}
        </Logos>
      </TopPadder>
    </Container>
  </Skewer>
)

ReferenceLogoBlock.propTypes = {
  title: PropTypes.string,
  logos: PropTypes.array
}

export default ReferenceLogoBlock
