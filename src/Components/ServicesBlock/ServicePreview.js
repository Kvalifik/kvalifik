import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { servicePropType } from 'models/service'
import LinkThumb from 'Components/Shared/LinkThumb'

import idFromLabel from 'utils/idFromLabel'
import theme from 'utils/theme'
import maxLengthString from '../../utils/maxLengthString'

const Root = styled.div`
  ${props => props.theme.grid.all([
    'display: grid',
    'grid-template-columns: 5fr 4fr'
  ])}

  @media ${props => props.theme.media.xl} {
    display: block;
  }
  
  height: 100%;
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

const Media = styled.div`
  ${props => props.theme.grid.all([
    'grid-column: 2',
    'grid-row: 1'
  ])}

  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${props => props.theme.media.xl} {
    height: 300px;
    width: 100%;
  }

  @media ${props => props.theme.media.lg} {
    height: 200px;
    width: 100%;
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
  
`

const ServicePreview = ({
  service: {
    title,
    description,
    images,
    relatedTools
  },
  toolboxUrl
}) => (
  <Root>
    <Media src={images && images.length > 0 ? images[0].url : ''} />
    <TextContainer>
      <div>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
        <Description dangerouslySetInnerHTML={{ __html: maxLengthString(description, 30) }} />
        <ReadMore>Read more</ReadMore>
      </div>
      <RelatedWrapper>
        {relatedTools.length > 0 && <ToolsHeader>Related tools</ToolsHeader>}
        <Tools>
          {relatedTools.slice(0, 2).map((tool, index) => (
            <LinkThumb
              key={index}
              headline={tool.headline}
              iconUrl={tool.icon && tool.icon.url}
              color={theme.palette.primary.D}
              to={`${toolboxUrl}#${idFromLabel(tool.headline)}`}
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
