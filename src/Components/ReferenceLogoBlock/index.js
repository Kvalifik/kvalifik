import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'

import theme from 'utils/theme'

const Logos = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-gap: ${props => props.theme.spacing(2.5)};
  padding-top: ${props => props.theme.spacing(15.625)};
  @media ${props => props.theme.media.lg} {
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 1fr);
  }
  

  @media ${props => props.theme.media.sm} {
    margin: ${props => props.theme.spacing(-0.5, -1, 9.5)};
    grid-template-columns: 1fr;
    grid-gap: ${props => props.theme.spacing(3.75)};
  }
`
const Logo = styled.img`
  width: 100%;
  /* max-width: 100px; */
  max-height: 75px;
  object-fit: contain;
  @media ${props => props.theme.media.sm} {
    max-width: 150px;
    justify-self: center;
  }
`

const ReferenceLogoBlock = ({ logos }) => (
  <Skewer bgColor={theme.palette.dark} layer={1200}>
    <Container>
      <Logos>
        {logos.map((logo, i) => (
          <Logo key={i} src={logo.url} alt={logo.alt} />
        ))}
      </Logos>
    </Container>
  </Skewer>
)

ReferenceLogoBlock.propTypes = {
  logos: PropTypes.array
}

export default ReferenceLogoBlock
