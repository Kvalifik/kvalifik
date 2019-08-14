import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Container from 'Blocks/Container'
import Skewer from 'Blocks/Skewer'
import Padder from 'Blocks/Padder'
import Button from '../Blocks/Button'

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
  margin: 40px 100px;
`

const Fader = styled.div`
    position: absolute;
    z-index: 1000;
    left: 0;
    right: 0;
    bottom:13px;
    top: 0;
    width:100%;
    ${props => props.fadeBottom ? css`
        background:-webkit-linear-gradient(${props => props.bgColor + '00 92%, ' + props.bgColor + ' 100%)'}
    ` : 'display:none'}
`

const CaseGrid = (props) => {
  return (
    <Skewer bgColor={props.bgColor}>
      <Padder>
        <Container sideText="Cases" bgColor={props.bgColor}>
          <Fader bgColor={props.bgColor} fadeBottom={props.fadeBottom} />
          <Content fadeBottom={props.fadeBottom}>
            {props.children}
          </Content>
        </Container>
        <MoreWork fadeBottom={props.fadeBottom}>
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
  fadeBottom: PropTypes.bool
}

export default CaseGrid
