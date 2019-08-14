import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 60px 1fr;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr 200px 200px 1fr;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 315px 315px 1fr;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 435px 435px 1fr;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-columns: 1fr 525px 525px 1fr;
  }
`

const SideText = styled.div`
  color: white;
  text-transform: uppercase;
  justify-self: flex-end;
  font-size: 40px;
  font-weight: bold;
  grid-column: 1 / 2;
`

const SideTextInner = styled.div`
  @media (max-width: calc(576px + 80px)) {
    padding: 0 ${props => props.theme.padding.sm} 0 0;
  }

  padding: ${props => `0px ${props.theme.padding.sm} ${props.theme.padding.sm} 0`};
  position: absolute;
  transform-origin: 0% 0%;
  transform: rotate(90deg) scale(-1) translate(-100%, -100%);
`

const Content = styled.div`
  grid-column-start: ${props => props.overflowLeft ? 1 : 3};
  grid-column-end: ${props => props.overflowRight ? -1 : 4};
`

const Container = ({
  sideText,
  overflowRight,
  overflowLeft,
  noContentWrapper,
  children
}) => (
  <Root>
    <SideText>
      <SideTextInner>
        {sideText}
      </SideTextInner>
    </SideText>
    {noContentWrapper ? (
      children
    ) : (
      <Content overflowRight={overflowRight} overflowLeft={overflowLeft}>
        {children}
      </Content>
    )}
  </Root>
)

Container.propTypes = {
  sideText: PropTypes.string,
  children: PropTypes.any,
  overflowRight: PropTypes.bool,
  overflowLeft: PropTypes.bool,
  noContentWrapper: PropTypes.bool
}

export default Container
