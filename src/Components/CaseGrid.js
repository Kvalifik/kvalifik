import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Container from 'Blocks/Container'
import Skewer from 'Blocks/Skewer'
import Padder from 'Blocks/Padder'
import Button from 'Blocks/Button'

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: calc(30px);
  padding: ${props => props.theme.padding.sm};

  @media only screen and (max-width : ${props => props.theme.breakpoints.sm} ) {
    grid-template-columns: 1fr;
  }
`

const MoreWork = styled.div`
  display: ${props => props.fadeBottom ? 'flex' : 'none'};
  justify-content: center;
  margin: 40px 16px;
`

const Fader = styled.div`
    pointer-events: none;
    position: absolute;
    z-index: 1000;
    left: 0;
    right: 0;
    bottom: 13px;
    top: 0;
    width: 100%;
    ${props => props.fadeBottom ? css`
      background:-webkit-linear-gradient(${props.bgColor + '00 92%, ' + props.bgColor + ' 100%)'};
    ` : css`
      display: none;
    `}
`

const CaseGrid = (props) => {
  const {
    bgColor,
    children,
    hasMoreWork
  } = props

  return (
    <Skewer bgColor={bgColor}>
      <Padder>
        <Container sideText="Cases" bgColor={bgColor}>
          <Fader bgColor={bgColor} fadeBottom={hasMoreWork} />
          <Content fadeBottom={hasMoreWork}>
            {children}
          </Content>
        </Container>
        <MoreWork fadeBottom={hasMoreWork}>
          <Button bgColor="#707070" color="white">
            More Work
          </Button>
        </MoreWork>
      </Padder>
    </Skewer>
  )
}

CaseGrid.propTypes = {
  children: PropTypes.any,
  bgColor: PropTypes.string.isRequired,
  hasMoreWork: PropTypes.bool
}

export default CaseGrid
