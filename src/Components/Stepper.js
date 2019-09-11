import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Skewer from 'Blocks/Skewer'
import Padder from 'Blocks/Padder'
import Container from 'Blocks/Container'
import theme from 'utils/theme'

const Root = styled.div`
  position: relative;
  z-index: 1000;
  color: white;
`

const Content = styled.div`
  padding: ${props => props.theme.spacing(2)};
  display: grid;
`

const Step = styled.div`
  max-width: 600px;
  width: 100%;
  margin: ${props => props.theme.spacing(2)};
  justify-self: center;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
`

const StepNumber = styled.div`
  width: 100px;
  font-weight: bold;
  text-align: right;
  align-self: top;
  padding-right: ${props => props.theme.spacing(4)};
  font-size: 100px;
  grid-row: 1 / -1;
`

const StepDescription = styled.p`
  color: ${props => props.theme.hexToRgba(props.theme.palette.light, 0.8)};
  font-size: 15px;
`

const StepTitle = styled.div`
  padding-top: ${props => props.theme.spacing(2)};
  font-weight: bold;
  font-size: 24px;
`

const Stepper = props => {
  const { steps } = props
  return (
    <Root>
      <Skewer bgColor={theme.palette.dark}>
        <Container>
          <Padder>
            <Content>
              {steps.map((step, i) => {
                const { title, description } = step
                return (
                  <Step key={i}>
                    <StepNumber>{i + 1}</StepNumber>
                    <StepTitle>{title}</StepTitle>
                    <StepDescription dangerouslySetInnerHTML={{ __html: description }} />
                  </Step>
                )
              })}
            </Content>
          </Padder>
        </Container>
      </Skewer>
    </Root>
  )
}

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    map: PropTypes.func
  }))
}

export default Stepper
