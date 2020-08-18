import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Container from 'Components/Shared/Container'
import Skewer from 'Components/Shared/Skewer'
import Padder from 'Components/Shared/Padder'
import Button from 'Components/Shared/Button'
import CaseThumb from './CaseThumb'

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

const CaseGrid = (props) => {
  const {
    bgColor,
    cases,
    moreWorkUrl,
    moreWorkLabel,
    sideText,
    removeTopPadding
  } = props
  const hasMoreWork = !!moreWorkUrl

  return (
    <Skewer bgColor={bgColor} layer={1200}>
      <Padder removeTopPadding={removeTopPadding}>
        <Container sideText={sideText} bgColor={bgColor}>
          <Content fadeBottom={hasMoreWork}>
            {cases.map(work => (
              <CaseThumb
                key={work.id}
                name={work.forWho}
                description={work.description}
                bgUrl={work.image.url}
                bgColor={work.color.hex}
                fullWidth={work.fullSize}
                workUrl={work.url}
              />
            ))}
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
              {moreWorkLabel}
            </Button>
          </MoreWork>
        )}
      </Padder>
    </Skewer>
  )
}

CaseGrid.propTypes = {
  cases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    forWho: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string
    }),
    color: PropTypes.shape({
      hex: PropTypes.string
    }),
    fullSize: PropTypes.string,
    url: PropTypes.string
  })),
  sideText: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  moreWorkUrl: PropTypes.string,
  moreWorkLabel: PropTypes.string,
  removeTopPadding: PropTypes.bool
}

export default CaseGrid
