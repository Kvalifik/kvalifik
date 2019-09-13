import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from 'Blocks/Button'

const ButtonInnerWrapper = styled.span`
  margin: ${props => props.theme.spacing(1)};
`

const Root = styled.div`
  color: white;
  position: fixed;
  height: 500px;
  width: 900px;
  margin: auto;

  @media ${props => props.theme.media.md} {
    width: 90%;
    height: 75%;
  }

  background: #252525;
  z-index: 2000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${props => props.theme.spacing(4)};
`

const Headline = styled.h2``
const Desc = styled.p``

const Headline2 = styled.h3`
  color: ${props => props.theme.palette.primary.D};
`

const ButtonWrapper = styled.div`
  display: block;
`

const NoIe = props => {
  const { noIeDescription,
    noIeHeadline,
    recommendedBrowsersHeadline,
    recommendedBrowser } = props
  return (
    <Root>
      <Headline>
        {noIeHeadline}
      </Headline>
      <Desc dangerouslySetInnerHTML={{ __html: noIeDescription }} />
      <Headline2>
        {recommendedBrowsersHeadline}
      </Headline2>
      <ButtonWrapper>
        {
          recommendedBrowser.map((browser, i) =>
            <ButtonInnerWrapper key={i}>
              <Button type="link" to={browser.path} isExternal>{browser.name}</Button>
            </ButtonInnerWrapper>
          )
        }
      </ButtonWrapper>
    </Root>
  )
}

NoIe.propTypes = {
  noIeDescription: PropTypes.string,
  noIeHeadline: PropTypes.string,
  recommendedBrowsersHeadline: PropTypes.string,
  recommendedBrowser: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string
  }))
}

export default NoIe
