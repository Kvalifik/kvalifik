import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import closeIcon from 'graphics/cross.svg'
import rightArrow from 'graphics/rightArrow.svg'
import targetBlank from 'graphics/target_blank.svg'
import { Link } from 'gatsby'
import { enableScroll } from 'utils/modal'

const Root = styled.div`
  position: relative;
  height: 100%;
`

const Preview = styled.div`
  height: 100%;
  min-width: 700px;
  transition: opacity 0.2s linear;
  opacity: 0;
  color: white;
  overflow-x: hidden;

  ${props => (props.toolPreviewIsOpen && !props.toolPreviewIsAnimating) && css`
      transition: opacity 0.2s linear;
      opacity: 1;
  `}

  @media ${props => props.theme.media.lg} {
    right: 0;
    min-width: 150px;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media ${props => props.theme.media.lg} {
    grid-template-rows: 200px;
    height: auto;
  }
`

const Description = styled.div`
  h3 {
    color: ${props => props.theme.palette.primary.D};
    text-transform: uppercase;
    font-size: 16px;
  }

  @media ${props => props.theme.media.lg} {
    grid-row: 2 / -1;
  }
`
const HeaderImage = styled.img`
  margin-bottom: ${props => props.theme.spacing(2)};
  height: 70px;
`

const Header = styled.h3`
  font-size: 30px;
`

const Left = styled.div`
  padding: ${props => props.theme.spacing(4)};
  grid-column: 1 / 2;
  grid-row: 1 / -1;

  @media ${props => props.theme.media.lg} {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
  }
`

const Image = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 2 / -1;
  grid-row: 1 / 2;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;

  @media ${props => props.theme.media.lg} {
    grid-column: -1 / 1;
  }
`

const CloseIcon = styled.img`
  transition: 0.4s 0.1s linear, 0.2s ease-out;
  cursor: pointer;
  position: absolute;
  z-index: 2000;
  padding: ${props => props.theme.spacing(4)};
  right: 0;
  top: 0;
  opacity: 0;
  filter: drop-shadow(1px 1px 4px black);

  &:hover {
    transform: scale(1.2);
  }

  ${props => props.toolPreviewIsOpen && css`
    opacity: 1;
  `}
`

const CaseExamples = styled.div`
  margin: ${props => props.theme.spacing(4, 0)};
  margin-right: ${props => props.theme.spacing(4)};
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-auto-rows: 1fr;
  grid-gap: ${props => props.theme.spacing(2, 4)};

  @media ${props => props.theme.media.lg} {
    grid-column: -1 / 1;
    margin: ${props => props.theme.spacing(0, 4, 4)};
  }
`

const Resource = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 80px;
  padding: ${props => props.theme.spacing(0, 4)};
  color: white;
  background: ${props => props.theme.hexToRgba('#ffffff', 0.2)};
  text-transform: uppercase;
  height: 100%;
  width: 100%;
  border: 0;
  grid-column: 2 / 3;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.26, 0.2, 0.09, 0.97);

  @media ${props => props.theme.media.lg} {
    grid-column: 1 / 3;
  }

  &:hover {
    transform: scale(0.98);
  }

  ${props => props.subText && css`
    ::after {
      content: '${props => props.subText}';
      display: block;
      width: 100%;
      text-transform: none;
      margin-top: 5px;
      font-size: 10px;
    }
  `}
`

const Examples = styled(Link)`
  text-decoration: none;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: ${props => props.theme.spacing(2)};
  color: white;
  background: ${props => props.theme.hexToRgba('#ffffff', 0.2)};
  text-transform: uppercase;
  height: 100%;
  width: 100%;
  border: 0;
  grid-column: 1 / 2;

  @media ${props => props.theme.media.lg} {
    grid-column: 1 / 3;
  }
  cursor: pointer;
  position: relative;
  transition: transform 0.2s cubic-bezier(0.26, 0.16, 0.09, 0.97);

  &:hover {
    transform: scale(0.98);
  }
  padding-right: ${props => props.theme.spacing(6)};
`

const InlineArrow = styled.img`
  position: absolute;
  right: ${props => props.theme.spacing(2)};
`

const ExternalLink = styled.img`
  margin-top: -2px;
  margin-left: 2px;
`

const ExampleHeader = styled.h4`
  text-transform: uppercase;
  color: ${props => props.theme.palette.primary.D};
  grid-column-start: ${props => props.right ? '1' : '2'};
  grid-row-start: 1;
  margin: 0;
  justify-self: bottom;
  align-self: self-end;

  @media ${props => props.theme.media.lg} {
    grid-row: auto;
    grid-column: 1 / 3;
  }
`

const ToolPreview = ({
  toolPreviewIsOpen,
  toolPreviewIsAnimating,
  closeWindow,
  tool
}) => (
  <Root>
    <CloseIcon toolPreviewIsOpen={toolPreviewIsOpen} src={closeIcon} onClick={closeWindow} />
    <Preview toolPreviewIsOpen={toolPreviewIsOpen} toolPreviewIsAnimating={toolPreviewIsAnimating} >
      {(toolPreviewIsOpen && !toolPreviewIsAnimating) && (
        <ContentWrapper>
          <Left>
            <HeaderImage src={tool.icon && tool.icon.url} />
            <Header tool={tool}>{tool.headline} </Header>
            <Description dangerouslySetInnerHTML={{ __html: tool.description }} />
          </Left>
          <Image image={tool.image.url} />
          <CaseExamples>
            {tool.references.length > 0 && (
              <ExampleHeader left>RESSOURCES</ExampleHeader>
            )}
            {tool.references.map((reference, i) =>
              <Resource
                subText={reference.description || 'none'}
                to={reference.path}
                target={reference.isExternal && '_blank'}
                onClick={enableScroll}
              >
                {reference.name}
                {reference.isExternal && <ExternalLink src={targetBlank} />}
              </Resource>
            )}
            {tool.examples.length > 0 && (
              <ExampleHeader right>EXAMPLES FROM OUR CASES</ExampleHeader>
            )}
            {tool.examples.map((example, i) => (
              <Examples
                key={i}
                to={example.path}
                target={example.isExternal && '_blank'}
                onClick={enableScroll}
              >
                {example.name}
                <InlineArrow src={rightArrow} />
              </Examples>
            ))}
          </CaseExamples>
        </ContentWrapper>
      )}
    </Preview>
  </Root>
)

ToolPreview.propTypes = {
  tool: PropTypes.any,
  closeWindow: PropTypes.func,
  toolPreviewIsOpen: PropTypes.bool,
  toolPreviewIsAnimating: PropTypes.bool
}

export default ToolPreview
