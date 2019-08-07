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

function CaseGrid (props) {
  return (
    <Skewer bgColor="#1d1d1d" innerPadding>
      <Container sideText="Hey!">
        <Content>
          {props.children}
        </Content>
      </Container>
    </Skewer>
  )
}

CaseGrid.propTypes = {
  children: PropTypes.any
}

export default CaseGrid
