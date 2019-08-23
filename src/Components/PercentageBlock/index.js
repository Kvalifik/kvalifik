import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Skewer from 'Blocks/Skewer'
import Container from 'Blocks/Container'
import EasingNumber from './EasingNumber'

const Content = styled.div`
  display: grid;
  padding: 150px 0;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: center;
  color: ${props => props.theme.palette.light};
`

const Description = styled.div`
  ${props => props.theme.typography.header.mixin()}
  font-size: 30px;

  ${props => props.theme.media.lg`
    text-align: center;
  `}
`

const Number = styled.div`
  ${props => props.theme.typography.hero.mixin()}
  font-size: 100px;
  padding: ${props => props.theme.spacing(0, 5)};
  justify-self: end;

  ${props => props.theme.media.lg`
    justify-self: center;
  `}
`

const PercentageBlock = ({
  description,
  number,
  duration,
  bgColor
}) => (
  <Skewer bgColor={bgColor}>
    <Container>
      <Content>
        <Number>
          <EasingNumber
            value={number}
            duration={duration}
            awaitViewport
            render={number => `${number}%`}
          />
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
  bgColor: PropTypes.string
}

export default PercentageBlock
