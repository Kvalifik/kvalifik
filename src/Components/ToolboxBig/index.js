import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Container from 'Blocks/Container'
import Padder from 'Blocks/Padder'
import Skewer from 'Blocks/Skewer'
import SearchIcon from 'graphics/search.svg'
import CloseIcon from 'graphics/close.svg'
import LinkThumb from 'Components/Shared/LinkThumb'
import ToolPreview from './ToolPreview'
import { disableScroll, enableScroll } from 'utils/modal'
import idFromLabel from 'utils/idFromLabel'
import { scrollToId } from 'utils/scroll'
import theme from 'utils/theme'

const Root = styled.div`
  color: white;
  position: relative;
  z-index: 2000; /* ??? */
`

const Overlay = styled.div`
  position: fixed;
  z-index: 100;
  background-color: black;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transition: all ${props => props.openAnimationLength / 1000}s cubic-bezier(0.71, 1, 0.15, 1);

  ${props => props.toolPreviewIsOpen && css`
    pointer-events: all;
    opacity: 0.3;
    @media ${props => props.theme.media.md} {
      opacity: 0.6;
    }
  `}
`

const Description = styled.div`
  margin: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
`

const SearchWrapper = styled.div`
  margin: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;

  ::before {
    content: url(${SearchIcon});
    margin-top: 2px;
    margin-left: ${props => props.theme.spacing(1.5)};
    position: absolute;
  }
`

const Searcher = styled.input`
  outline: none;
  width: 100%;
  border: 0;
  padding: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(6)};
  font-size: 14px;
  background-color: ${props => props.theme.hexToRgba(props.theme.palette.secondary.D, 0.2)};
  color: ${props => props.theme.palette.primary.D};

  ::placeholder {
    color: ${props => props.theme.hexToRgba(props.theme.palette.secondary.D, 0.8)};
  }
`

const TopWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${props => props.theme.media.md} {
    grid-template-columns: 1fr;
    width: 100%;
  }
  grid-gap: ${props => props.theme.spacing(2)};
`

const Filter = styled.button`
  text-align: left;
  display: inline-flex;
  align-items: center;
  outline: none;
  font-size: 14px;
  color: ${props => props.theme.palette.primary.D};
  border: 1px solid ${props => props.theme.palette.primary.D};
  background: transparent;
  padding: ${props => props.theme.spacing(2, 4)};

  @media ${props => props.theme.media.md} {
    padding: ${props => props.theme.spacing(1, 2)};
    width: 100%;
  }

  inline-size: max-content;
  transition: 0.1s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);

  :hover {
    transform: scale(1.01);
    border: 1px solid white;
    color: white;
  }

  margin: ${props => props.theme.spacing(1)};

  ${props => props.isChosen
    ? css`
      transform: scale(1) !important;
      color: white;
      border: 1px solid white;
    `
    : css`
      cursor: pointer;
    `}
`

const Filters = styled.div`
  margin: ${props => props.theme.spacing(2)};
  margin-left: ${props => props.theme.spacing(1)};
  margin-right: ${props => props.theme.spacing(3)};
`

const RemoveFilter = styled.span`
  transition: width 0.3s 0s cubic-bezier(0.26, 0.16, 0.09, 0.97);
  display: inline-flex;
  width: 0;
  overflow: hidden;
  position: relative;
  height: 20px;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  margin-right: ${props => props.theme.spacing(1)};

  ::before {
    content: url(${CloseIcon});
    position: absolute;
    height: 32px;
    width: 35px;
    margin-left: -8px;
    display: inline-block;
    transform: scale(0.5);
  }

  ${props => props.isChosen &&
    css`
      width: 35px;
  `}
