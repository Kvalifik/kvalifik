import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 60px 1fr;
`

const SideText = styled.div`
  color: white;
  text-transform: uppercase;
  justify-self: flex-end;
  font-size: 40px;
  font-weight: 700;
  grid-column: 1 / 2;
`

const SideTextInner = styled.div`
  @media (max-width: calc(576px + 80px)) {
    padding: 0px $sm-padding 0px 0px;
  }
  padding: 0px $sm-padding $sm-padding 0;
  position: absolute;
  transform-origin: 0% 0%;
  transform: rotate(90deg) scale(-1) translate(-100%, -100%);
`

const Content = styled.div`
  padding: 15px;
  grid-column-start: 2;
`

const Container = ({
  sideText,
  children
}) => (
  <Root>
    <SideText>
      <SideTextInner>
        {sideText}
      </SideTextInner>
    </SideText>
    <Content>
      {children}
    </Content>
  </Root>
)

Container.propTypes = {
  sideText: PropTypes.string,
  children: PropTypes.any
}

export default Container
