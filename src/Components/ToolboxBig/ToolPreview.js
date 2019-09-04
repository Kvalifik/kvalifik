import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import closeIcon from 'graphics/cross.svg'
import rightArrow from 'graphics/rightArrow.svg'
import targetBlank from 'graphics/target_blank.svg'
import { Link } from 'gatsby'

const Root = styled.div`
  position: relative;
  height: 100%;

`

const Preview = styled.div`
  /* overflow-x: scroll; */
  height: 100%;
  min-width: 700px;
  /* padding: ${props => props.theme.spacing(8, 4)}; */
  transition: opacity 0.2s linear;
  opacity: 0;
  color: white;
  ${props => (props.toolPreviewIsOpen && !props.toolPreviewIsAnimating) && css`
      transition: opacity 0.2s linear;
      opacity: 1;
  `}

  @media ${props => props.theme.media.lg} {
    right: 0;
    min-width: 150px;
  }
  overflow-x: scroll;
  /* height: 100%; */
`

const ContentWrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media ${props => props.theme.media.lg} {
    grid-template-rows: 200px 1fr auto;
    min-height: 150%;
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
    /* right: -${props => props.theme.spacing(8)};
    top: -${props => props.theme.spacing(8)}; */
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
  @media ${props => props.theme.media.md} {
    grid-column: -1 / 1;
    margin: ${props => props.theme.spacing(0, 4)};
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
  padding: ${props => props.theme.spacing(0, 2)};
  color: white;
  background: ${props => props.theme.hexToRgba('#ffffff', 0.2)};
  text-transform: uppercase;
  height: 100%;
  width: 100%;
  border: 0;
  grid-column: 1 / 2;
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
`

const ToolPreview = (props) => {
  return (
    <Root>
      <CloseIcon toolPreviewIsOpen={props.toolPreviewIsOpen} src={closeIcon} onClick={props.closeWindow} />
      <Preview toolPreviewIsOpen={props.toolPreviewIsOpen} toolPreviewIsAnimating={props.toolPreviewIsAnimating} >
        {(props.toolPreviewIsOpen && !props.toolPreviewIsAnimating) && <ContentWrapper>
          <Left>
            <HeaderImage src={props.tool.icon.url} />
            <Header tool={props.tool}>{props.tool.headline} </Header>
            <Description dangerouslySetInnerHTML={{ __html: props.tool.description }} />
          </Left>
          <Image image={props.tool.image.url} />
          <CaseExamples>
            {props.tool.references.length > 0 && <ExampleHeader left>RESSOURCES</ExampleHeader>}
            {props.tool.examples.length > 0 && <ExampleHeader right>EXAMPLES FROM OUR CASES</ExampleHeader>}
            {props.tool.references.map((reference, i) =>
              <Resource subText={reference.description || null} to={reference.path} target={reference.isExternal && '_blank'}>
                {reference.name}
                {reference.isExternal && <ExternalLink src={targetBlank} />}
              </Resource>
            )}
            {props.tool.examples.map((example, i) =>
              <Examples key={i} to={example.path} target={example.isExternal && '_blank'}>
                {example.name}
                <InlineArrow src={rightArrow} />
              </Examples>
            )}
          </CaseExamples>
        </ContentWrapper>}
      </Preview>
    </Root>
  )
}

ToolPreview.propTypes = {
  tool: PropTypes.any,
  closeWindow: PropTypes.func,
  toolPreviewIsOpen: PropTypes.bool,
  toolPreviewIsAnimating: PropTypes.bool
}

export default ToolPreview