`

const ToolView = styled.div`
  margin: ${props => props.theme.spacing(2)};
  margin-top: ${props => props.theme.spacing(8)};
  display: grid;
  grid-gap: ${props => props.theme.spacing(4)};
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  @media ${props => props.theme.media.md} {
    grid-gap: ${props => props.theme.spacing(2)};
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  @media ${props => props.theme.media.sm} {
    grid-template-columns: 1fr;
  }
`

const PseudoPreview = styled.div`
  position: fixed;
  max-width: 1300px;
  max-height: 1000px;
  margin: auto;
  z-index: 1000;

  ${props => props.toolPreviewIsOpen ? css`
    z-index: 1000;
    background-color: #252525;
    opacity: 1;
    pointer-events: all;
    top: ${props => props.theme.spacing(8)};
    left: ${props => props.theme.spacing(17)};
    right: ${props => props.theme.spacing(17)};
    bottom: ${props => props.theme.spacing(8)};

    @media ${props.theme.media.md} {
      top: ${props => props.theme.spacing(3)};
      left: ${props => props.theme.spacing(11)};
      right: ${props => props.theme.spacing(11)};
      bottom: ${props => props.theme.spacing(3)};
    }

    @media ${props.theme.media.sm} {
      top: ${props => props.theme.spacing(11)};
      left: ${props => props.theme.spacing(3)};
      right: ${props => props.theme.spacing(3)};
      bottom: ${props => props.theme.spacing(11)};
    }
  ` : css`
    opacity: 0;
    pointer-events: none;
    background-color: rgb(33, 50, 44);
    top: ${props => props.pseudoPreviewCoords[0]}px;
    left: ${props => props.pseudoPreviewCoords[1]}px;
    right: ${props => props.pseudoPreviewCoords[2]}px;
    bottom: ${props => props.pseudoPreviewCoords[3]}px;
  `}

  ${props => props.toolPreviewIsAnimating && css`
    transition:
      all ${props => props.openAnimationLength / 1000}s cubic-bezier(0.4, 0, 0, 1),
      opacity ${props => props.openAnimationLength / 1000}s cubic-bezier(0, 1.08, 0.34, 1.01);
    ${props => !props.toolPreviewIsOpen && css`
      transition:
        all ${props => (props.openAnimationLength - 100) / 1000}s 0.1s cubic-bezier(0.6, 0, 0, 1),
        opacity ${props => props.openAnimationLength / 1000}s cubic-bezier(0.91, 0.01, 1, 0.08);
    `}
  `}
`

class ToolboxBig extends Component {
  state = {
    chosenFilter: '',
    searchQuery: '',
    toolPreviewIsOpen: false,
    toolPreviewIsAnimating: false,
    chosenTool: 0,
    pseudoPreviewCoords: [0, '100%', 0, '100%'],
    openAnimationLength: 500
  }

  changeSearchQuery (event) {
    this.setState({ searchQuery: event.target.value })
  }

  chooseFilter (filter) {
    this.setState({ chosenFilter: filter })
  }

  openToolPreview (ev, i, scrollDown = false) {
    const coords = ev ? ev.currentTarget.getBoundingClientRect() : this.state.pseudoPreviewCoords

    disableScroll()
    const newPseudoPreviewCoords = [
      coords.top,
      coords.left,
      window.innerWidth - coords.right,
      window.innerHeight - coords.bottom
    ]
    this.setState({
      pseudoPreviewCoords: newPseudoPreviewCoords,
      chosenTool: i
    })
    setTimeout(() => {
      this.setState({
        toolPreviewIsOpen: true,
        toolPreviewIsAnimating: true
      })
    }, 10)
    setTimeout(() => {
      this.setState({ toolPreviewIsAnimating: false })
    }, this.state.openAnimationLength)

    if (scrollDown) {
      scrollToId('ToolBoxBig', null, () => {
        history.replaceState(null, null, '#' + idFromLabel(this.props.tools[i].headline))
      })
    } else {
      history.replaceState(null, null, '#' + idFromLabel(this.props.tools[i].headline))
    }
  }

  closeToolPreview () {
    this.setState({ toolPreviewIsOpen: false })
    this.setState({ toolPreviewIsAnimating: true })
    setTimeout(() => {
      enableScroll()
      this.setState({ toolPreviewIsAnimating: false })
    }, this.state.openAnimationLength)
    history.replaceState(null, null, '#')
  }

  componentDidMount () {
    if (window && window.location && window.location.hash) {
      this.props.tools.find((tool, index) => {
        if ('#' + idFromLabel(tool.headline) === window.location.hash) {
          this.openToolPreview(null, index, true)
          return true
        }
        return false
      })
    }
  }

  componentWillUnmount () {
    enableScroll()
  }

  renderTool (tool, i) {
    const { headline, description } = tool
    const searchBy = this.state.searchQuery.toUpperCase()

    const toolIsQueryed = headline.toUpperCase().search(searchBy) !== -1 ||
      description.toUpperCase().search(searchBy) !== -1

    const toolIsFiltered = (tool.toolFilters
      .map(toolFilter => toolFilter.title)
      .indexOf(this.state.chosenFilter) !== -1) || this.state.chosenFilter === ''

    if (toolIsFiltered && toolIsQueryed) {
      return (
        <LinkThumb
          onClick={this.openToolPreview.bind(this)}
          headline={tool.headline}
          iconUrl={tool.icon && tool.icon.url}
          color={theme.palette.primary.D}
          key={i}
          id={i}
        />
      )
    }

    return null
  }

  renderToolFilter (toolFilter, i) {
    const isChosen = this.state.chosenFilter === toolFilter.title
    return (
      <Filter
        isChosen={isChosen}
        onClick={
          !isChosen
            ? this.chooseFilter.bind(this, toolFilter.title)
            : () => null
        }
        key={i}
      >
        <RemoveFilter
          isChosen={isChosen}
          onClick={this.chooseFilter.bind(this, '')}
          key={i}
        />
        {toolFilter.title}
      </Filter>
    )
  }

  render () {
    const {
      sideText,
      smallDescription,
      backgroundColor,
      toolFilters,
      tools
    } = this.props

    const {
      toolPreviewIsOpen,
      openAnimationLength,
      pseudoPreviewCoords,
      toolPreviewIsAnimating,
      chosenTool,
      searchQuery
    } = this.state

    return (
      <Root id="ToolBoxBig">
        <Overlay
          onClick={this.closeToolPreview.bind(this)}
          toolPreviewIsOpen={toolPreviewIsOpen}
          openAnimationLength={openAnimationLength}
        />
        <PseudoPreview
          openAnimationLength={openAnimationLength}
          pseudoPreviewCoords={pseudoPreviewCoords}
          toolPreviewIsOpen={toolPreviewIsOpen}
          toolPreviewIsAnimating={toolPreviewIsAnimating}
        >
          <ToolPreview
            tool={tools[chosenTool]}
            closeWindow={this.closeToolPreview.bind(this)}
            toolPreviewIsOpen={toolPreviewIsOpen}
            toolPreviewIsAnimating={toolPreviewIsAnimating}
          />
        </PseudoPreview>
        <Skewer bgColor={backgroundColor}>
          <Padder>
            <Container sideText={sideText}>
              <TopWrapper>
                <Description>
                  {smallDescription}
                </Description>
                <SearchWrapper>
                  <Searcher
                    placeholder="Search here_"
                    type="text"
                    value={searchQuery}
                    onChange={this.changeSearchQuery.bind(this)}
                  />
                </SearchWrapper>
              </TopWrapper>
              <Filters>
                {toolFilters.map(this.renderToolFilter.bind(this))}
              </Filters>
              <ToolView>
                {tools.map(this.renderTool.bind(this))}
              </ToolView>
            </Container>
          </Padder>
        </Skewer>
      </Root>
    )
  }
}

ToolboxBig.propTypes = {
  sideText: PropTypes.string,
  smallDescription: PropTypes.string,
  backgroundColor: PropTypes.string,
  toolFilters: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string
  })),
  tools: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.shape({
      url: PropTypes.string
    }),
    image: PropTypes.shape({
      url: PropTypes.string
    }),
    bgColor: PropTypes.shape({
      hex: PropTypes.string
    }),
    references: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      description: PropTypes.string,
      isExternal: PropTypes.bool,
      name: PropTypes.string
    })),
    examples: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      isExternal: PropTypes.bool,
      name: PropTypes.string
    }))
  }))
}

export default ToolboxBig
