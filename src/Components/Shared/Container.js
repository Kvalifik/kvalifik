import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Root = styled.div`
  position: relative;
  display: grid;
  ${props => props.center && css`
  text-align: center;
  `}

  ${props => !props.fluid && css`
    ${props.theme.grid('grid-template-columns: 1fr 525px 525px 1fr')};

    @media ${props.theme.media.xl} {
      ${props.theme.grid('grid-template-columns: 1fr 435px 435px 1fr')};
    }

    @media ${props.theme.media.lg} {
      ${props.theme.grid('grid-template-columns: 1fr 272px 272px 1fr')};
    }

    @media ${props.theme.media.md} {
      ${props.theme.grid('grid-template-columns: 1fr 200px 200px 1fr')};
    }

    @media ${props.theme.media.sm} {
      ${props.theme.grid(`grid-template-columns: ${props.hasSideText ? '60px' : 0} 1fr`)};
    }
  `}


  ${props => props.fluid && props.hasSideText && css`
    ${props => props.theme.grid('grid-template-columns: 80px 1fr 80px')};
  `}

  ${props => props.fluid && !props.hasSideText && css`
    ${props => props.theme.grid('grid-template-columns: 0 1fr 0')};
  `}

  @media ${props => props.theme.media.sm} {
    ${props => props.fluid && props.hasSideText && css`
      ${props => props.theme.grid('grid-template-columns: 60px 1fr')};
    `}
  }
`

const SideText = styled.div`
  color: white;
  text-transform: uppercase;
  justify-self: flex-end;
  font-size: 40px;
  font-weight: bold;
  grid-column: 1 / 2;
  padding-bottom: 200px;
`

const SideTextSticky = styled.div`
  width: 100%;

  position: sticky;
  top: 0;

  @media ${props => props.theme.media.sm} {
    top: calc(8px + ${props => props.theme.navBarWidth});
  }
`

const SideTextInner = styled.div`
  @media (max-width: calc(${props => props.theme.breakpoints.sm} + 80px)) {
    padding: 0 ${props => props.theme.spacing(2)} 0 0;
  }

  padding: ${props => `0px ${props.theme.padding.sm} ${props.theme.padding.sm} 0`};
  position: absolute;
  transform-origin: 0% 0%;
  transform: rotate(90deg) scale(-1) translate(-100%, -100%);
  width: max-content;
`

const Content = styled.div`
  ${props => {
    if (!props.fluid) {
      let start = 2
      let end = 4

      if (props.overflowLeft) {
        start = 1
      }
      if (props.overflowRight) {
        end = 5
      }

      return props.theme.grid('grid-column: ' + start + ' / ' + end)
    }
    return false
  }}

  ${props => props.fluid && props.theme.grid('grid-column: 2')};
`

const Container = ({
  center,
  sideText,
  overflowRight,
  overflowLeft,
  noContentWrapper,
  children,
  fluid
}) => (
  <Root hasSideText={!!sideText} fluid={fluid} center={center}>
    {!!sideText && (
      <SideText>
        <SideTextSticky>
          <SideTextInner>
            {sideText}
          </SideTextInner>
        </SideTextSticky>
      </SideText>
    )}
    {noContentWrapper ? (
      children
    ) : (
      <Content
        overflowRight={overflowRight}
        overflowLeft={overflowLeft}
        fluid={fluid}
      >
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
  noContentWrapper: PropTypes.bool,
  fluid: PropTypes.bool,
  center: PropTypes.bool
}

export default Container
