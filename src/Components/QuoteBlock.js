import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Skewer from 'Components/Shared/Skewer'

const QuoteRoot = styled.div`
  width: 704px;
  padding: 160px ${props => props.theme.spacing(5)};
  margin: 0 auto;

  @media ${props => props.theme.media.lg} {
    width: 592px;
    padding: 100px ${props => props.theme.spacing(2)};
  }

  @media ${props => props.theme.media.md} {
    width: 100%;
    padding: 60px ${props => props.theme.spacing(2)};
  }
`

const QuoteText = styled.div`
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
  color: ${props => props.theme.palette.dark};
  line-height: 1.4em;

  @media ${props => props.theme.media.lg} {
    font-size: 18px;
  }
`

const QuoteAuthor = styled.p`
  text-align: right;
  font-size: 18px;
  color: ${props => props.theme.palette.dark};
  line-height: 1.6em;

  @media ${props => props.theme.media.lg} {
    font-size: 16px;
  }

  &::before {
    content: "-";
    margin-right: ${props => props.theme.spacing(0.75)};
  }
`

const Quote = ({
  imageUrl,
  bgColor,
  quote,
  author
}) => (
  <Skewer
    bgColor={bgColor}
    bgImageUrl={imageUrl}
    layer={1200}
  >
    <QuoteRoot>
      <QuoteText dangerouslySetInnerHTML={{ __html: quote }} />
      <QuoteAuthor>{author}</QuoteAuthor>
    </QuoteRoot>
  </Skewer>
)

Quote.propTypes = {
  imageUrl: PropTypes.string,
  bgColor: PropTypes.string,
  quote: PropTypes.string,
  author: PropTypes.string
}

export default Quote
