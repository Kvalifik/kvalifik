import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Container from './Container'
import Skewer from './Skewer'

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: calc(30px);

  @media only screen and (max-width : ${props => props.theme.breakpoints.sm} ) {
    grid-template-columns: 1fr;
  }
`

const MoreWork = styled.div`
  display: ${props => props.fadeBottom ? 'flex' : 'none'};
  justify-content: center;
`

const MoreWorkButton = styled.button`
    padding: 20px 100px;
    margin: 20px;
    background: #707070;
    border: 0;
    color: white;
    @media only screen and (max-width : ${props => props.theme.breakpoints.sm} ) {
      width: 100%;
    }

`

const Fader = styled.div`
    position: absolute; 
    z-index: 1000;
    left: 0;
    right: 0;
    bottom:13px;
    top: 0;
    width:100%;
    background:-webkit-linear-gradient(#1d1d1d00 92%, #1d1d1d 100%
  ); 
`

function CaseGrid (props) {
  return (
    <Skewer innerPadding bgColor={props.bgColor}>
      <Container sideText="Cases" bgColor={props.bgColor}>
        <Fader />
        <Content fadeBottom={props.fadeBottom}>
          {props.children}
        </Content>
      </Container>
      <MoreWork fadeBottom={props.fadeBottom}>
        <MoreWorkButton>
          More Work
        </MoreWorkButton>
      </MoreWork>
    </Skewer>
  )
}

CaseGrid.propTypes = {
  children: PropTypes.any,
  bgColor: PropTypes.string,
  fadeBottom: PropTypes.bool
}

export default CaseGrid
