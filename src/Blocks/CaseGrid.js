import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import Skewer from './Skewer'

const Root = styled.div`
  position: relative;
  z-index: 5;
  background: #1d1d1d;
  padding: 300px 0;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: calc(30px);
`

function CaseGrid (props) {
  return (
    <Skewer bgColor="#1d1d1d">
      <Container sideText="Hey!">
        <Content>
          {props.children}
        </Content>
      </Container>
    </Skewer>
  )
}

CaseGrid.propTypes = {

}

export default CaseGrid
