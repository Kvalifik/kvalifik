import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Container from 'Blocks/Container'
import Skewer from 'Blocks/Skewer'
import Padder from 'Blocks/Padder'

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
          <MoreWorkButton>
            More Work
          </MoreWorkButton>
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
