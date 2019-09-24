import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Container from 'Components/Shared/Container'
import Skewer from 'Components/Shared/Skewer'
import Padder from 'Components/Shared/Padder'
import Button from 'Components/Shared/Button'

import theme from 'utils/theme'

const Content = styled.div`
  display: grid;
  grid-gap: calc(30px);
  padding: ${props => props.theme.padding.sm};
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  @media ${props => props.theme.media.sm} {
    grid-template-columns: 1fr;
  }
`

const MoreWork = styled.div`
  display: flex;
  justify-content: center;
  margin: ${props => props.theme.spacing(5, 2)};
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
    moreWorkUrl
  } = props
  const hasMoreWork = !!moreWorkUrl

  return (
    <Skewer bgColor={bgColor} layer={1200}>
      <Padder>
        <Container sideText="Cases" bgColor={bgColor}>
          <Fader bgColor={bgColor} fadeBottom={hasMoreWork} />
          <Content fadeBottom={hasMoreWork}>
            {children}
          </Content>
        </Container>
        {hasMoreWork && (
          <MoreWork>
            <Button
              type="link"
              to={moreWorkUrl}
              bgColor={theme.hexToRgba(theme.palette.light, 0.2)}
              color={theme.palette.light}
            >
              More Work
            </Button>
          </MoreWork>
        )}
      </Padder>
    </Skewer>
  )
}

CaseGrid.propTypes = {
  children: PropTypes.any,
  bgColor: PropTypes.string.isRequired,
  moreWorkUrl: PropTypes.string
}

export default CaseGrid
