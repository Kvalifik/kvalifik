import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import LinkThumb from 'Components/Shared/LinkThumb'
import Icon from './Icon'

import theme from 'utils/theme'
import { servicePropType } from 'models/service'
import idFromLabel from 'utils/idFromLabel'

const Root = styled.div`
  @media ${props => props.theme.media.lg} {
    display: block;
  }

  background-color: ${props => props.theme.palette.dark};
  margin-bottom: 40vh;
  padding-top: 10px;
`

const Header = styled.h2`
  display: none;

  color: ${props => props.theme.palette.light};

  margin: ${props => props.theme.spacing(0, 0, 4)};

  text-decoration: none;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-size: 24px;
  font-weight: bold;
  transform-origin: center;
  transition: transform 0.4s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  transform: ${props => props.selected ? 'none !important' : 'none'};
  cursor: ${props => props.selected ? 'default' : 'pointer'};
  outline: none;

  & > ${Icon} {
    filter: ${props => !props.selected ? 'invert(1)' : 'none'};
  }

  @media ${props => props.theme.media.lg} {
    font-size: 18px;
    display: flex;
  }
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
    exampleCases,
    icon,
    label
  },
  toolboxPageUrl,
  id
}) => (
  <Root id={id}>
    <Header
      onClick={(ev) => { ev.preventDefault() }}
    >
      {label}
      <Icon src={icon && icon.url} right />
    </Header>
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
                <LinkThumb
                  headline={work.forWho}
                  to={work.page && work.page.url}
                  color={theme.palette.light}
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
                <LinkThumb
                  headline={tool.headline}
                  iconUrl={tool.icon.url}
                  color={theme.palette.primary.D}
                  to={`${toolboxPageUrl}#${idFromLabel(tool.headline)}`}
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
  id: PropTypes.string,
  toolboxPageUrl: PropTypes.string
}

export default ServicePreview
