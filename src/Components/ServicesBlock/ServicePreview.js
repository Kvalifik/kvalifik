import React from 'react'
import styled from 'styled-components'
import { servicePropType } from 'models/service'
import LinkThumb from 'Components/Shared/LinkThumb'

import idFromLabel from 'utils/idFromLabel'
import theme from 'utils/theme'

const Root = styled.div`
  ${props => props.theme.grid.all([
    'display: grid',
    'grid-template-columns: 5fr 4fr'
  ])}

  @media ${props => props.theme.media.lg} {
    display: block;
  }

  background-color: ${props => props.theme.palette.dark};
`

const TextContainer = styled.div`
  ${props => props.theme.grid.all([
    'grid-column: 1',
    'grid-row: 1'
  ])}

  padding: ${props => props.theme.spacing(2, 2, 2, 4)};

  @media ${props => props.theme.media.lg} {
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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 16px;
`

const ServicePreview = ({
  service: {
    title,
    description,
    image,
    relatedTools
  }
}) => (
  <Root>
    <Media src={image ? image.url : ''} />
    <TextContainer>
      <Title dangerouslySetInnerHTML={{ __html: title }} />
      <Description dangerouslySetInnerHTML={{ __html: description }} />
      <ToolsHeader>Related tools</ToolsHeader>
      <Tools>
        {relatedTools.slice(0, 2).map((tool, index) => (
          <LinkThumb
            key={index}
            headline={tool.headline}
            iconUrl={tool.icon && tool.icon.url}
            color={theme.palette.primary.D}
            to={`/toolbox#${idFromLabel(tool.headline)}`}
          />
        ))}
      </Tools>
    </TextContainer>
  </Root>
)

ServicePreview.propTypes = {
  service: servicePropType
}

export default ServicePreview
