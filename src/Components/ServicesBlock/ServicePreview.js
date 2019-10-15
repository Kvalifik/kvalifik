import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { servicePropType } from 'models/service'
import LinkThumb from 'Components/Shared/LinkThumb'

import idFromLabel from 'utils/idFromLabel'
import theme from 'utils/theme'
import maxLengthString from '../../utils/maxLengthString'
import { Link } from 'gatsby'
import arrowImg from 'graphics/arrow.svg'


const Root = styled.div`
  ${props => props.theme.grid.all([
    'display: grid'
  ])}

  @media ${props => props.theme.media.xl} {
    display: block
  };

  height: 100%;
  min-height: 100%;
  min-height: -moz-available;        
  min-height: -webkit-fill-available;
  min-height: fill-available;
  grid-template-rows: 100%;
  background-color: ${props => props.theme.palette.dark};
`

const TextContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;

  ${props => props.theme.grid.all([
    'grid-column: 1',
    'grid-row: 1'
  ])}

  padding: ${props => props.theme.spacing(3)};

  @media ${props => props.theme.media.xl} {
    padding: ${props => props.theme.spacing(2)};
  }
`

const Title = styled.h2`
  ${props => props.theme.typography.header.mixin()}
  color: ${props => props.theme.palette.light};
  font-size: 20px;
  line-height: 1.6em;
  margin: ${props => props.theme.spacing(0, 0, 2)};
  p {
    span{
      font-weight: bold !important;
    }
    margin: 0;
  }

  strong {
    color: ${props => props.theme.palette.primary.E};
  }

  @media ${props => props.theme.media.lg} {
    font-size: 18px;
    line-height: 1.4em;
  }
`

const Description = styled.div`
  ${props => props.theme.typography.body.mixin()}
  color: ${props => props.theme.palette.light};
  font-size: 14px;
  line-height: 1.4em;
  margin: ${props => props.theme.spacing(0, 0, 4)};

  p {
    margin: 0;
  }
`

const ToolsHeader = styled.h3`
  color: ${props => props.theme.palette.light};
`

const Tools = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 130px);
  grid-gap: 16px;

  @media ${props => props.theme.media.sm} {
    grid-template-columns: 1fr;
  }
`

const RelatedWrapper = styled.div`
  bottom: ${props => props.theme.spacing(3)};
  width: 100%;
  align-self: end;
`

const ReadMore = styled.div`
  a{
    text-decoration: none;
    color: white;
  }
  text-align: right;
`

const Arrow = styled.img`
  margin: 0;
  height: 15px;
  filter: invert(100%);
  padding-left: ${props => props.theme.spacing(1)};
  transform: translateY(20%);
`

const ServicePreview = ({
  service: {
    title,
    label,
    description,
    images,
    exampleCases,
    relatedTools
  },
  toolboxUrl
}) => (
  <Root>
    <TextContainer>
      <div>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
        <Description dangerouslySetInnerHTML={{ __html: maxLengthString(description, 85) }} />
        <ReadMore>
          <Link to={`/services/#${idFromLabel(label)}`}>
            Read more <Arrow src={arrowImg} />
          </Link>
        </ReadMore>

      </div>
      <RelatedWrapper>
        {exampleCases.length > 0 && <ToolsHeader>Relevant cases</ToolsHeader>}
        <Tools>
          {exampleCases.slice(0, 2).map((work, index) => (
            <LinkThumb
              key={index}
              headline={work.forWho}
              to={work.url}
              color={theme.palette.light}
            />
          ))}
        </Tools>
      </RelatedWrapper>
    </TextContainer>
  </Root>
)

ServicePreview.propTypes = {
  service: servicePropType,
  toolboxUrl: PropTypes.string
}

export default ServicePreview
