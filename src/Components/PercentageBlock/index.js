import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import Skewer from 'Components/Shared/Skewer'
import Container from 'Components/Shared/Container'
import EasingNumber from './EasingNumber'

const Content = styled.div`
  display: grid;
  padding: 150px 0;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: ${props => props.theme.palette.light};

  @media ${props => props.theme.media.lg} {
    grid-template-columns: 1fr;
  }
`

const Description = styled.div`
  ${props => props.theme.typography.header.mixin()}
  font-size: 30px;

  @media ${props => props.theme.media.lg} {
    text-align: center;
    font-size: 26px;
  }
`

const Number = styled.div`
  ${props => props.theme.typography.hero.mixin()}
  font-size: 100px;
  padding: ${props => props.theme.spacing(0, 5)};
  justify-self: end;

  @media ${props => props.theme.media.lg} {
    justify-self: center;
    font-size: 80px;
    padding: 0;
  }
`

const Unit = styled.div`
  font-size: 100px;
  text-align: justify;
  font-weight: bold;
  ${props => (props.letters < 4) && css`
    display: inline-block;
  `}
`

const PercentageBlock = ({
  description,
  number,
  duration,
  unit,
  bgColor
}) => (
  <Skewer bgColor={bgColor} layer={1200}>
    <Container>
      <Content>
        <Number>
          <EasingNumber
            value={number}
            duration={duration}
            awaitViewport
            render={number => `${number}`}
          />
          <Unit letters={parseInt(unit.length)}>
            {unit}
          </Unit>
        </Number>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </Content>
    </Container>
  </Skewer>
)

PercentageBlock.propTypes = {
  description: PropTypes.string,
  number: PropTypes.number,
  duration: PropTypes.number,
  bgColor: PropTypes.string,
  unit: PropTypes.string
}

export default PercentageBlock
