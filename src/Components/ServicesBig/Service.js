import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { servicePropType } from 'models/service'
import ToolsThumb from 'Components/Shared/ToolThumb'
import CaseLink from './CaseLink'

const Root = styled.div`
  @media ${props => props.theme.media.lg} {
    display: block;
  }

  background-color: ${props => props.theme.palette.dark};
  margin-bottom: 40vh;
  padding-top: 10px;
`

const TextContainer = styled.div`
  padding-top: ${props => props.theme.spacing(2)};
`

const Media = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  width: 100%;
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
  ${props => props.theme.grid.all([
    'display: grid'
  ])}
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) 16px);

  > * {
    margin-bottom: 16px;
  }
`

const ServicePreview = ({
  service: {
    title,
    description,
    image,
    relatedTools,
    exampleCases
  },
  id
}) => (
  <Root id={id}>
    <Media src={image ? image.url : ''} />
    <TextContainer>
      <Title dangerouslySetInnerHTML={{ __html: title }} />
      <Description dangerouslySetInnerHTML={{ __html: description }} />
      {exampleCases && exampleCases.length > 0 && (
        <>
          <ToolsHeader>Examples from our cases</ToolsHeader>
          <Tools>
            {exampleCases.map((work, index) => (
              <React.Fragment key={index}>
                <CaseLink
                  headline={work.forWho}
                  to={work.page && work.page.url}
                />
                <span />
              </React.Fragment>
            ))}
          </Tools>
        </>
      )}
      {relatedTools && relatedTools.length > 0 && (
        <>
          <ToolsHeader>Related tools</ToolsHeader>
          <Tools>
            {relatedTools.map((tool, index) => (
              <React.Fragment key={index}>
                <ToolsThumb
                  headline={tool.headline}
                  icon={tool.icon}
                />
                <span />
              </React.Fragment>
            ))}
          </Tools>
        </>
      )}
    </TextContainer>
  </Root>
)

ServicePreview.propTypes = {
  service: servicePropType,
  id: PropTypes.string
}

export default ServicePreview
