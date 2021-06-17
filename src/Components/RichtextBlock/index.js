import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from 'Components/Shared/Container'
import Skewer from 'Components/Shared/Skewer'

const Root = styled.div`
  &::after {
    clear: both;
    display: table;
    content: "";
  }
`

const Content = styled.div`
  font-size: 16px;
  color: ${props => props.textColor};
  padding: ${props => props.theme.spacing(5, 2)};
  width: 80%;
  max-width: 75ch;
  margin: 0 auto;

  @media ${props => props.theme.media.lg} {
    width: 100%;
  }

  h2{
    margin-top: 3rem;
  }

  p, li {
    margin: ${props => props.theme.spacing(0.5)}; 
  }

  li p{
    margin-left: 0;
  }

  strong {
    font-weight: 700;
  }

  a{
    color: ${props => props.textColor};
    text-decoration: underline;
  }

  blockquote{
    padding: 1rem;
    background-color: ${props => props.theme.hexToRgba(props.textColor, 0.075)};
    color: ${props => props.textColor};

    @media ${props => props.theme.media.lg} {
      margin: 1rem 0;
    }
  }

  .gatsby-highlight{
    padding: 0.5rem 0;
    margin: 2rem 0;
  }

  /*.gatsby-highlight pre{
    border-radius: 0 10px 10px 10px;
  }*/

  .gatsby-highlight::before {
    position: relative;
    bottom: 0;
    padding: 0.5rem 1rem;;
    //border-radius: 10px 10px 0px 0px;
    content: attr(data-language);
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: #2d2d2d;
    color: #ccc;
  }
`

const RichtextBlock = ({
  text,
  bgColor,
  textColor
}) => (
  <Root>
    <Skewer bgColor={bgColor.hex} layer={1200}>
      <Container overflowLeft overflowRight>
        <Content
          bgColor={bgColor.hex}
          textColor={textColor.hex}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </Container>
    </Skewer>
  </Root>
)

RichtextBlock.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  text: PropTypes.string
}

export default RichtextBlock
